"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Crown, Sparkles, UserRound, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { assetPath } from "@/lib/basePath";
import styles from "./TeamPage.module.css";

const team = [
  {
    name: "Bisma Riaz",
    role: "Team Lead",
    initials: "BR",
    icon: Crown,
    featured: true,
  },
  {
    name: "Khizar Saqib",
    role: "Backend",
    initials: "KS",
    icon: Code2,
  },
  {
    name: "Yasir Ali",
    role: "Team Member",
    initials: "YA",
    icon: UserRound,
  },
  {
    name: "Syed Hamza Ali",
    role: "Team Member",
    initials: "SH",
    icon: UserRound,
  },
];

function Brand() {
  return (
    <span className={styles.brand}>
      <Image src={assetPath("/zapp-logo.png")} alt="" width={34} height={40} priority />
      ZAPP
    </span>
  );
}

export function TeamPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" aria-label="ZAPP home"><Brand /></Link>
        <Link href="/" className={styles.back}>
          <ArrowLeft size={15} /> Back to home
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.grid} />
        <div className={styles.glow} />
        <motion.div
          className={styles.intro}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.kicker}><Sparkles size={13} /> The people behind ZAPP</span>
          <h1>Small team.<br /><span>Big energy.</span></h1>
          <p>
            A focused team building a simpler way for Pakistani households
            to understand, plan and reduce electricity use.
          </p>
        </motion.div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.teamHeading}>
          <span>Meet the team</span>
          <h2>Built together.</h2>
        </div>
        <div className={styles.cards}>
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.article
                key={member.name}
                className={`${styles.card} ${member.featured ? styles.featured : ""}`}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className={styles.cardNumber}>0{index + 1}</span>
                <div className={styles.avatar}>
                  <span>{member.initials}</span>
                  <i><Icon size={15} /></i>
                </div>
                <div className={styles.memberInfo}>
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                </div>
                {member.featured && <span className={styles.leadBadge}>Team lead</span>}
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.bolt}><Zap fill="currentColor" /></div>
        <div>
          <span>Our shared mission</span>
          <h2>Make smart energy planning accessible to every home.</h2>
        </div>
        <a href={assetPath("/zapp-demo.apk")} download="ZAPP-Demo.apk">
          Download the demo <ArrowRight size={16} />
        </a>
      </section>

      <footer className={styles.footer}>
        <Brand />
        <span>© 2026 ZAPP Energy Ecosystem</span>
        <Link href="/contact">Contact</Link>
        <Link href="/">Home</Link>
      </footer>
    </main>
  );
}
