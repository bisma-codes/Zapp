"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  BellRing,
  Check,
  CloudSun,
  Gauge,
  Menu,
  PiggyBank,
  PlugZap,
  Receipt,
  Sparkles,
  Sun,
  Target,
  TrendingDown,
  TrendingUp,
  UserPlus,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { assetPath } from "@/lib/basePath";
import styles from "./ProductSite.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

function Logo() {
  return (
    <span className={styles.logo}>
      <i className={styles.logoMark}>
        <Image src={assetPath("/zapp-logo.png")} alt="" width={30} height={34} priority />
      </i>
      ZAPP
    </span>
  );
}

function Phone({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`${styles.phone} ${className}`}>
      <span className={styles.speaker} />
      <div className={styles.screen}>
        <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 700px) 62vw, 320px" />
      </div>
    </div>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.div>
  );
}

export function ProductSite() {
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.site}>
      <header className={styles.header}>
        <a href="#top" aria-label="ZAPP home"><Logo /></a>
        <nav className={menuOpen ? styles.navOpen : ""} aria-label="Main navigation">
          <a href="#why" onClick={() => setMenuOpen(false)}>Why ZAPP</a>
          <a href="#inside" onClick={() => setMenuOpen(false)}>Inside the app</a>
          <a href="#start" onClick={() => setMenuOpen(false)}>How it works</a>
        </nav>
        <a
          className={styles.headerCta}
          href={assetPath("/zapp-demo.apk")}
          download="ZAPP-Demo.apk"
        >
          Download demo <ArrowRight size={15} />
        </a>
        <button
          className={styles.menu}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroGlow} />
        <div className={styles.heroCopy}>
          <motion.span
            className={styles.pill}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={13} /> Electricity planning for Pakistan
          </motion.span>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Don’t wait for the bill
            <span>to understand your electricity.</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease }}
          >
            ZAPP plans when to use your appliances, keeps you inside your unit
            target, and makes solar work harder—before the month is over.
          </motion.p>
          <motion.div
            className={styles.heroActions}
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
          >
            <a
              className={styles.primaryButton}
              href={assetPath("/zapp-demo.apk")}
              download="ZAPP-Demo.apk"
            >
              Download the demo <ArrowRight size={17} />
            </a>
            <span><Check size={15} /> No smart meter needed</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroVisual}
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.14, ease }}
        >
          <div className={styles.orbitOne} />
          <div className={styles.orbitTwo} />
          <Phone
            src={assetPath("/zapp-dashboard.png")}
            alt="ZAPP monthly energy dashboard"
            className={styles.heroPhone}
            priority
          />
          <motion.div
            className={`${styles.floatCard} ${styles.sunCard}`}
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <i className={styles.sunIcon}><Sun /></i>
            <span><strong>Best solar window</strong><small>12:30 — 2:45 PM</small></span>
          </motion.div>
          <motion.div
            className={`${styles.floatCard} ${styles.alertCard}`}
            animate={reduce ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 5.6, repeat: Infinity }}
          >
            <i className={styles.greenIcon}><TrendingDown /></i>
            <span><strong>Back on target</strong><small>18 units recovered</small></span>
          </motion.div>
        </motion.div>

        <div className={styles.heroFacts}>
          <span><Target /> Monthly target</span>
          <span><CloudSun /> Weather-aware</span>
          <span><BatteryCharging /> Solar + battery</span>
        </div>
      </section>

      <section className={styles.crisis}>
        <Reveal className={styles.crisisHeading}>
          <h2>
            Pakistan&apos;s electricity crisis<br />
            {" "}isn&apos;t just price. <span>It&apos;s unpredictability.</span>
          </h2>
        </Reveal>
        <Reveal className={styles.crisisFlow}>
          <div className={styles.flowLine} />
          <article>
            <i className={styles.crisisAmber}><Receipt /></i>
            <h3>Bill arrives</h3>
            <p>Unexpectedly high because daily usage stayed invisible.</p>
          </article>
          <article>
            <i className={styles.crisisRed}><TrendingUp /></i>
            <h3>Cross a slab</h3>
            <p>A few heavy days can move the whole month off target.</p>
          </article>
          <article>
            <i className={styles.crisisOrange}><CloudSun /></i>
            <h3>Solar gets wasted</h3>
            <p>Heavy appliances run when the sun is not helping.</p>
          </article>
          <article className={styles.crisisAnswer}>
            <i><Check /></i>
            <h3>ZAPP fixes this</h3>
            <p>Plans usage before the damage is already done.</p>
          </article>
        </Reveal>
      </section>

      <section className={styles.why} id="why">
        <Reveal className={styles.whyHeadline}>
          <span className={styles.kicker}>The simple idea</span>
          <h2>Your bill should never be a surprise.</h2>
        </Reveal>
        <Reveal className={styles.beforeAfter}>
          <div className={styles.oldWay}>
            <span>Without ZAPP</span>
            <strong>Use all month.</strong>
            <strong>See the damage later.</strong>
            <div className={styles.billShock}>
              <Gauge />
              <span><small>Bill received</small>Rs. 24,850</span>
            </div>
          </div>
          <div className={styles.dividerArrow}><ArrowRight /></div>
          <div className={styles.zappWay}>
            <span>With ZAPP</span>
            <strong>Know today.</strong>
            <strong>Adjust before it costs you.</strong>
            <div className={styles.planReady}>
              <Check />
              <span><small>Today’s plan</small>5 smart actions ready</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.start} id="start">
        <Reveal className={styles.sectionHeading}>
          <span className={styles.kicker}>Simple from the start</span>
          <h2>How it works</h2>
          <p>Zero installation. Complete control.</p>
        </Reveal>
        <Reveal className={styles.workTimeline}>
          <div className={styles.timelineLine} />
          <article className={styles.timelineLeft}>
            <div><h3>Sign up</h3><p>No hardware required. Just your phone.</p></div>
            <i><UserPlus /></i>
          </article>
          <article className={styles.timelineRight}>
            <i><PlugZap /></i>
            <div><h3>Add appliances</h3><p>Tell ZAPP what runs in your home.</p></div>
          </article>
          <article className={styles.timelineLeft}>
            <div><h3>Set target</h3><p>Choose your monthly unit goal.</p></div>
            <i><Target /></i>
          </article>
          <article className={styles.timelineRight}>
            <i><Sparkles /></i>
            <div><h3>Daily plan</h3><p>Get your personalized schedule every morning.</p></div>
          </article>
          <article className={styles.timelineLeft}>
            <div><h3>Smart alerts</h3><p>Get warned before crossing your pace.</p></div>
            <i><BellRing /></i>
          </article>
          <article className={styles.timelineRight}>
            <i><PiggyBank /></i>
            <div><h3>Save money</h3><p>Lower bills, less stress.</p></div>
          </article>
        </Reveal>
      </section>

      <section className={styles.inside} id="inside">
        <Reveal className={styles.sectionHeading}>
          <span className={styles.kicker}>One app. Three clear answers.</span>
          <h2>What should I do today?</h2>
        </Reveal>
        <div className={styles.showcases}>
          <Reveal className={`${styles.showcase} ${styles.planShowcase}`}>
            <div className={styles.showcaseCopy}>
              <span>01 · Today’s plan</span>
              <h3>Use the right appliance at the right time.</h3>
              <p>A practical schedule built around your target, appliance load and energy source.</p>
              <div className={styles.miniBenefit}><BellRing /> Swipe tasks done. See your progress move.</div>
            </div>
            <Phone src={assetPath("/zapp-plan.png")} alt="ZAPP daily appliance plan" />
          </Reveal>

          <Reveal className={`${styles.showcase} ${styles.solarShowcase}`}>
            <div className={styles.solarArt}>
              <Sun className={styles.bigSun} />
              <div className={styles.solarGraph}>
                {[28, 52, 78, 100, 84, 58, 32].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className={styles.solarStats}>
                <span><small>Peak window</small><strong>12–3 PM</strong></span>
                <span><small>Expected</small><strong>9.4 kWh</strong></span>
              </div>
            </div>
            <div className={styles.showcaseCopy}>
              <span>02 · Solar intelligence</span>
              <h3>Turn tomorrow’s weather into today’s decision.</h3>
              <p>Know when to run flexible loads and when your battery is better saved.</p>
            </div>
          </Reveal>

          <Reveal className={`${styles.showcase} ${styles.billShowcase}`}>
            <div className={styles.showcaseCopy}>
              <span>03 · Bill pace</span>
              <h3>See where the month is going.</h3>
              <p>Estimated units and tariff context make the risk visible while there is still time to act.</p>
            </div>
            <div className={styles.billArt}>
              <span>Estimated month-end</span>
              <strong>Rs. 15,307</strong>
              <div className={styles.paceTrack}><i /></div>
              <div className={styles.paceLabels}><small>Current pace</small><small>Target</small></div>
              <em><TrendingDown /> 12% saving opportunity</em>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.download} id="download">
        <div className={styles.downloadGlow} />
        <Reveal className={styles.downloadInner}>
          <Logo />
          <h2>A lighter bill starts<br />with a better plan.</h2>
          <p>Try ZAPP on Android today.</p>
          <a
            className={styles.downloadButton}
            href={assetPath("/zapp-demo.apk")}
            download="ZAPP-Demo.apk"
          >
            Download the demo <ArrowRight size={17} />
          </a>
          <span className={styles.apkNote}>Android APK · Manual installation required</span>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <Logo />
        <span>Smarter energy. Lighter bills.</span>
        <div>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:privacy@zapp.energy">Privacy</a>
        </div>
        <small>© 2026 ZAPP Energy Ecosystem</small>
      </footer>
    </main>
  );
}
