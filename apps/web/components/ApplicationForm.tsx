"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { trackLead } from "@/lib/meta";
import {
  PRICES,
  REFERRAL_COOKIE_NAME,
  sprintKindLabel,
  sprintPriceLabel,
  type SprintKind,
} from "@/lib/config";

type Q1Option = {
  label: string;
  help: string;
  value: SprintKind;
  price: string;
};

const Q1_OPTIONS: Q1Option[] = [
  {
    label: "Greenfield — I have/need idea. Nothing built yet.",
    help: "$199 · we shape the imaginative solution together + PRD + working demo + operating environment.",
    value: "idea",
    price: sprintPriceLabel("idea"),
  },
  {
    label: "Brownfield — I started building. I'm stuck.",
    help: "$399 · we unstick it and ship the deployed live next version (one major feature or fix).",
    value: "build",
    price: sprintPriceLabel("build"),
  },
];

function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1] ?? "") : "";
}

type ApplyVariant = "build-b" | "build-live" | "legacy";

type FormCopy = {
  q2Label: string;
  q2Help: string;
  q2Placeholder: string;
  q2UrlLabel: string;
  q4Label: string;
  q4Help: string;
  q4Placeholder: string;
  q5Label: string;
  q5Help: string;
  q5Placeholder: string;
  q5Error: string;
};

const LEGACY_COPY: FormCopy = {
  q2Label: "Q2 — What are you building?",
  q2Help:
    "A few sentences, a link, or both. Anything that shows the thing — repo, live URL, Lovable/Bolt project, Figma, doc.",
  q2Placeholder: "What it is, who it's for. Two or three sentences is plenty.",
  q2UrlLabel: "…or paste a link (repo, live URL, Lovable/Bolt, Figma, doc)",
  q4Label: "Q4 — Where exactly are you stuck?",
  q4Help: "The specific wall. 2–3 sentences. Be blunt — this is what we'd attack on Day 1.",
  q4Placeholder: "",
  q5Label: "Q5 — What does 'shipped' look like by Day 7?",
  q5Help: "One concrete outcome. A live URL, a PRD in your hands, a paying customer — name it.",
  q5Placeholder: "",
  q5Error: "Q5 — what does Day 7 look like for you?",
};

const NEW_OFFER_COPY: FormCopy = {
  q2Label: "Q2 — What's your business?",
  q2Help:
    "A couple sentences. What you sell, who your customer is, how it runs today. Numbers help but not required.",
  q2Placeholder:
    "e.g. Roofing contractor in Charleston. ~$400k/yr, 3 crews, mostly residential. Leads via referrals + Google.",
  q2UrlLabel: "…or paste a link (your website, Google Doc, anything that shows the business)",
  q4Label: "Q4 — What's eating your time?",
  q4Help:
    "The repetitive work that keeps you up late or bottlenecks the whole business. 2–3 sentences. This is what we'll build the AI system around.",
  q4Placeholder:
    "e.g. I spend 6–8 hrs a week following up on quotes. Half go cold before I get to them.",
  q5Label: "Q5 — By end of the build, what does 'it's running' look like?",
  q5Help:
    "One concrete outcome. What would make you close the laptop and say 'yes — worth it'?",
  q5Placeholder:
    "e.g. Every quote drafted in under 90 seconds, follow-ups auto-sent in my voice, my evenings back.",
  q5Error: "Q5 — what does 'it's running' look like for you?",
};

// Launch price we surface to Meta for lead value, per variant.
const LEAD_VALUE: Record<Exclude<ApplyVariant, "legacy">, number> = {
  "build-b": 1995,
  "build-live": 1995,
};

const VARIANT_CONTENT_NAME: Record<Exclude<ApplyVariant, "legacy">, string> = {
  "build-b": "The Build (virtual · 4hr · 1:1)",
  "build-live": "The Build LIVE (in-person · Charleston · Sep 11 2026)",
};

export function ApplicationForm({
  defaultKind = "build",
  variant = "legacy",
}: {
  defaultKind?: SprintKind;
  variant?: ApplyVariant;
}) {
  const isNewOffer = variant === "build-b" || variant === "build-live";
  const copy = isNewOffer ? NEW_OFFER_COPY : LEGACY_COPY;
  const router = useRouter();

  const initialIndex = defaultKind === "idea" ? 0 : 1;
  const [q1Index, setQ1Index] = useState<number>(initialIndex);
  const [projectText, setProjectText] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [stuck, setStuck] = useState("");
  const [shipped, setShipped] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ack, setAck] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fieldWarnings, setFieldWarnings] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [refCode, setRefCode] = useState<string>("");
  const [talkNotesToWill, setTalkNotesToWill] = useState<string>("");
  const [talkSummary, setTalkSummary] = useState<string>("");
  const [prefilled, setPrefilled] = useState(false);

  useEffect(() => {
    const cookieRef = readCookie(REFERRAL_COOKIE_NAME);
    if (cookieRef) setRefCode(cookieRef);
    else if (typeof window !== "undefined") {
      const urlRef = new URLSearchParams(window.location.search).get("ref");
      if (urlRef) setRefCode(urlRef);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem("talk:prefill:v1");
      if (!raw) return;
      const p = JSON.parse(raw) as {
        savedAt?: number;
        email?: string;
        name?: string;
        phone?: string;
        website?: string;
        notesToWill?: string;
        summary?: string;
        suggestedFormFill?: {
          projectText?: string;
          stuck?: string;
          shipped?: string;
        };
      };
      if (!p.savedAt || Date.now() - p.savedAt > 60 * 60 * 1000) {
        window.localStorage.removeItem("talk:prefill:v1");
        return;
      }
      let didFill = false;
      if (p.suggestedFormFill?.projectText) {
        setProjectText(p.suggestedFormFill.projectText);
        didFill = true;
      }
      if (p.suggestedFormFill?.stuck) {
        setStuck(p.suggestedFormFill.stuck);
        didFill = true;
      }
      if (p.suggestedFormFill?.shipped) {
        setShipped(p.suggestedFormFill.shipped);
        didFill = true;
      }
      if (p.email) {
        setEmail(p.email);
        didFill = true;
      }
      if (p.name) {
        setName(p.name);
        didFill = true;
      }
      if (p.phone) {
        setPhone(p.phone);
        didFill = true;
      }
      if (p.website) {
        setProjectUrl(p.website);
        didFill = true;
      }
      if (p.notesToWill) setTalkNotesToWill(p.notesToWill);
      if (p.summary) setTalkSummary(p.summary);
      if (didFill || p.notesToWill) setPrefilled(true);
    } catch {
      // corrupted storage — ignore
    }
  }, []);

  const q1 = Q1_OPTIONS[q1Index];
  const isIdeaPath = !isNewOffer && q1.value === "idea";

  const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function emailWarning(raw: string): string | null {
    const v = raw.trim().toLowerCase();
    if (!v) return null;
    const typoMap: Array<[RegExp, string, string]> = [
      [/\.con$/, ".con", ".com"],
      [/\.cmo$/, ".cmo", ".com"],
      [/\.co,$/, ".co,", ".com"],
      [/gmial\.com$/, "gmial.com", "gmail.com"],
      [/gnail\.com$/, "gnail.com", "gmail.com"],
    ];
    for (const [re, bad, good] of typoMap) {
      if (re.test(v)) {
        const suggested = v.replace(bad, good);
        return `Did you mean ${suggested}?`;
      }
    }
    return null;
  }

  function phoneDigitsOnly(raw: string): string {
    return raw.replace(/^\+/, "").replace(/\D/g, "");
  }

  function isPlaceholder555(raw: string, digits: string): boolean {
    if (/^1?555\d{7}$/.test(digits)) return true;
    if (/(^|[^\d])555-/.test(raw)) return true;
    return false;
  }

  function validateEmail(raw: string): string | null {
    const v = raw.trim();
    if (!v) return "Need your email — that's where the reply goes.";
    if (!EMAIL_RE.test(v)) return "That email looks off — double-check it.";
    return null;
  }

  function validatePhone(raw: string, required: boolean): string | null {
    const trimmed = raw.trim();
    if (!trimmed) {
      return required ? "Need a phone number — that's where the onboarding call comes in." : null;
    }
    const digits = phoneDigitsOnly(trimmed);
    if (isPlaceholder555(trimmed, digits)) {
      return "That's a placeholder area code — enter your real number.";
    }
    if (digits.length < 7) {
      return required
        ? "Need a phone number — that's where the onboarding call comes in."
        : "That phone number looks short — double-check it.";
    }
    if (digits.length > 15) return "That phone number looks too long.";
    return null;
  }

  function validateAll(): { errors: Record<string, string>; firstField: string | null } {
    const errs: Record<string, string> = {};
    const order: string[] = [];
    if (!projectText.trim() && !projectUrl.trim()) {
      errs.projectText = isNewOffer
        ? "Q2 needs something — a couple sentences on your business, or a link. Either works."
        : "Q2 needs something — a few sentences or a link. Either works.";
      order.push("projectText");
    }
    if (isIdeaPath && !aboutYou.trim()) {
      errs.aboutYou = "Q3 matters on the idea path — a couple lines on you is enough.";
      order.push("aboutYou");
    }
    if (!stuck.trim()) {
      errs.stuck = isNewOffer
        ? "Q4 — name the thing eating your time. Two sentences beats none."
        : "Q4 — name the wall. Two sentences beats none.";
      order.push("stuck");
    }
    if (!shipped.trim()) {
      errs.shipped = copy.q5Error;
      order.push("shipped");
    }
    if (!name.trim()) {
      errs.name = "Need your name to reply to you.";
      order.push("name");
    }
    const emailErr = validateEmail(email);
    if (emailErr) {
      errs.email = emailErr;
      order.push("email");
    }
    const phoneErr = validatePhone(phone, isNewOffer);
    if (phoneErr) {
      errs.phone = phoneErr;
      order.push("phone");
    }
    if (projectUrl.trim()) {
      try {
        const candidate = projectUrl.trim().startsWith("http")
          ? projectUrl.trim()
          : `https://${projectUrl.trim()}`;
        new URL(candidate);
      } catch {
        errs.projectUrl = "That link isn't parsing as a URL — paste it again.";
        order.push("projectUrl");
      }
    }
    if (!ack) {
      errs.ack = "One box left — the legal/non-harmful line at the bottom.";
      order.push("ack");
    }
    return { errors: errs, firstField: order[0] ?? null };
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const { errors, firstField } = validateAll();
    setFieldErrors(errors);
    if (firstField) {
      if (typeof document !== "undefined") {
        const el = document.getElementById(firstField);
        if (el && typeof el.scrollIntoView === "function") {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          if (typeof (el as HTMLElement).focus === "function") {
            (el as HTMLElement).focus({ preventScroll: true });
          }
        }
      }
      return;
    }
    setSubmitting(true);
    const kind: SprintKind = q1.value;
    const utm: Record<string, string> = {};
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
        const v = params.get(key);
        if (v) utm[key] = v;
      }
    }
    const payload = {
      sprintKind: kind,
      q1Label: isNewOffer ? VARIANT_CONTENT_NAME[variant as Exclude<ApplyVariant, "legacy">] : q1.label,
      q1Price: isNewOffer ? `$${LEAD_VALUE[variant as Exclude<ApplyVariant, "legacy">]}` : q1.price,
      variant,
      projectText: projectText.trim(),
      projectUrl: projectUrl.trim(),
      aboutYou: isIdeaPath ? aboutYou.trim() : "",
      stuck: stuck.trim(),
      shipped: shipped.trim(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      ack,
      refCode: refCode || undefined,
      utm: Object.keys(utm).length ? utm : undefined,
      talkNotesToWill: talkNotesToWill || undefined,
      talkSummary: talkSummary || undefined,
    };
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: { ok?: boolean; error?: string; flaggedField?: string | null } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok || !data.ok) {
        const msg =
          data.error ??
          "Something broke on our end. Email will@stuck.builders and we'll take it from there.";
        if (data.flaggedField) {
          setFieldErrors((prev) => ({ ...prev, [data.flaggedField as string]: msg }));
          if (typeof document !== "undefined") {
            const el = document.getElementById(data.flaggedField);
            if (el && typeof el.scrollIntoView === "function") {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              if (typeof (el as HTMLElement).focus === "function") {
                (el as HTMLElement).focus({ preventScroll: true });
              }
            }
          }
        } else {
          setError(msg);
        }
        setSubmitting(false);
        return;
      }
      trackLead({
        value: isNewOffer
          ? LEAD_VALUE[variant as Exclude<ApplyVariant, "legacy">]
          : PRICES[kind],
        currency: "USD",
        content_name: isNewOffer
          ? VARIANT_CONTENT_NAME[variant as Exclude<ApplyVariant, "legacy">]
          : sprintKindLabel(kind),
      });
      if (typeof window !== "undefined") {
        try {
          window.localStorage.removeItem("talk:prefill:v1");
        } catch {}
      }
      router.push(`/thanks?kind=${kind}${isNewOffer ? `&variant=${variant}` : ""}`);
    } catch {
      setError("Network dropped. Try again — or email will@stuck.builders and we'll pick it up there.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {prefilled && (
        <div
          className="field"
          style={{
            padding: "12px 14px",
            background: "#FFF7E5",
            borderLeft: "3px solid var(--chalk)",
            borderRadius: 4,
            marginBottom: 20,
            fontSize: 13,
            color: "var(--white)",
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: ".12em",
              color: "var(--chalk)",
              fontWeight: 800,
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Prefilled from your chat with the agent
          </div>
          <div style={{ color: "var(--gray)", lineHeight: 1.45 }}>
            Edit anything below — your answers, in your language. Will&apos;s already
            got your notes for the call.
          </div>
        </div>
      )}

      {/* Q1 — legacy Idea/Build split; hidden for the new /build-b + /build-live variants */}
      {!isNewOffer && (
        <div className="field">
          <label>Q1 — Where are you right now?</label>
          <p className="help">
            Pick the one that fits. This routes you to the right sprint and the right price.
          </p>
          <div className="radio-group">
            {Q1_OPTIONS.map((opt, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name="q1"
                  checked={q1Index === idx}
                  onChange={() => setQ1Index(idx)}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{opt.label}</span>
                  <span className="help" style={{ margin: 0 }}>{opt.help}</span>
                </div>
                <span className="price-tag">{opt.price}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {isNewOffer && (
        <div className="field">
          <label>You&apos;re applying for:</label>
          <div
            style={{
              padding: 16,
              border: "1px solid var(--line)",
              background: "var(--green-dim)",
              borderRadius: 4,
              fontSize: 14,
            }}
          >
            {variant === "build-b" ? (
              <>
                <strong>The Build</strong> — live · virtual · 4 hours · 1:1 with Will<br />
                <span style={{ color: "var(--gray)" }}>
                  $1,995 launch price · going up soon
                </span>
              </>
            ) : (
              <>
                <strong>The Build — LIVE</strong> — in-person · Fri Sep 11, 2026 · Bridgeview Room,
                Charleston Digital, Charleston SC<br />
                <span style={{ color: "var(--gray)" }}>
                  $1,995 launch price · first 10 seats only · then the price goes up
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {refCode && (
        <div className="field">
          <p className="help" style={{ color: "var(--green-ink, #0E6E3B)", fontWeight: 600 }}>
            Referral code applied: <code>{refCode}</code> — $100 off at acceptance.
          </p>
        </div>
      )}

      {/* Q2 */}
      <div className="field">
        <label htmlFor="projectText">{copy.q2Label}</label>
        <p className="help">{copy.q2Help}</p>
        <textarea
          id="projectText"
          value={projectText}
          onChange={(e) => {
            setProjectText(e.target.value);
            if (fieldErrors.projectText) {
              setFieldErrors((p) => {
                const n = { ...p };
                delete n.projectText;
                return n;
              });
            }
          }}
          placeholder={copy.q2Placeholder}
        />
        {fieldErrors.projectText && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.projectText}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="projectUrl">{copy.q2UrlLabel}</label>
        <input
          id="projectUrl"
          type="url"
          value={projectUrl}
          onChange={(e) => {
            setProjectUrl(e.target.value);
            if (fieldErrors.projectUrl) {
              setFieldErrors((p) => {
                const n = { ...p };
                delete n.projectUrl;
                return n;
              });
            }
          }}
          placeholder="https://…"
        />
        {fieldErrors.projectUrl && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.projectUrl}</p>
        )}
      </div>

      {/* Q3 — only when idea path (legacy Greenfield) */}
      {isIdeaPath && (
        <div className="field">
          <label htmlFor="aboutYou">Q3 — About you</label>
          <p className="help">
            The best ideas usually live in your own background. Day 1 mines this. A few lines is enough.
          </p>
          <textarea
            id="aboutYou"
            value={aboutYou}
            onChange={(e) => {
              setAboutYou(e.target.value);
              if (fieldErrors.aboutYou) {
                setFieldErrors((p) => {
                  const n = { ...p };
                  delete n.aboutYou;
                  return n;
                });
              }
            }}
            placeholder="What you do, what you're into, problems close to you that nobody's solved well."
          />
          {fieldErrors.aboutYou && (
            <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.aboutYou}</p>
          )}
        </div>
      )}

      {/* Q4 */}
      <div className="field">
        <label htmlFor="stuck">{copy.q4Label}</label>
        <p className="help">{copy.q4Help}</p>
        <textarea
          id="stuck"
          value={stuck}
          onChange={(e) => {
            setStuck(e.target.value);
            if (fieldErrors.stuck) {
              setFieldErrors((p) => {
                const n = { ...p };
                delete n.stuck;
                return n;
              });
            }
          }}
          placeholder={copy.q4Placeholder}
        />
        {fieldErrors.stuck && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.stuck}</p>
        )}
      </div>

      {/* Q5 */}
      <div className="field">
        <label htmlFor="shipped">{copy.q5Label}</label>
        <p className="help">{copy.q5Help}</p>
        <textarea
          id="shipped"
          value={shipped}
          onChange={(e) => {
            setShipped(e.target.value);
            if (fieldErrors.shipped) {
              setFieldErrors((p) => {
                const n = { ...p };
                delete n.shipped;
                return n;
              });
            }
          }}
          placeholder={copy.q5Placeholder}
        />
        {fieldErrors.shipped && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.shipped}</p>
        )}
      </div>

      {/* Q6 */}
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (fieldErrors.name) {
              setFieldErrors((p) => {
                const n = { ...p };
                delete n.name;
                return n;
              });
            }
          }}
          autoComplete="name"
        />
        {fieldErrors.name && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.name}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="email">Your email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            const val = e.target.value;
            setEmail(val);
            if (fieldErrors.email) {
              setFieldErrors((p) => {
                const n = { ...p };
                delete n.email;
                return n;
              });
            }
            const warn = emailWarning(val);
            setFieldWarnings((p) => {
              const n = { ...p };
              if (warn) n.email = warn;
              else delete n.email;
              return n;
            });
          }}
          onBlur={() => {
            const err = validateEmail(email);
            setFieldErrors((p) => {
              const n = { ...p };
              if (err && email.trim()) n.email = err;
              else delete n.email;
              return n;
            });
          }}
          autoComplete="email"
        />
        {fieldErrors.email && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.email}</p>
        )}
        {fieldWarnings.email && !fieldErrors.email && (
          <p className="form-hint" style={{ color: "var(--chalk)", marginTop: 6, fontSize: 12 }}>
            {fieldWarnings.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="phone">
          Your phone{isNewOffer ? "" : " (optional)"}
        </label>
        <p className="help">
          {isNewOffer
            ? "Where the onboarding call lands. US format fine, international fine — just make sure it rings."
            : "Optional — but faster than email if we need to close the loop."}
        </p>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (fieldErrors.phone) {
              setFieldErrors((p) => {
                const n = { ...p };
                delete n.phone;
                return n;
              });
            }
          }}
          onBlur={() => {
            const err = validatePhone(phone, isNewOffer);
            setFieldErrors((p) => {
              const n = { ...p };
              if (err && (phone.trim() || isNewOffer)) n.phone = err;
              else delete n.phone;
              return n;
            });
          }}
          autoComplete="tel"
          placeholder="(555) 123-4567"
        />
        {fieldErrors.phone && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.phone}</p>
        )}
      </div>

      {/* Acknowledgment */}
      <div className="field">
        <label className="ack">
          <input
            type="checkbox"
            checked={ack}
            onChange={(e) => {
              setAck(e.target.checked);
              if (e.target.checked && fieldErrors.ack) {
                setFieldErrors((p) => {
                  const n = { ...p };
                  delete n.ack;
                  return n;
                });
              }
            }}
          />
          <span>
            My business is legal, not harmful, and not predatory. I get that Will
            reads every application himself before anyone pays.
          </span>
        </label>
        {fieldErrors.ack && (
          <p className="form-error" style={{ marginTop: 6, fontSize: 12 }}>{fieldErrors.ack}</p>
        )}
      </div>

      {error && <p className="form-error">{error}</p>}

      <div style={{ marginTop: 24, textAlign: "center" }}>
        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send my application"}
        </button>
      </div>
    </form>
  );
}
