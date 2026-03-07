import { Section, Container } from "@/components/LayoutUtils";
import { Button } from "@/components/Button";

export const metadata = {
    title: "Free Credit Video Analysis | JayD The Wealthy Cowboy™",
    description: "Download the same field-tested roadmap JayD uses to turn broken credit files into funded profiles—without booking a call.",
};

const valueStack = [
    {
        title: "Profile Milestone Map",
        description: "See the exact sequence I use to take clients from sub-600 scores to approval-ready. No fluff—just the checkpoints that move the score." ,
        bullets: ["Snapshot of your weak points", "Priority order of disputes & rebuild tasks", "Targets for each 30-day sprint"],
    },
    {
        title: "Systems & Hiring Toolkit",
        description: "Peek behind the curtain on how I run dispute, rebuild, and funding prep with a lean remote team.",
        bullets: ["Dispute packet templates", "Vendor + tradeline stack", "Compliance reminders so bureaus cooperate"],
    },
    {
        title: "Funding Playbook",
        description: "Once the profile is clean, you still need approvals. I show you how I structure sequencing for 0% capital and revolvers.",
        bullets: ["Pre-underwriting checklist", "Bank relationship map", "When to pull the trigger on each lender"],
    },
];

const timeline = [
    { year: "2017", title: "Filed + Broke", detail: "Lost everything, rebuilt my own credit from scratch in 9 months." },
    { year: "2020", title: "$0 → $500K Funded", detail: "Designed the first remote credit ops system for founders avoiding discovery calls." },
    { year: "2022", title: "Centaur Elite Consulting", detail: "Launched the one-VPS workflow powering clients in 30+ states." },
    { year: "2025", title: "Video-First Workflow", detail: "Built the no-call Loom breakdown you’re about to use." },
];

const testimonials = [
    {
        name: "Monica • Salon Owner",
        highlight: "+118 points, $65K approvals",
        quote: "I never got cornered into a sales call. JayD sent the video, I executed the play, then we funded everything we mapped." ,
    },
    {
        name: "Caleb • Logistics Founder",
        highlight: "$150K 0% capital",
        quote: "The roadmap told me exactly what to fix first. By the time we talked, I already had lenders chasing me." ,
    },
    {
        name: "Raven • Trucking Fleet",
        highlight: "Collections erased in 45 days",
        quote: "Fastest credit analysis I’ve seen. The video felt like he was in the room circling every issue with receipts." ,
    },
];

const faqs = [
    {
        q: "Why is this free?",
        a: "Because I’d rather prove competence first. Some founders hire me after the video, some don’t. Every Loom I send builds more leverage for the brand." ,
    },
    {
        q: "Who is this for?",
        a: "Operators, agency owners, investors, and high earners who need credit fixed fast without babysitting a salesperson." ,
    },
    {
        q: "What if I’m pre-$1M or under 620?",
        a: "Still works. The video shows you the milestone map for your exact profile. Whether you work with me or not, you leave with direction." ,
    },
    {
        q: "How long does it take?",
        a: "48 hours once your MyFreeScoreNow login hits my desk. If volume spikes I’ll text you with an ETA before I charge forward." ,
    },
];

export default function CreditVideoAnalysisPage() {
    return (
        <div className="pb-20">

            {/* HERO */}
            <Section className="pt-32 pb-24 relative overflow-hidden">
                <Container className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
                    <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase">Hormozi-Style Roadmap • Credit Edition</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                        Get the Loom Breakdown JayD uses to flip broken credit files into funded playbooks—no calls, no pressure.
                    </h1>
                    <p className="text-text-secondary font-inter text-lg max-w-3xl mx-auto">
                        Built for founders, operators, and agency owners who need answers faster than a calendar link. Watch the short clip, drop your info, and I’ll send the same Epic Pro report walkthrough I use before every six-figure funding win.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="#get-your-review" variant="primary" size="lg">Send me the roadmap</Button>
                        <Button href="#watch" variant="gold" size="lg">Watch the 2-min context</Button>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-left sm:text-center text-text-muted font-inter text-sm uppercase tracking-[0.3em]">
                        <span>48hr Turnaround</span>
                        <span className="hidden sm:block">•</span>
                        <span>No phone calls</span>
                        <span className="hidden sm:block">•</span>
                        <span>Epic outcome or epic story</span>
                    </div>
                </Container>
                <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
            </Section>

            {/* AUTHORITY STRIP */}
            <Section className="py-12 border-y border-white/5 bg-depth-vignette">
                <Container className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "$1.2M+", caption: "portfolio revenue touched" },
                            { label: "30 states", caption: "clients serviced" },
                            { label: "$275K", caption: "largest 0% stack" },
                            { label: "Guinness-level", caption: "turnaround speed" },
                        ].map((item) => (
                            <div key={item.label}>
                                <p className="text-gold-primary font-trajan text-3xl">{item.label}</p>
                                <p className="text-text-secondary text-xs uppercase tracking-[0.3em]">{item.caption}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-10 opacity-70 text-xs uppercase tracking-[0.5em] text-text-muted">
                        <span>Centaur Elite Consulting</span>
                        <span>•</span>
                        <span>Credit Cowboy Ops</span>
                        <span>•</span>
                        <span>Vultr Cloud Stack</span>
                    </div>
                </Container>
            </Section>

            {/* VALUE STACK */}
            <Section className="py-20">
                <Container className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase">What you download</span>
                        <h2 className="text-3xl md:text-4xl text-white">The Free Video Analysis Comes With a Stack</h2>
                        <p className="text-text-secondary max-w-3xl mx-auto">
                            This isn’t a checklist. It’s the same internal roadmap I run before hopping on any paid engagement. Swipe the plays, even if you never hire me.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {valueStack.map((card) => (
                            <div key={card.title} className="bg-depth-vignette border border-white/5 p-8 space-y-4">
                                <h3 className="text-gold-primary text-sm tracking-[0.4em] uppercase">{card.title}</h3>
                                <p className="text-white text-lg leading-relaxed">{card.description}</p>
                                <ul className="space-y-2 text-text-secondary text-sm">
                                    {card.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-2">
                                            <span className="text-gold-primary">•</span><span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* VIDEO + TIMELINE */}
            <Section className="py-20" id="watch">
                <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="relative w-full aspect-video bg-depth-vignette border border-gold-primary/20 flex items-center justify-center">
                            <div className="text-center space-y-3 p-8">
                                <div className="w-16 h-16 rounded-full border-2 border-gold-primary/50 flex items-center justify-center mx-auto">
                                    <svg className="w-6 h-6 text-gold-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p className="text-gold-primary text-xs font-bold tracking-[0.3em] uppercase">
                                    2-minute context from JayD
                                </p>
                                <p className="text-text-secondary font-inter text-sm">
                                    Loom embed drops here once recording is done.
                                </p>
                            </div>
                        </div>
                        <p className="text-text-muted text-xs uppercase tracking-[0.3em]">Educational use disclosure • Loom clip mirrors website copy</p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-white text-2xl">Timeline: 21 to 36</h3>
                        <div className="space-y-4">
                            {timeline.map((item) => (
                                <div key={item.year} className="flex gap-4">
                                    <div className="text-gold-primary font-trajan text-xl w-16">{item.year}</div>
                                    <div>
                                        <p className="text-white font-semibold">{item.title}</p>
                                        <p className="text-text-secondary text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* PROOF */}
            <Section className="py-20" dark>
                <Container className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center space-y-3">
                        <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase">Proof & Social Validation</span>
                        <h2 className="text-3xl text-white">You Either Get an Epic Outcome or an Epic Story</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((item) => (
                            <div key={item.name} className="bg-depth-3 border border-white/5 p-6 flex flex-col gap-3">
                                <p className="text-text-muted text-xs uppercase tracking-[0.4em]">{item.name}</p>
                                <p className="text-gold-primary font-semibold">{item.highlight}</p>
                                <p className="text-white text-sm leading-relaxed">“{item.quote}”</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* LEAD CAPTURE */}
            <Section className="py-20" id="get-your-review">
                <Container className="max-w-3xl mx-auto space-y-10">
                    <div className="text-center space-y-4">
                        <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase">Lead Capture</span>
                        <h2 className="text-3xl text-white">Drop your details, get the roadmap, apply it.</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Short form. Name, email, revenue band, biggest bottleneck, and your MyFreeScoreNow login. Optional checkbox if you want invites to my workshop cycles once you cross $1M.
                        </p>
                    </div>
                    <iframe
                        src="https://links.jaydthewealthycowboy.com/widget/form/dJyU4J67BiYA4rYuQxew"
                        style={{ width: "100%", height: "1517px", border: "none", borderRadius: "3px" }}
                        id="inline-dJyU4J67BiYA4rYuQxew"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Form 12"
                        data-height="1517"
                        data-layout-iframe-id="inline-dJyU4J67BiYA4rYuQxew"
                        data-form-id="dJyU4J67BiYA4rYuQxew"
                        title="Credit Video Analysis Form"
                    />
                    <script src="https://links.jaydthewealthycowboy.com/js/form_embed.js" />
                    <p className="text-text-muted text-xs text-center">
                        Your access is for educational use. Loom recordings mirror the disclosures listed on this page.
                    </p>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="py-20" dark>
                <Container className="max-w-4xl mx-auto space-y-6">
                    <div className="text-center space-y-3">
                        <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase">Risk reversal</span>
                        <h2 className="text-3xl text-white">FAQs founders actually ask</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.q} className="border border-white/10 p-6">
                                <summary className="cursor-pointer text-white font-semibold">{faq.q}</summary>
                                <p className="text-text-secondary text-sm mt-3">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FINAL PUSH */}
            <Section className="py-20">
                <Container className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl text-white">Download it before the next workshop cycle.</h2>
                    <p className="text-text-secondary">
                        When I’m onboarding a new private client, I pause the free video flow. If this page is live, you’re early. Drop your info and you’ll have the roadmap and Loom in your inbox within 48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="#get-your-review" variant="primary" size="lg">Get the roadmap & apply it</Button>
                        <Button href="#watch" variant="gold" size="lg">Preview the clip</Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
