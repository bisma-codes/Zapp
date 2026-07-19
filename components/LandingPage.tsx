"use client";

import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  BellRing,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CloudSun,
  Gauge,
  Home,
  Menu,
  Moon,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TrendingDown,
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PhoneFrame } from "@/components/PhoneFrame";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { WaitlistForm } from "@/components/WaitlistForm";

const features = [
  {
    number: "01",
    icon: BrainCircuit,
    eyebrow: "AI electricity planning",
    title: "A plan that thinks ahead.",
    copy: "ZAPP studies your appliances, unit target, tariff slab, solar setup and weather—then turns it into a practical plan for today.",
    accent: "blue",
  },
  {
    number: "02",
    icon: BellRing,
    eyebrow: "Smart alerts",
    title: "The right nudge, before the wrong hour.",
    copy: "Know when a heavy appliance will push you off pace, when sunlight is changing, and when a better usage window opens.",
    accent: "green",
  },
  {
    number: "03",
    icon: Sun,
    eyebrow: "Solar intelligence",
    title: "Use more of the energy you already own.",
    copy: "Weather-aware suggestions help solar households shift flexible loads into stronger generation windows and plan battery use.",
    accent: "yellow",
  },
  {
    number: "04",
    icon: Gauge,
    eyebrow: "Bill prediction",
    title: "See the bill taking shape.",
    copy: "Track estimated units, daily pace and local tariff risk throughout the month—not after the bill has already arrived.",
    accent: "navy",
  },
];

const timeline = [
  ["01", "Meet your home", "Add appliances in under two minutes."],
  ["02", "Choose your target", "Set the monthly units you want to stay within."],
  ["03", "Connect your energy", "Tell ZAPP about grid, solar and battery."],
  ["04", "Get today’s plan", "Receive practical windows for your appliances."],
  ["05", "Stay on pace", "Use alerts and progress to make small daily changes."],
];

const comparisons = [
  ["Plans before usage happens", false, true],
  ["Works without smart hardware", false, true],
  ["Weather-aware solar planning", false, true],
  ["Personalized daily schedule", false, true],
  ["Pakistan tariff context", false, true],
  ["Shows historical usage", true, true],
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Zap size={20} fill="currentColor" />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ZAPP home">
        <BrandMark />
        <strong>ZAPP</strong>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        <a href="#how" onClick={() => setOpen(false)}>How it works</a>
        <a href="#features" onClick={() => setOpen(false)}>Features</a>
        <a href="#solar" onClick={() => setOpen(false)}>Solar</a>
        <a href="#savings" onClick={() => setOpen(false)}>Savings</a>
      </nav>
      <a className="nav-cta" href="#download">
        Get ZAPP <ArrowRight size={15} />
      </a>
      <button
        type="button"
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const phoneY = useTransform(scrollYProgress, [0, 0.18], [0, 80]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.18], [-4, 1]);

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="solar-glow" aria-hidden="true" />
      <motion.div
        className="energy-particle particle-one"
        animate={reduceMotion ? undefined : { y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="energy-particle particle-two"
        animate={reduceMotion ? undefined : { y: [0, 20, 0], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 6.5, repeat: Infinity }}
      />

      <Header />

      <div className="hero-copy">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="hero-pill"
        >
          <Sparkles size={14} />
          Built for how Pakistan uses electricity
        </motion.div>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          Plan electricity
          <br />
          <span>before you pay for it.</span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.17 }}
          className="hero-sub"
        >
          ZAPP turns appliances, weather, solar and your monthly target into a
          simple daily plan—without a smart meter or expensive hardware.
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
          className="hero-actions"
        >
          <a className="button primary" href="#download">
            Join the Android waitlist <ArrowRight size={17} />
          </a>
          <a className="button text-button" href="#how">
            See how it works <ArrowDown size={16} />
          </a>
        </motion.div>
        <div className="hero-proof">
          <span><ShieldCheck size={16} /> No hardware required</span>
          <span><CloudSun size={16} /> Weather-aware</span>
          <span><Target size={16} /> Built around your target</span>
        </div>
      </div>

      <motion.div
        className="hero-product"
        style={reduceMotion ? undefined : { y: phoneY, rotate: phoneRotate }}
        initial={reduceMotion ? false : { opacity: 0, y: 48, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <PhoneFrame
          src="/zapp-dashboard.png"
          alt="ZAPP dashboard showing estimated units, bill and solar outlook"
          priority
        />
        <motion.div
          className="floating-card hero-alert"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity }}
        >
          <span className="float-icon yellow"><Sun size={17} /></span>
          <div><strong>Solar window</strong><small>Run washer before 2:00 PM</small></div>
        </motion.div>
        <motion.div
          className="floating-card hero-saving"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 5.4, repeat: Infinity }}
        >
          <span className="float-icon green"><TrendingDown size={17} /></span>
          <div><strong>12% below pace</strong><small>Small changes, real progress</small></div>
        </motion.div>
      </motion.div>

      <div className="hero-footnote">
        <span>Scroll to see the system</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function ProblemStory() {
  return (
    <AnimatedSection className="problem-section" id="how">
      <div className="section-intro centered">
        <span className="eyebrow">The problem isn’t only what you use</span>
        <h2>It’s finding out <em>too late.</em></h2>
        <p>
          Most households see the consequence after the month is over. A few
          heavy days, one crossed slab, and an expected bill becomes a shock.
        </p>
      </div>
      <div className="problem-flow">
        <div className="problem-node">
          <span>01</span><PlugZap /><strong>Use electricity</strong><small>Every appliance adds up</small>
        </div>
        <ChevronRight className="flow-arrow" />
        <div className="problem-node">
          <span>02</span><Gauge /><strong>Cross a slab</strong><small>The effective cost climbs</small>
        </div>
        <ChevronRight className="flow-arrow" />
        <div className="problem-node danger">
          <span>03</span><Zap /><strong>Bill arrives</strong><small>Now it’s too late to change</small>
        </div>
      </div>
      <div className="problem-answer">
        <div className="answer-line" />
        <span><BrandMark /> ZAPP moves the decision to before the usage happens.</span>
      </div>
    </AnimatedSection>
  );
}

function DayInMotion() {
  return (
    <AnimatedSection className="day-section">
      <div className="day-copy">
        <span className="eyebrow light">From reactive to ready</span>
        <h2>Your electricity day, already thought through.</h2>
        <p>
          Wake up to a plan shaped around your home. Follow the useful parts,
          adjust what you can, and see the month respond.
        </p>
        <div className="day-steps">
          <div><span>07:00</span><strong>Today’s plan is ready</strong><small>5 practical windows for your appliances</small></div>
          <div><span>13:20</span><strong>Solar conditions improve</strong><small>Shift a flexible load into free sunlight</small></div>
          <div><span>18:00</span><strong>Heavy-use alert</strong><small>Wait 45 minutes to protect your daily pace</small></div>
          <div><span>21:30</span><strong>Day stays on target</strong><small>Your monthly forecast updates automatically</small></div>
        </div>
      </div>
      <div className="day-phone-wrap">
        <div className="day-halo" />
        <PhoneFrame src="/zapp-plan.png" alt="ZAPP Today's Plan with appliance schedule" />
      </div>
    </AnimatedSection>
  );
}

function AIFlow() {
  return (
    <AnimatedSection className="ai-section">
      <div className="section-intro centered narrow">
        <span className="eyebrow">Intelligence, without the robot theatre</span>
        <h2>Many signals in. One useful plan out.</h2>
        <p>ZAPP’s AI is there to simplify your next decision—not to give you another dashboard to decode.</p>
      </div>
      <div className="ai-flow">
        <div className="signal-stack left">
          <div><Home /><span>Appliances</span></div>
          <div><Target /><span>Unit target</span></div>
          <div><CloudSun /><span>Weather</span></div>
        </div>
        <div className="ai-core">
          <div className="core-ring ring-one" />
          <div className="core-ring ring-two" />
          <BrandMark />
          <strong>ZAPP intelligence</strong>
          <span>Planning engine</span>
        </div>
        <div className="signal-stack right">
          <div><Sun /><span>Solar forecast</span></div>
          <div><BatteryCharging /><span>Battery</span></div>
          <div><Gauge /><span>Tariff slabs</span></div>
        </div>
      </div>
      <div className="ai-output">
        <div><Check /><strong>Best time</strong><span>Use flexible loads when it costs less</span></div>
        <div><Check /><strong>Daily plan</strong><span>Know what matters today</span></div>
        <div><Check /><strong>Smart alert</strong><span>Act before you go off pace</span></div>
      </div>
    </AnimatedSection>
  );
}

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-intro split-intro">
        <div>
          <span className="eyebrow">One connected energy assistant</span>
          <h2>Not a feature list.<br />A calmer way to manage electricity.</h2>
        </div>
        <p>
          Every part of ZAPP works toward one outcome: helping your household
          stay informed, use energy more intentionally, and avoid preventable bill surprises.
        </p>
      </div>
      <div className="feature-list">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <AnimatedSection className={`feature-row feature-${feature.accent}`} key={feature.number}>
              <div className="feature-index">{feature.number}</div>
              <div className="feature-copy">
                <span className="eyebrow">{feature.eyebrow}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </div>
              <div className="feature-visual" aria-hidden="true">
                {index === 0 && (
                  <div className="plan-card">
                    <div className="plan-card-head"><span>Today</span><strong>Plan optimized</strong></div>
                    <div className="mini-task"><span>12:30</span><i /><strong>Washing machine</strong><small>Solar window</small></div>
                    <div className="mini-task"><span>16:00</span><i /><strong>Water pump</strong><small>Low-load period</small></div>
                    <div className="mini-task"><span>22:00</span><i /><strong>TV</strong><small>On target</small></div>
                  </div>
                )}
                {index === 1 && (
                  <div className="alert-stack">
                    <div><span className="float-icon yellow"><Sun /></span><strong>Sunlight improves at 1 PM</strong><small>Move one flexible task</small></div>
                    <div><span className="float-icon blue"><BellRing /></span><strong>Daily pace is rising</strong><small>Delay the water pump 40 min</small></div>
                  </div>
                )}
                {index === 2 && (
                  <div className="solar-mini">
                    <Sun className="solar-mini-sun" />
                    <div className="solar-curve"><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="solar-mini-meta"><span>Peak forecast</span><strong>9.4 kWh</strong></div>
                  </div>
                )}
                {index === 3 && (
                  <div className="bill-visual">
                    <span>Estimated month-end</span><strong>Rs. 15,307</strong>
                    <div className="bill-track"><i /></div>
                    <div><small>Current pace</small><small>Target</small></div>
                    <em>12% opportunity</em>
                  </div>
                )}
                <span className="feature-icon"><Icon /></span>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

function SolarStory() {
  return (
    <AnimatedSection className="solar-section" id="solar">
      <div className="solar-rays" aria-hidden="true" />
      <div className="solar-copy">
        <span className="eyebrow">Solar intelligence</span>
        <h2>Sunlight becomes a schedule.</h2>
        <p>
          ZAPP connects the forecast to the way your home actually uses energy,
          helping you make more of solar production and plan battery decisions.
        </p>
        <div className="solar-equation">
          <span><CloudSun /> Weather</span><i>+</i>
          <span><Sun /> Solar</span><i>+</i>
          <span><PlugZap /> Appliances</span><i>=</i>
          <strong>Better timing</strong>
        </div>
        <ul className="check-list">
          <li><Check /> Four-day sunlight outlook</li>
          <li><Check /> Weather-aware battery guidance</li>
          <li><Check /> Best windows for flexible appliances</li>
        </ul>
      </div>
      <div className="solar-dashboard">
        <div className="weather-head">
          <div><span>Karachi · Today</span><strong>Clear skies</strong></div>
          <div className="weather-temp">31°</div>
        </div>
        <div className="sun-arc">
          <div className="sun-dot"><Sun /></div>
          <span className="arc-label start">8 AM</span>
          <span className="arc-label peak">1 PM peak</span>
          <span className="arc-label finish">6 PM</span>
        </div>
        <div className="solar-stats">
          <div><span>Expected</span><strong>9.4 kWh</strong></div>
          <div><span>Solar share</span><strong>~25%</strong></div>
          <div><span>Best window</span><strong>12–3 PM</strong></div>
        </div>
        <div className="battery-tip">
          <BatteryCharging />
          <div><strong>Store energy today</strong><span>Cloud cover increases tomorrow afternoon.</span></div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Recommendations() {
  return (
    <AnimatedSection className="recommend-section">
      <div className="section-intro centered narrow">
        <span className="eyebrow">Smarter appliances, clearer trade-offs</span>
        <h2>Know what an upgrade could actually change.</h2>
        <p>No product theatre. ZAPP compares estimated energy impact so you can decide what is worth replacing.</p>
      </div>
      <div className="recommend-flow">
        <div className="appliance-card current">
          <span className="card-tag">Current appliance</span>
          <div className="appliance-icon"><Moon /></div>
          <strong>Standard ceiling fan</strong>
          <span>75W · 10 hours/day</span>
          <div className="usage-line"><span>Estimated monthly use</span><strong>22.5 units</strong></div>
        </div>
        <div className="switch-arrow"><ArrowRight /></div>
        <div className="appliance-card better">
          <span className="card-tag">Recommended</span>
          <div className="appliance-icon"><Sparkles /></div>
          <strong>BLDC / smart fan</strong>
          <span>~40W · same daily use</span>
          <div className="usage-line"><span>Estimated monthly use</span><strong>12 units</strong></div>
        </div>
        <div className="saving-summary">
          <TrendingDown />
          <span>Potential yearly saving</span>
          <strong>~126 units</strong>
          <small>Estimate based on your usage profile</small>
        </div>
      </div>
    </AnimatedSection>
  );
}

function OnboardingTimeline() {
  return (
    <AnimatedSection className="timeline-section">
      <div className="section-intro centered narrow">
        <span className="eyebrow">Two minutes to a useful plan</span>
        <h2>Start with what you already know.</h2>
      </div>
      <div className="timeline-layout">
        <div className="timeline-phone">
          <PhoneFrame src="/zapp-welcome.png" alt="ZAPP welcome and home setup screen" />
        </div>
        <ol className="timeline-list">
          {timeline.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <div><strong>{title}</strong><p>{copy}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}

function Comparison() {
  return (
    <AnimatedSection className="comparison-section">
      <div className="section-intro centered narrow">
        <span className="eyebrow light">Why ZAPP is different</span>
        <h2>Tracking explains yesterday.<br />Planning changes tomorrow.</h2>
      </div>
      <div className="comparison-table">
        <div className="comparison-head">
          <span />
          <strong>Typical usage app</strong>
          <strong className="zapp-column"><BrandMark /> ZAPP</strong>
        </div>
        {comparisons.map(([label, typical, zapp]) => (
          <div className="comparison-row" key={String(label)}>
            <span>{label}</span>
            <span>{typical ? <Check /> : <span className="dash">—</span>}</span>
            <span className="zapp-column">{zapp ? <Check /> : "—"}</span>
          </div>
        ))}
      </div>
      <p className="comparison-note">No smart meter. No connected plugs. No extra hardware bill.</p>
    </AnimatedSection>
  );
}

function Trust() {
  return (
    <AnimatedSection className="trust-section">
      <div className="trust-label">Designed around real local context</div>
      <div className="trust-grid">
        <div><strong>Pakistan-first</strong><span>Local units, PKR and residential tariff context.</span></div>
        <div><strong>Research-led</strong><span>Built from household energy planning principles.</span></div>
        <div><strong>Transparent estimates</strong><span>Projections are clearly labelled—not presented as meter data.</span></div>
        <div><strong>Privacy-minded</strong><span>Starts with appliance information, not invasive hardware.</span></div>
      </div>
    </AnimatedSection>
  );
}

function Download() {
  return (
    <AnimatedSection className="download-section" id="download">
      <div className="download-glow" />
      <div className="download-copy">
        <span className="eyebrow light">The bill will come either way</span>
        <h2>Be ready before it does.</h2>
        <p>Join the Android launch list and be among the first households to plan electricity with ZAPP.</p>
        <WaitlistForm />
        <div className="platform-row">
          <span><Bot size={16} /> Android · Waitlist open</span>
          <span className="muted"><span className="apple-mark">●</span> iOS · Coming soon</span>
        </div>
      </div>
      <div className="download-mark" aria-hidden="true"><Zap fill="currentColor" /></div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <a className="brand footer-brand" href="#top"><BrandMark /><strong>ZAPP</strong></a>
          <p>Smarter energy. Lighter bills.</p>
        </div>
        <div className="footer-links">
          <div><strong>Product</strong><a href="#features">Features</a><a href="#solar">Solar</a><a href="#savings">Savings</a></div>
          <div><strong>Company</strong><a href="mailto:hello@zapp.energy">Contact</a><a href="#trust">Principles</a></div>
          <div><strong>Legal</strong><a href="mailto:privacy@zapp.energy">Privacy</a><a href="mailto:hello@zapp.energy">Terms</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ZAPP Energy Ecosystem</span>
        <span>Designed for Pakistan</span>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <main>
      <Hero />
      <ProblemStory />
      <DayInMotion />
      <AIFlow />
      <Features />
      <SolarStory />
      <Recommendations />
      <AnimatedSection className="savings-section" id="savings">
        <div className="section-intro centered narrow">
          <span className="eyebrow">Your savings scenario</span>
          <h2>Make the opportunity tangible.</h2>
          <p>Adjust the inputs to see an illustrative planning range for a household like yours.</p>
        </div>
        <SavingsCalculator />
      </AnimatedSection>
      <OnboardingTimeline />
      <Comparison />
      <div id="trust"><Trust /></div>
      <Download />
      <Footer />
      <a className="mobile-sticky-cta" href="#download">Get ZAPP <ArrowRight /></a>
    </main>
  );
}
