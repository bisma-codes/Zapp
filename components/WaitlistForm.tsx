"use client";

import { ArrowRight, Check, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { isValidEmail } from "@/lib/calculator";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setState("error");
      setMessage("Enter a valid email address.");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;
    if (!endpoint) {
      setState("success");
      setMessage("Your email app is opening to complete the request.");
      window.location.href = `mailto:hello@zapp.energy?subject=Join%20the%20ZAPP%20Android%20waitlist&body=Please%20add%20${encodeURIComponent(email)}%20to%20the%20Android%20waitlist.`;
      return;
    }

    setState("loading");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, platform: "android", source: "website" }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setState("success");
      setMessage("You’re on the Android launch list.");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Couldn’t connect. Email us and we’ll add you manually.");
    }
  };

  return (
    <div>
      <form className="waitlist-form" onSubmit={submit} noValidate>
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <Mail size={18} aria-hidden="true" />
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state === "error") setState("idle");
          }}
          aria-describedby="waitlist-message"
        />
        <button type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Joining…" : state === "success" ? <Check /> : "Join Android waitlist"}
          {state === "idle" || state === "error" ? <ArrowRight size={17} /> : null}
        </button>
      </form>
      <p
        id="waitlist-message"
        className={`form-message ${state}`}
        role={state === "error" ? "alert" : "status"}
      >
        {message || "No spam. Just launch access and meaningful product updates."}
      </p>
    </div>
  );
}
