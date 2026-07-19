"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FormEvent, useState } from "react";
import styles from "./ContactPage.module.css";

function Brand() {
  return (
    <span className={styles.brand}>
      <Image src="/zapp-logo.png" alt="" width={34} height={40} priority />
      ZAPP
    </span>
  );
}

export function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/zapplords25@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        },
      );

      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setSubmitted(true);
    } catch {
      setError("Your message could not be sent. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" aria-label="ZAPP home"><Brand /></Link>
        <Link href="/" className={styles.back}><ArrowLeft size={15} /> Back to home</Link>
      </header>

      <section className={styles.contact}>
        <div className={styles.grid} />
        <motion.div
          className={styles.copy}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >
          <span className={styles.kicker}><MessageSquare size={13} /> Talk to the ZAPP team</span>
          <h1>Let’s start a<br /><span>conversation.</span></h1>
          <p>
            Questions, ideas, partnerships or feedback—we read every message
            and will get back to you as soon as we can.
          </p>
          <a href="mailto:zapplords25@gmail.com" className={styles.email}>
            <i><Mail size={17} /></i>
            <span><small>Email us directly</small>zapplords25@gmail.com</span>
          </a>
        </motion.div>

        <motion.div
          className={styles.formCard}
          initial={reduceMotion ? false : { opacity: 0, scale: .97, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .75, delay: .1 }}
        >
          <div className={styles.formHead}>
            <span>Send a message</span>
            <i><Send size={17} /></i>
          </div>
          <form
            action="https://formsubmit.co/zapplords25@gmail.com"
            method="POST"
            onSubmit={submitForm}
          >
            <input type="hidden" name="_subject" value="New ZAPP website enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <div className={styles.row}>
              <label>
                Your name
                <input name="name" type="text" placeholder="Full name" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              What is this about?
              <select name="subject" defaultValue="" required>
                <option value="" disabled>Select a topic</option>
                <option value="General question">General question</option>
                <option value="Product feedback">Product feedback</option>
                <option value="Partnership">Partnership</option>
                <option value="Technical support">Technical support</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Your message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us how we can help…"
                required
              />
            </label>
            <button type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"} <ArrowRight size={16} />
            </button>
            <p className={error ? styles.formError : ""} role={error ? "alert" : undefined}>
              {error || "Messages are delivered to zapplords25@gmail.com."}
            </p>
          </form>
        </motion.div>
      </section>

      {submitted && (
        <motion.div
          className={styles.modalBackdrop}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <motion.div
            className={styles.successModal}
            initial={reduceMotion ? false : { opacity: 0, scale: .92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: .4 }}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSubmitted(false)}
              aria-label="Close confirmation"
            >
              <X size={17} />
            </button>
            <i><CheckCircle2 size={30} /></i>
            <span>Message sent</span>
            <h2 id="success-title">Thanks for reaching out.</h2>
            <p>
              Your query has been sent to the ZAPP team. We’ll get back to you
              at the email address you provided.
            </p>
            <Link href="/">
              Back to ZAPP <ArrowRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      )}

      <footer className={styles.footer}>
        <Brand />
        <span><Zap size={13} fill="currentColor" /> Smarter energy. Lighter bills.</span>
        <div><Link href="/team">Team</Link><Link href="/">Home</Link></div>
      </footer>
    </main>
  );
}
