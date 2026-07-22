"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import type { Message } from "@ai-sdk/react";

type StagedSystem = {
  slot: number;
  title: string;
  what: string;
  wiredTo: string[];
  estSavedPerWeek: string;
  sampleLine?: string;
};

type Timeline =
  | { kind: "text"; id: string; role: "user" | "assistant"; text: string }
  | {
      kind: "tool";
      id: string;
      toolName: string;
      state: "partial-call" | "call" | "result";
      args: Record<string, unknown>;
      result?: unknown;
    };

const APPLY_HREF = "/apply?kind=build&variant=build-b&src=talk";
const TOOL_LABEL: Record<string, string> = {
  stage_system: "staging",
  capture_lead: "capturing lead",
  notify_will: "pinging will",
  prep_brief: "drafting your application",
};
// Same agent, both sides. What Will's OS runs on his customers, it's running on you.
const TOOL_DUAL: Record<string, string> = {
  stage_system: "same skill that drafts Will's proposals",
  capture_lead: "same skill that catalogs everyone who lands here",
  notify_will: "same skill that texts Will when a customer needs him",
  prep_brief: "same skill that pre-briefs Will before every call",
};
const PREFILL_KEY = "talk:prefill:v1";
const PREFILL_TTL_MS = 60 * 60 * 1000;

type PrefillPayload = {
  savedAt: number;
  email?: string;
  hotness?: string;
  name?: string;
  phone?: string;
  website?: string;
  staged: StagedSystem[];
  notesToWill?: string;
  summary?: string;
  suggestedFormFill?: {
    projectText?: string;
    stuck?: string;
    shipped?: string;
  };
};

export function TalkExperience() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: "/api/talk",
    initialMessages: [
      {
        id: "seed-1",
        role: "assistant",
        content:
          "I'm one agent from Will's OS. My job: fit-check you against The Build before you apply, then pre-fill your application if you're in. What kind of business do you run, and where does the week get eaten?",
      },
    ],
  });

  const { timeline, staged, brief, lead } = useMemo(
    () => buildTimeline(messages),
    [messages],
  );

  useEffect(() => {
    if (staged.length >= 3 && !drawerOpen) {
      if (typeof window !== "undefined" && window.innerWidth < 900) {
        setDrawerOpen(true);
      }
    }
  }, [staged.length, drawerOpen]);

  // Mirror conversation state to localStorage so /apply can prefill.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (staged.length === 0 && !lead && !brief) return;
    const payload: PrefillPayload = {
      savedAt: Date.now(),
      email: lead?.email,
      hotness: lead?.hotness,
      name: lead?.name,
      phone: lead?.phone,
      website: lead?.website,
      staged,
      notesToWill: brief?.notesToWill,
      summary: brief?.summary,
      suggestedFormFill: brief?.suggestedFormFill,
    };
    try {
      window.localStorage.setItem(PREFILL_KEY, JSON.stringify(payload));
    } catch {
      // storage disabled — silent
    }
  }, [staged, lead, brief]);

  const readyToApply = staged.length >= 3 && !!brief;

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, status]);

  return (
    <div className="talk-shell">
      <header className="talk-nav">
        <a href="/" className="brand-mini" aria-label="stuck.builders">
          <svg width="18" height="18" viewBox="0 0 512 512" aria-hidden="true">
            <rect width="512" height="512" fill="#0C0C0B" />
            <rect x="108" y="108" width="150" height="34" fill="#4A4D46" />
            <rect x="108" y="108" width="34" height="296" fill="#4A4D46" />
            <rect x="108" y="370" width="150" height="34" fill="#4A4D46" />
            <rect x="194" y="228" width="158" height="56" fill="#128A4B" />
            <polygon points="352,152 474,256 352,360" fill="#128A4B" />
          </svg>
          <span>stuck<span className="dim">.builders</span></span>
        </a>
        <div className="nav-mid">
          <span className={`status-dot ${status === "streaming" ? "on" : ""}`} aria-hidden />
          <span className="status-label">
            {status === "streaming" ? "thinking…" : "application fit-check agent"}
          </span>
        </div>
        <button
          className="drawer-btn"
          onClick={() => setDrawerOpen((o) => !o)}
          aria-expanded={drawerOpen}
        >
          <span className="count">{staged.length}/3</span>
          <span className="lbl">staged</span>
        </button>
      </header>

      <main className="talk-main">
        <section className="chat-col" aria-label="Conversation">
          <div className="chat-scroll">
            <div className="chat-inner">
              {timeline.map((node) => {
                if (node.kind === "text") {
                  const isUser = node.role === "user";
                  if (!node.text.trim()) return null;
                  return (
                    <div className={`msg ${isUser ? "user" : "agent"}`} key={node.id}>
                      <div className="who">{isUser ? "you" : "agent"}</div>
                      <div className="bubble">{node.text}</div>
                    </div>
                  );
                }
                return (
                  <ToolBlock
                    key={node.id}
                    node={node}
                    expanded={expandedTool === node.id}
                    onToggle={() =>
                      setExpandedTool(expandedTool === node.id ? null : node.id)
                    }
                  />
                );
              })}
              {(status === "submitted" || status === "streaming") && (
                <div className="msg agent">
                  <div className="who">agent</div>
                  <div className="bubble typing">
                    <span className="cursor" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {readyToApply && (
            <a className="ready-banner" href={APPLY_HREF}>
              <span className="ready-eyebrow">// YOU'RE READY</span>
              <span className="ready-line">
                Application prefilled with what you told me · click to send it
              </span>
              <span className="ready-arrow">→</span>
            </a>
          )}
          <form className="composer" onSubmit={handleSubmit}>
            <div className="composer-inner">
              <textarea
                placeholder="Tell it what you run…"
                value={input}
                onChange={handleInputChange}
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                  }
                }}
              />
              <button
                type="submit"
                disabled={status === "streaming" || !input.trim()}
                aria-label="Send"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 12l16-8-6 16-2-6-8-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </section>

        <aside
          className={`artifacts-col ${drawerOpen ? "open" : ""}`}
          aria-label="Fit-check preview"
        >
          <div className="artifacts-head">
            <span className="k">// FIT-CHECK · what your Build would ship</span>
            <button
              className="drawer-close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="artifacts-body">
            {staged.length === 0 && (
              <div className="artifacts-empty">
                <div className="dot-row">
                  <span className="empty-dot" />
                  <span className="empty-dot" />
                  <span className="empty-dot" />
                </div>
                <p>Your fit-check builds here as we talk.</p>
              </div>
            )}
            {[1, 2, 3].map((slot) => {
              const s = staged.find((x) => x.slot === slot);
              if (!s) return null;
              return <ArtifactCard key={slot} system={s} />;
            })}
            {readyToApply && (
              <a className="apply-btn" href={APPLY_HREF}>
                Apply for The Build · $1,995
                <span className="apply-sub">prefilled · launch price · first 10 seats</span>
              </a>
            )}
          </div>
        </aside>
        {drawerOpen && (
          <div
            className="drawer-scrim"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
        )}
      </main>

      <style>{styles}</style>
    </div>
  );
}

function ArtifactCard({ system: s }: { system: StagedSystem }) {
  return (
    <div className="art-card">
      <div className="art-head">
        <span className="art-slot">SYSTEM 0{s.slot}</span>
        <span className="art-saved">{s.estSavedPerWeek}/wk</span>
      </div>
      <h4 className="art-title">{s.title}</h4>
      <p className="art-what">{s.what}</p>
      {s.wiredTo.length > 0 && (
        <p className="art-wired">
          wired to <strong>{s.wiredTo.join(", ")}</strong>
        </p>
      )}
      {s.sampleLine && <p className="art-sample">&ldquo;{s.sampleLine}&rdquo;</p>}
    </div>
  );
}

function ToolBlock({
  node,
  expanded,
  onToggle,
}: {
  node: Extract<Timeline, { kind: "tool" }>;
  expanded: boolean;
  onToggle: () => void;
}) {
  const label = TOOL_LABEL[node.toolName] ?? node.toolName;
  const state =
    node.state === "result" ? "done" : node.state === "call" ? "running" : "…";

  const dual = TOOL_DUAL[node.toolName];

  if (node.toolName === "stage_system") {
    const slot = Number(node.args.slot ?? 0);
    const title = String(node.args.title ?? "");
    return (
      <div className="tool-inline">
        <div className="tool-inline-top">
          <span className="tool-inline-tag">▸ staged system 0{slot}</span>
          <span className="tool-inline-title">{title}</span>
        </div>
        {dual && <div className="tool-inline-dual">{dual}</div>}
      </div>
    );
  }

  if (node.toolName === "prep_brief") {
    const summary = String(node.args.summary ?? "");
    return (
      <div className="tool-brief">
        <div className="tool-brief-tag">
          ◆ drafted your application for Will
        </div>
        {summary && <div className="tool-brief-summary">{summary}</div>}
        {dual && <div className="tool-inline-dual">{dual}</div>}
      </div>
    );
  }

  const summary = summarizeToolArgs(node.toolName, node.args);
  return (
    <div className="tool-pill">
      <button
        className="pill-head"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <span className="pill-label">{label}</span>
        {summary && <span className="pill-summary">· {summary}</span>}
        <span className={`pill-state ${state}`}>{state}</span>
        <span className={`pill-chev ${expanded ? "open" : ""}`}>▾</span>
      </button>
      {expanded && (
        <>
          {dual && <div className="pill-dual">{dual}</div>}
          <pre className="pill-body">{JSON.stringify(node.args, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

function summarizeToolArgs(
  tool: string,
  args: Record<string, unknown>,
): string {
  if (tool === "capture_lead") {
    const email = args.email ? String(args.email) : "";
    const hotness = args.hotness ? String(args.hotness) : "";
    return [email, hotness].filter(Boolean).join(" · ");
  }
  if (tool === "notify_will") {
    return args.intent ? String(args.intent) : "";
  }
  return "";
}

type Brief = {
  notesToWill: string;
  summary: string;
  suggestedFormFill?: {
    projectText?: string;
    stuck?: string;
    shipped?: string;
  };
};

type Lead = {
  email?: string;
  hotness?: string;
  name?: string;
  phone?: string;
  website?: string;
};

function extractBrief(args: Record<string, unknown>): Brief | undefined {
  const notesToWill = args.notesToWill ? String(args.notesToWill) : "";
  const summary = args.summary ? String(args.summary) : "";
  if (!notesToWill && !summary) return undefined;
  const sff = args.suggestedFormFill as Record<string, unknown> | undefined;
  const suggestedFormFill = sff
    ? {
        projectText: sff.projectText ? String(sff.projectText) : undefined,
        stuck: sff.stuck ? String(sff.stuck) : undefined,
        shipped: sff.shipped ? String(sff.shipped) : undefined,
      }
    : undefined;
  return { notesToWill, summary, suggestedFormFill };
}

function extractLead(args: Record<string, unknown>): Lead | undefined {
  const email = args.email ? String(args.email) : "";
  const hotness = args.hotness ? String(args.hotness) : "";
  const name = args.name ? String(args.name) : "";
  const phone = args.phone ? String(args.phone) : "";
  const website = args.website ? String(args.website) : "";
  if (!email && !hotness && !name && !phone && !website) return undefined;
  return {
    email: email || undefined,
    hotness: hotness || undefined,
    name: name || undefined,
    phone: phone || undefined,
    website: website || undefined,
  };
}

function buildTimeline(messages: Message[]): {
  timeline: Timeline[];
  staged: StagedSystem[];
  brief?: Brief;
  lead?: Lead;
} {
  const timeline: Timeline[] = [];
  const bySlot = new Map<number, StagedSystem>();
  let brief: Brief | undefined;
  let lead: Lead | undefined;

  for (const m of messages) {
    const parts = (m as Message & { parts?: unknown[] }).parts;
    if (Array.isArray(parts) && parts.length > 0) {
      let partIndex = 0;
      for (const part of parts) {
        const p = part as { type?: string; text?: string; toolInvocation?: unknown };
        if (p.type === "text") {
          timeline.push({
            kind: "text",
            id: `${m.id}-t-${partIndex}`,
            role: m.role === "user" ? "user" : "assistant",
            text: p.text ?? "",
          });
        } else if (p.type === "tool-invocation") {
          const inv = p.toolInvocation as {
            toolCallId?: string;
            toolName?: string;
            state?: "partial-call" | "call" | "result";
            args?: Record<string, unknown>;
            result?: unknown;
          };
          if (!inv?.toolName) {
            partIndex += 1;
            continue;
          }
          const args = inv.args ?? {};
          if (inv.toolName === "stage_system") {
            const slot = Number(args.slot);
            if (slot >= 1 && slot <= 3) {
              bySlot.set(slot, {
                slot,
                title: String(args.title ?? ""),
                what: String(args.what ?? ""),
                wiredTo: Array.isArray(args.wiredTo)
                  ? (args.wiredTo as string[])
                  : [],
                estSavedPerWeek: String(args.estSavedPerWeek ?? "~?h"),
                sampleLine: args.sampleLine ? String(args.sampleLine) : undefined,
              });
            }
          } else if (inv.toolName === "prep_brief") {
            brief = extractBrief(args) ?? brief;
          } else if (inv.toolName === "capture_lead") {
            lead = extractLead(args) ?? lead;
          }
          timeline.push({
            kind: "tool",
            id: inv.toolCallId ?? `${m.id}-tool-${partIndex}`,
            toolName: inv.toolName,
            state: inv.state ?? "call",
            args,
            result: inv.result,
          });
        }
        partIndex += 1;
      }
      continue;
    }

    const text =
      typeof m.content === "string"
        ? m.content
        : Array.isArray(m.content)
          ? (m.content as Array<{ text?: string }>)
              .map((c) => c.text ?? "")
              .join("")
          : "";
    if (text.trim()) {
      timeline.push({
        kind: "text",
        id: `${m.id}-text`,
        role: m.role === "user" ? "user" : "assistant",
        text,
      });
    }
    const invocations = (m as { toolInvocations?: unknown[] }).toolInvocations;
    if (Array.isArray(invocations)) {
      for (const raw of invocations) {
        const inv = raw as {
          toolCallId?: string;
          toolName?: string;
          state?: "partial-call" | "call" | "result";
          args?: Record<string, unknown>;
          result?: unknown;
        };
        if (!inv?.toolName) continue;
        const args = inv.args ?? {};
        if (inv.toolName === "stage_system") {
          const slot = Number(args.slot);
          if (slot >= 1 && slot <= 3) {
            bySlot.set(slot, {
              slot,
              title: String(args.title ?? ""),
              what: String(args.what ?? ""),
              wiredTo: Array.isArray(args.wiredTo)
                ? (args.wiredTo as string[])
                : [],
              estSavedPerWeek: String(args.estSavedPerWeek ?? "~?h"),
              sampleLine: args.sampleLine ? String(args.sampleLine) : undefined,
            });
          }
        } else if (inv.toolName === "prep_brief") {
          brief = extractBrief(args) ?? brief;
        } else if (inv.toolName === "capture_lead") {
          lead = extractLead(args) ?? lead;
        }
        timeline.push({
          kind: "tool",
          id: inv.toolCallId ?? `${m.id}-tool-${timeline.length}`,
          toolName: inv.toolName,
          state: inv.state ?? "call",
          args,
          result: inv.result,
        });
      }
    }
  }

  const staged = Array.from(bySlot.values()).sort((a, b) => a.slot - b.slot);
  return { timeline, staged, brief, lead };
}

const styles = `
  .talk-shell {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: var(--bg);
    font-family: var(--font-mono), 'JetBrains Mono', monospace;
    overflow: hidden;
  }

  .talk-nav {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    background: var(--panel);
    border-bottom: 1px solid var(--line);
    height: 52px;
  }
  .brand-mini {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--white);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .02em;
  }
  .brand-mini .dim { color: var(--gray-dim); font-weight: 400; }
  .nav-mid {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 11px;
    color: var(--gray);
    letter-spacing: .06em;
  }
  .status-dot {
    display: inline-block;
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--gray-dim);
    transition: background .2s;
  }
  .status-dot.on {
    background: var(--green);
    animation: statuspulse 1.2s ease-out infinite;
  }
  @keyframes statuspulse {
    0% { box-shadow: 0 0 0 0 rgba(18,138,75,.6); }
    70% { box-shadow: 0 0 0 5px rgba(18,138,75,0); }
    100% { box-shadow: 0 0 0 0 rgba(18,138,75,0); }
  }
  .drawer-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
    padding: 6px 12px;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    color: var(--white);
  }
  .drawer-btn .count {
    font-size: 13px;
    font-weight: 800;
    color: var(--green-ink);
  }
  .drawer-btn .lbl {
    font-size: 8.5px;
    letter-spacing: .1em;
    color: var(--gray);
    margin-top: 2px;
    text-transform: uppercase;
  }
  .drawer-btn:hover { border-color: var(--green); }

  .talk-main {
    flex: 1;
    display: flex;
    min-height: 0;
    position: relative;
  }

  .chat-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
  }
  .chat-scroll {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
  }
  .chat-inner {
    max-width: 720px;
    margin: 0 auto;
    padding: 24px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .msg { max-width: 88%; }
  .msg.user { align-self: flex-end; text-align: right; }
  .msg.agent { align-self: flex-start; }
  .msg .who {
    font-size: 9px;
    color: var(--gray-dim);
    letter-spacing: .12em;
    margin-bottom: 3px;
    text-transform: uppercase;
  }
  .msg .bubble {
    display: inline-block;
    padding: 10px 14px;
    border-radius: 16px;
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .msg.agent .bubble {
    background: var(--panel);
    border: 1px solid var(--line);
    color: var(--white);
    border-bottom-left-radius: 4px;
  }
  .msg.user .bubble {
    background: var(--green);
    color: #fff;
    border-bottom-right-radius: 4px;
  }
  .msg .bubble.typing {
    background: var(--panel);
    border: 1px solid var(--line);
    min-height: 22px;
    display: inline-flex;
    align-items: center;
  }
  .cursor {
    display: inline-block;
    width: 8px;
    height: 14px;
    background: var(--green);
    animation: blink .9s steps(2, jump-none) infinite;
  }
  @keyframes blink { 50% { opacity: 0; } }

  .tool-note {
    display: flex;
    gap: 8px;
    align-items: baseline;
    padding: 3px 12px;
    font-size: 11px;
    color: var(--gray);
    align-self: flex-start;
    max-width: 88%;
    border-left: 2px solid var(--chalk);
    background: rgba(165,106,17,.05);
    border-radius: 0 4px 4px 0;
  }
  .tool-note .tool-type {
    color: var(--chalk);
    font-weight: 700;
    letter-spacing: .1em;
    font-size: 9.5px;
    text-transform: uppercase;
    flex-shrink: 0;
  }
  .tool-note .tool-note-text { line-height: 1.4; }

  .tool-inline {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 12px;
    background: var(--green-dim);
    border: 1px solid var(--green);
    border-radius: 8px;
    font-size: 12px;
    max-width: 88%;
    animation: cardIn .35s ease-out;
  }
  .tool-inline-top {
    display: flex;
    gap: 8px;
    align-items: baseline;
    flex-wrap: wrap;
  }
  .tool-inline-dual {
    font-size: 10px;
    color: var(--gray);
    font-style: italic;
    letter-spacing: .01em;
  }
  .tool-inline-dual::before { content: "↳ "; color: var(--chalk); }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .tool-inline-tag {
    font-size: 9.5px;
    letter-spacing: .12em;
    color: var(--green-ink);
    font-weight: 800;
    text-transform: uppercase;
    flex-shrink: 0;
  }
  .tool-inline-title {
    font-weight: 700;
    color: var(--white);
  }

  .tool-brief {
    align-self: flex-start;
    max-width: 92%;
    background: #FFF7E5;
    border: 1px solid var(--chalk);
    border-radius: 10px;
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    animation: cardIn .4s ease-out;
  }
  .tool-brief-tag {
    font-size: 10px;
    letter-spacing: .12em;
    color: var(--chalk);
    font-weight: 800;
    text-transform: uppercase;
  }
  .tool-brief-summary {
    font-size: 13px;
    color: var(--white);
    line-height: 1.4;
    font-weight: 600;
  }

  .pill-dual {
    padding: 6px 12px;
    font-size: 10px;
    color: var(--gray);
    font-style: italic;
    background: rgba(165,106,17,.05);
    border-top: 1px dashed var(--line);
  }
  .pill-dual::before { content: "↳ "; color: var(--chalk); }

  .ready-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 720px;
    margin: 0 auto 8px;
    padding: 14px 18px;
    background: var(--green);
    color: #fff;
    text-decoration: none;
    border-radius: 12px 4px 14px 5px / 5px 14px 4px 12px;
    box-shadow: 3px 3px 0 rgba(14,110,59,.35);
    animation: readyIn .5s ease-out;
  }
  @keyframes readyIn {
    from { transform: translateY(8px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .ready-eyebrow {
    font-size: 10px;
    letter-spacing: .12em;
    color: rgba(255,255,255,.75);
    font-weight: 800;
    flex-shrink: 0;
  }
  .ready-line {
    flex: 1;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.35;
  }
  .ready-arrow {
    font-size: 20px;
    font-weight: 800;
    flex-shrink: 0;
  }

  .tool-pill {
    align-self: flex-start;
    max-width: 88%;
    border: 1px solid var(--line);
    background: var(--panel);
    border-radius: 8px;
    overflow: hidden;
  }
  .pill-head {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 7px 12px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 11px;
    color: var(--gray);
    text-align: left;
  }
  .pill-head:hover { background: rgba(0,0,0,.02); }
  .pill-label { font-weight: 700; color: var(--white); }
  .pill-summary { color: var(--gray); }
  .pill-state {
    margin-left: auto;
    font-size: 9.5px;
    letter-spacing: .08em;
  }
  .pill-state.done { color: var(--green-ink); font-weight: 700; }
  .pill-state.running { color: var(--chalk); }
  .pill-chev { color: var(--gray-dim); transition: transform .2s; }
  .pill-chev.open { transform: rotate(180deg); }
  .pill-body {
    font-size: 10.5px;
    color: var(--gray);
    background: rgba(0,0,0,.03);
    padding: 8px 12px;
    border-top: 1px dashed var(--line);
    white-space: pre-wrap;
    overflow-x: auto;
  }

  .composer {
    flex-shrink: 0;
    background: var(--bg);
    border-top: 1px solid var(--line);
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  }
  .composer-inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 22px;
    padding: 8px 8px 8px 16px;
    transition: border-color .15s;
  }
  .composer-inner:focus-within { border-color: var(--green); }
  .composer textarea {
    flex: 1;
    background: none;
    border: none;
    resize: none;
    font-family: inherit;
    font-size: 14px;
    line-height: 1.4;
    color: var(--white);
    padding: 8px 0;
    max-height: 140px;
    outline: none;
  }
  .composer button {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background: var(--green);
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .15s, transform .1s;
  }
  .composer button:hover:not(:disabled) { transform: scale(1.05); }
  .composer button:disabled {
    opacity: .35;
    cursor: not-allowed;
  }

  .artifacts-col {
    flex-shrink: 0;
    width: 340px;
    background: var(--panel);
    border-left: 1px solid var(--line);
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .artifacts-head {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    border-bottom: 1px solid var(--line);
  }
  .artifacts-head .k {
    font-size: 10px;
    letter-spacing: .12em;
    color: var(--chalk);
    font-weight: 700;
  }
  .drawer-close {
    display: none;
    background: none;
    border: none;
    font-size: 22px;
    color: var(--gray);
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
  }
  .artifacts-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px 18px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .artifacts-empty {
    text-align: center;
    color: var(--gray-dim);
    padding: 40px 12px;
    font-size: 12px;
  }
  .dot-row {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .empty-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    border: 1.5px dashed var(--gray-dim);
  }

  .art-card {
    background: var(--bg);
    border: 1px solid var(--line);
    border-left: 3px solid var(--green);
    border-radius: 6px;
    padding: 12px 14px;
    box-shadow: 0 2px 8px rgba(30,24,10,.04);
    animation: cardIn .4s ease-out;
  }
  .art-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
  }
  .art-slot {
    font-size: 9.5px;
    letter-spacing: .14em;
    color: var(--green-ink);
    font-weight: 800;
  }
  .art-saved {
    font-size: 10px;
    color: var(--chalk);
    font-weight: 700;
  }
  .art-title {
    font-family: var(--font-display), 'Big Shoulders Display', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 1;
    letter-spacing: .015em;
    margin-bottom: 6px;
  }
  .art-what {
    font-size: 12px;
    color: var(--gray);
    line-height: 1.5;
    margin-bottom: 6px;
  }
  .art-wired {
    font-size: 11px;
    color: var(--gray);
  }
  .art-wired strong { color: var(--white); }
  .art-sample {
    font-size: 11px;
    font-style: italic;
    color: var(--white);
    background: rgba(165,106,17,.08);
    border-left: 2px solid var(--chalk);
    padding: 6px 8px;
    margin-top: 8px;
  }

  .apply-btn {
    display: block;
    background: var(--green);
    color: #fff;
    text-decoration: none;
    text-align: center;
    padding: 14px;
    border-radius: 10px 3px 12px 4px / 4px 12px 3px 10px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: .03em;
    text-transform: uppercase;
    box-shadow: 3px 3px 0 rgba(14,110,59,.35);
    margin-top: 8px;
  }
  .apply-btn .apply-sub {
    display: block;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: .04em;
    text-transform: none;
    margin-top: 4px;
    opacity: .85;
  }

  .drawer-scrim { display: none; }

  @media (max-width: 899px) {
    .artifacts-col {
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: min(360px, 88vw);
      transform: translateX(100%);
      transition: transform .3s ease-out;
      z-index: 40;
      box-shadow: -12px 0 32px rgba(30,24,10,.15);
    }
    .artifacts-col.open { transform: translateX(0); }
    .drawer-close { display: block; }
    .drawer-scrim {
      display: block;
      position: absolute;
      inset: 0;
      background: rgba(30,24,10,.35);
      z-index: 30;
      animation: fadeIn .2s ease-out;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  }

  @media (min-width: 900px) {
    .drawer-btn { display: none; }
    .nav-mid { justify-content: flex-start; padding-left: 16px; }
  }
`;
