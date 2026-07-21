import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { CrossLink } from "@/components/CrossLink";
import { WeeklyDropForm } from "./WeeklyDropForm";

export const metadata: Metadata = {
  title: "Free Claude Code cheatsheets — the ones Will actually uses | Stuck.builders",
  description:
    "Three free PDFs: shortcuts, slash commands, and how to make Claude Code yours. No signup, no gate. The muscle-memory docs Will keeps on his desk.",
  openGraph: {
    title: "Free Claude Code cheatsheets",
    description: "The three PDFs Will actually keeps on his desk. No signup. No gate.",
    url: "https://www.stuck.builders/free",
    siteName: "stuck.builders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Claude Code cheatsheets",
    description: "The three PDFs Will actually keeps on his desk. No signup. No gate.",
  },
};

type Sheet = {
  k: string;
  title: string;
  desc: string;
  hand: string;
  file: string;
};

const SHEETS: Sheet[] = [
  {
    k: "SHEET 01",
    title: "Claude Code Shortcuts",
    desc: "The keyboard shortcuts that shave 5+ minutes off every Claude session. Print it, tape it to your monitor.",
    hand: "\"the ones i actually hit every day\"",
    file: "claude-code-shortcuts.pdf",
  },
  {
    k: "SHEET 02",
    title: "Claude Code Slash Commands",
    desc: "Every /command worth knowing — when to use it, and the handful you'll actually reach for every day.",
    hand: "\"stop guessing which slash does what\"",
    file: "claude-code-slash-commands.pdf",
  },
  {
    k: "SHEET 03",
    title: "Make Claude Yours",
    desc: "How to configure Claude Code to your voice, your stack, your projects — so it starts every session already knowing you.",
    hand: "\"the setup that makes it feel like yours\"",
    file: "make-claude-yours.pdf",
  },
];

export default function FreePage() {
  return (
    <>
      <TopBar />

      <main id="top">
        {/* HERO */}
        <div className="hero wrap">
          <p className="eyebrow">// FREE · MADE FOR BUILDERS · NO SIGNUP</p>
          <h1 className="display">
            Free cheatsheets.<br />
            <span className="dim">The stuff I actually<br />keep on my desk.</span>
          </h1>

          <p className="sub">
            Three PDFs. The exact Claude Code muscle-memory docs I use every day —
            shortcuts, slash commands, and the config that makes Claude feel like
            <strong> yours</strong>. Not lead-magnet fluff. Not gated. Just{" "}
            <strong>take them</strong>.
          </p>

          <p className="hand" style={{ marginTop: 18, maxWidth: 620, marginLeft: "auto", marginRight: "auto", fontSize: 24, display: "inline-block", transform: "rotate(-1deg)" }}>
            no email · no popup · no funnel — click and download.
          </p>
        </div>

        {/* THE THREE CHEATSHEETS */}
        <section>
          <div className="wrap">
            <p className="sec-label">// THE THREE SHEETS</p>
            <h2 className="display">
              Grab them.<br />
              <span className="dim">Print them. Use them.</span>
            </h2>
            <span className="sec-hand hand">click a card · PDF opens in a new tab</span>

            <div className="points">
              {SHEETS.map((s) => (
                <div className="point" key={s.file}>
                  <p className="d" style={{ fontSize: 12, color: "var(--green)", letterSpacing: ".12em", marginBottom: 8 }}>
                    {s.k}
                  </p>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="hand">{s.hand}</span>
                  <div style={{ marginTop: 22 }}>
                    <a
                      className="btn"
                      href={`/cheatsheets/${s.file}`}
                      target="_blank"
                      rel="noopener"
                    >
                      Grab the PDF →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CROSSLINK TO THE BUILD */}
        <CrossLink
          prompt="The cheatsheets get you started —"
          linkText="The Build gets your business shipping →"
          href="/build-b"
        />

        {/* OPTIONAL EMAIL */}
        <section>
          <div className="wrap" style={{ maxWidth: 640 }}>
            <p className="sec-label">// OPTIONAL · NO GATE ON THE PDFS ABOVE</p>
            <h2 className="display">
              Want the weekly<br />
              <span className="dim">build drop?</span>
            </h2>
            <span className="sec-hand hand">one email a week · the builds i&apos;m running · unsubscribe anytime</span>

            <WeeklyDropForm />
          </div>
        </section>

        {/* SIGNOFF */}
        <div className="signoff">
          <span className="hand">
            take them.<br />build with them.<br />tell me what breaks.
            <svg width="220" height="26" viewBox="0 0 220 26" aria-hidden="true">
              <path
                d="M8,16 C50,8 90,22 130,14 C165,8 195,16 212,12"
                fill="none"
                stroke="#128A4B"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity=".85"
              />
            </svg>
          </span>
        </div>

        <CrossLink
          prompt="Graduates get the private Ship Club —"
          linkText="$499 · builds compound here →"
          href="https://www.skool.com/stuck2shipped/about"
        />
      </main>
      <Footer />
    </>
  );
}
