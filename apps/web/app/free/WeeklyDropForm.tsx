"use client";

import { useState } from "react";

export function WeeklyDropForm() {
  const [note, setNote] = useState("one email a week · zero spam · unsubscribe anytime");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
        // Stub — wire to Resend later.
        console.log("[free · weekly drop signup]", { email });
        form.reset();
        setNote("got it. i'll send the next drop.");
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
        />
      </div>
      <button type="submit" className="btn">
        Send me the weekly drop →
      </button>
      <p className="form-hint">{note}</p>
    </form>
  );
}
