"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Section, Container } from "@/components/LayoutUtils";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// ── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How fast can I see results?",
    a: "Most clients see meaningful score movement within 30–90 days depending on their profile. Some see changes in the first 30 days. Results depend on the complexity of your file and how quickly bureaus respond to disputes."
  },
  {
    q: "Is this legit? I've been scammed before.",
    a: "That's exactly why I built this the way I did. No upfront promises I can't keep, no cookie-cutter letters, and no disappearing after you pay. I work with real client profiles and real strategy — and you'll see exactly what I see."
  },
  {
    q: "Do I need to book a call to get started?",
    a: "Nope. In fact, I built a free video analysis offer specifically so you don't have to. Submit your info, I review your profile, and I send you a personal video breakdown. No calendar link. No pressure."
  },
  {
    q: "What if I have bankruptcies, collections, or charge-offs?",
    a: "Those are exactly the types of items we target. Bankruptcies, collections, charge-offs, late payments, medical debt — these are all workable. The approach depends on your specific profile."
  },
  {
    q: "Will this hurt my credit score?",
    a: "No. The dispute and removal process does not negatively impact your score. In most cases the removal of negative items leads to an immediate score increase."
  }
];

// ── TESTIMONIALS ────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Michael",
    result: "Mortgage-ready in 90 days",
    quote: "I went from getting denied on everything to closing on my first home. JayD's team removed the items that were holding me back and rebuilt my profile from the ground up.",
    increase: "+112 pts"
  },
  {
    name: "Rachel",
    result: "800 Club & $40K personal line",
    quote: "I never thought I'd see an 800 score. After the full removal and build-out, I secured a $40K personal line of credit. This changed everything for me financially.",
    increase: "+134 pts"
  },
  {
    name: "Arianna",
    result: "$275K in 0% interest funding",
    quote: "As a real estate investor I needed real capital. JayD positioned my profile correctly and I secured $275K at 0% interest — something I couldn't touch before.",
    increase: "Funded"
  }
];

// ── FAQ ITEM ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/5 hover:border-gold-primary/20 transition-colors cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-6">
        <p className="text-white font-inter text-sm font-semibold tracking-wide pr-4">{q}</p>
        {open
          ? <ChevronUp size={16} className="text-gold-primary flex-shrink-0" />
          : <ChevronDown size={16} className="text-gold-primary/50 flex-shrink-0" />
        }
      </div>
      {open && (
        <div className="px-6 pb-6 border-t border-white/5">
          <p className="text-text-secondary font-inter text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <Section className="pt-32 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover grayscale brightness-75">
            <source src="/0219.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-depth-1 via-transparent to-depth-1 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-depth-1 via-transparent to-depth-1 opacity-80" />
        </div>

        <Container className="max-w-4xl text-center flex flex-col items-center relative z-10">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-16"
          >
            {/* White cinematic backlight */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] blur-2xl scale-150 pointer-events-none" />
            <div className="absolute -inset-6 border border-gold-primary/20 rounded-full animate-pulse" />
            <div className="absolute -inset-2 border border-gold-primary/40 rounded-full" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-gold-primary shadow-[0_0_60px_rgba(212,175,55,0.4),0_0_120px_rgba(255,255,255,0.06)]">
              <img src="/jayd-hero.JPG" alt="JayD The Wealthy Cowboy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl lg:text-8xl font-trajan text-white leading-[1.1] text-glow uppercase tracking-[0.2em]"
            >
              HERE IN THE WEST,<br />
              <span className="text-gold-primary relative inline-block group">
                CREDIT IS POWER.
                <span className="absolute inset-0 text-shimmer opacity-80 pointer-events-none">CREDIT IS POWER.</span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl font-trajan text-white/90 tracking-[0.15em] uppercase leading-tight"
            >
              YOU GET TO DECIDE<br />
              HOW MUCH YOU HAVE.
            </motion.h2>

            {/* Updated body copy — pain-first, audience-focused */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-inter text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              If your score starts with a 4, 5, or 6 — or you keep getting denied — your credit profile is working against you.
              I fix that. Clean it, build it, and position you for real approvals.
            </motion.p>

            {/* Dual CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <Button href="/schedule" variant="primary" size="lg">
                GET A FREE PHONE CONSULTATION
              </Button>
              <Button href="/credit-video-analysis" variant="gold" size="lg">
                GET A FREE CREDIT VIDEO ANALYSIS
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-text-muted font-inter text-xs tracking-widest uppercase"
            >
              No calls required · No pressure · Real results
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* ── SOCIAL PROOF BAR ───────────────────────────────────────────────── */}
      <div className="border-y border-gold-primary/15 bg-depth-vignette py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "500+", label: "Clients Helped" },
              { stat: "80–120+", label: "Avg. Points Per Bureau" },
              { stat: "$275K", label: "Largest Single Funding" },
              { stat: "90 days", label: "Avg. Time to Results" },
            ].map((item) => (
              <div key={item.stat} className="space-y-1">
                <p className="text-gold-primary font-trajan text-2xl md:text-3xl tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">{item.stat}</p>
                <p className="text-text-secondary font-inter text-xs uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── WHO THIS IS FOR ────────────────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block">This Is For You If...</span>
              <h2 className="text-3xl md:text-4xl text-white leading-tight font-trajan tracking-widest uppercase">
                SOUND FAMILIAR?
              </h2>
              <div className="w-24 h-px bg-gold-primary/50" />
              <div className="space-y-4">
                {[
                  "You keep getting denied and don't know why",
                  "Your score starts with a 4, 5, or 6",
                  "You have collections, charge-offs, or late payments dragging you down",
                  "You want real capital but can't access it",
                  "You've tried disputing on your own and it didn't work",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 border border-gold-primary/40 flex items-center justify-center">
                      <Check size={12} className="text-gold-primary" />
                    </div>
                    <p className="text-text-secondary font-inter text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative p-10 border border-gold-primary/20 bg-gold-primary/3 text-center space-y-6">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-primary/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-primary/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-primary/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-primary/40" />
              <p className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase">Average After Our Services</p>
              <p className="text-white/50 font-trajan text-xs tracking-widest uppercase">Credit Access Unlocked</p>
              <p className="text-5xl md:text-6xl font-trajan text-gold-primary tracking-tight">$20K – $35K</p>
              <div className="w-16 h-px bg-gold-primary/30 mx-auto" />
              <p className="text-text-secondary font-inter text-xs leading-relaxed">
                Results vary. Based on client history following full profile build-out and underwriting compliance.
              </p>
              <Button href="/credit-video-analysis" variant="gold" className="w-full text-xs py-3">
                SEE WHERE YOUR PROFILE STANDS →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── STRATEGY + PERFORMANCE ─────────────────────────────────────────── */}
      <Section className="relative border-y border-gold-primary/10 bg-depth-2/50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-trajan text-white tracking-widest uppercase italic">THE STRATEGY</h2>
                <div className="w-24 h-1 bg-gold-primary/40" />
              </div>
              <div className="grid gap-6">
                {["Expose what's wrong.", "Force compliance.", "Rebuild leverage.", "Return to the market approval-ready."].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group flex items-center p-6 bg-white/2 border border-white/5 hover:border-gold-primary/40 transition-all duration-500 rounded-sm glassmorphic"
                  >
                    <div className="w-12 h-12 flex-shrink-0 border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center text-gold-primary mr-6 group-hover:bg-gold-primary group-hover:text-black transition-colors duration-500">
                      <Check size={24} />
                    </div>
                    <span className="font-trajan text-xl text-white/90 tracking-widest uppercase group-hover:text-gold-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-trajan text-white tracking-widest uppercase italic">PROVEN PERFORMANCE</h2>
                <div className="w-24 h-1 bg-gold-primary/40" />
              </div>
              <div className="space-y-8 font-inter">
                {["80–120+ point increases per bureau", "Major derogatories removed", "From constant denials to funded approvals"].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className="relative p-8 md:p-10 bg-gold-primary/2 border-l-4 border-gold-primary/60 backdrop-blur-md overflow-hidden group hover:border-gold-primary transition-all duration-700"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <p className="relative text-xl md:text-2xl text-text-secondary leading-relaxed tracking-wide italic flex items-start">
                      <span className="mr-4 text-gold-primary text-3xl leading-none mt-[-2px]">»</span>
                      <span className="text-white group-hover:text-glow transition-all">{item}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <Section className="py-20" dark>
        <Container className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">Real Clients. Real Results.</span>
            <h2 className="text-3xl md:text-4xl font-trajan text-white tracking-widest uppercase">WHAT HAPPENS AFTER</h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-depth-3 border border-white/5 p-8 hover:border-gold-primary/30 transition-all flex flex-col"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-primary transition-all duration-500" />
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white font-inter font-semibold text-sm">{t.name}</p>
                    <p className="text-text-muted font-inter text-xs tracking-widest uppercase mt-1">{t.result}</p>
                  </div>
                  <span className="text-gold-primary font-trajan text-lg font-bold">{t.increase}</span>
                </div>
                <p className="text-text-secondary font-inter text-sm leading-relaxed italic flex-grow">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FREE VIDEO ANALYSIS FEATURE ────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="max-w-4xl mx-auto">
          <div className="relative border border-gold-primary/25 bg-gold-primary/3 p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold-primary/40" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold-primary/40" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold-primary/40" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold-primary/40" />

            <div className="relative z-10 space-y-6">
              <span className="text-gold-primary text-xs font-bold tracking-[0.5em] uppercase block">New — Zero Friction Offer</span>
              <h2 className="text-3xl md:text-5xl font-trajan text-white tracking-widest uppercase leading-tight">
                NOT READY TO BOOK A CALL?<br />
                <span className="text-gold-primary">I'LL COME TO YOU.</span>
              </h2>
              <p className="text-text-secondary font-inter text-base leading-relaxed max-w-2xl mx-auto">
                Submit your credit monitoring info and I'll personally review your profile and record a custom video walking you through exactly what I see — your negatives, your opportunities, and your path to 700+.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <div className="flex items-center gap-2 text-text-muted font-inter text-xs">
                  <Check size={12} className="text-gold-primary" /> No booked call
                </div>
                <div className="flex items-center gap-2 text-text-muted font-inter text-xs">
                  <Check size={12} className="text-gold-primary" /> No sales pressure
                </div>
                <div className="flex items-center gap-2 text-text-muted font-inter text-xs">
                  <Check size={12} className="text-gold-primary" /> Personalized to your profile
                </div>
              </div>
              <div className="pt-4">
                <Button href="/credit-video-analysis" variant="gold" size="lg">
                  GET A FREE CREDIT VIDEO ANALYSIS
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <Section className="py-16" dark>
        <Container className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-trajan text-white tracking-widest uppercase">COMMON QUESTIONS</h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto mt-4" />
          </div>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <Section className="pb-40">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl text-white leading-tight font-trajan tracking-widest uppercase">
              READY TO TAKE CONTROL<br />OF YOUR CREDIT?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/schedule" variant="primary" size="lg">
                GET A FREE PHONE CONSULTATION
              </Button>
              <Button href="/credit-video-analysis" variant="gold" size="lg">
                GET A FREE CREDIT VIDEO ANALYSIS
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
