"use client";

import { useState } from "react";

export function WeeklyDropForm() {
  const [note, setNote] = useState("one email a week · zero spam · unsubscribe anytime");
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        const form = e.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim();

        if (!email) {
          setNote("need an email in there first.");
          setSubmitting(false);
          return;
        }

        try {
          const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, source: "free-cheatsheets" }),
          });
          const data: { ok?: boolean; error?: string } = await res.json().catch(() => ({}));
          if (!res.ok || !data.ok) {
            setNote(data.error ?? "something broke on our end. email will@stuck.builders and I'll add you manually.");
            setSubmitting(false);
            return;
          }
          form.reset();
          setNote("got it. next drop lands friday.");
        } catch {
          setNote("network dropped. try again — or email will@stuck.builders.");
        } finally {
          setSubmitting(false);
        }
      }}
      style={{ marginTop: 8 }}
    >
      <div className="field">
        <label htmlFor="email">
          Your email{" "}
          <span style={{ color: "var(--gray-dim)", fontWeight: 400 }}>· optional</span>
        </label>
        <div className="help">
          The PDFs above are free either way. This is just for the weekly drop.
        </div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@yourthing.com"
          autoComplete="email"
          required
        />
      </div>
      <button type="submit" className="btn" disabled={submitting}>
        {submitting ? "Sending…" : "Send me the weekly drop →"}
      </button>
      <p className="form-hint">{note}</p>
    </form>
  );
}
