import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  ExternalLink,
  Feather,
  GraduationCap,
  Mail,
  Music,
  Palette,
  ShieldCheck,
  Sparkles,
  Volume2,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projectStrands = [
  ["Meta-Pet", "teaches"],
  ["Moss 60", "gives it structure"],
  ["Auralia", "gives it myth"],
  ["Black Wing Crew", "gives it sound"],
  ["The Teacher’s Secret Cheatsheet", "gives it classroom use"],
  ["The Grammarian’s Coup", "gives it language"],
];

const doors = [
  {
    title: "Art",
    icon: Palette,
    tagline: "The face",
    body: "Paintings, posters, lyric sheets, symbols, stickers, colouring pages, black cockatoo mythology, gold-on-blue Auralia direction and B$S visual systems.",
  },
  {
    title: "Music",
    icon: Music,
    tagline: "The voice",
    body: "Black Wing Crew, Neon Venom, dark chant hooks, sea-shanty metal energy, taiko rhythm sheets, bilingual lyric work and memetic repetition.",
  },
  {
    title: "Apps",
    icon: Zap,
    tagline: "The body",
    body: "Meta-Pet, Moss 60, privacy-first learning tools, digital DNA, teacher supports, offline-first web apps and school-safe creative technology.",
  },
];


const imageAssets = [
  {
    title: "B$S Sigil",
    src: "/assets/bss-sigil.svg",
    alt: "Blue Snake Studio B$S sigil with Moss 60 pattern rings",
    body: "Core studio mark for headers, stickers, favicon variants and pitch pages.",
  },
  {
    title: "Auralia",
    src: "/assets/auralia-gold-on-blue.svg",
    alt: "Gold on blue Auralia cockatoo guide mark",
    body: "Gold-on-blue mythic guide image for the visual identity and poster system.",
  },
  {
    title: "Meta-Pet",
    src: "/assets/meta-pet-companion.svg",
    alt: "Privacy-first Meta-Pet companion illustration",
    body: "Friendly school-safe digital companion visual for the privacy-first app strand.",
  },
  {
    title: "Moss 60",
    src: "/assets/moss-60-orbital-map.svg",
    alt: "Moss 60 orbital visual mathematics map",
    body: "Number, geometry, 108/360 pattern language and digital DNA identity logic.",
  },
  {
    title: "Black Wing Crew",
    src: "/assets/black-wing-crew-omen.svg",
    alt: "Black Wing Crew omen bird and butterfly emblem",
    body: "Music-world emblem for Neon Venom, omen hooks, lyric sheets and QR posters.",
  },
  {
    title: "Teacher Tools",
    src: "/assets/teacher-tools-cheatsheet.svg",
    alt: "Teacher tools cheatsheet graphic",
    body: "Classroom-facing graphic for teach sheets and behaviour support resources.",
  },
  {
    title: "Grammarian’s Coup",
    src: "/assets/grammarians-coup-lexicon.svg",
    alt: "The Grammarian’s Coup memetic lexicon graphic",
    body: "Language, framing, recursive hooks and memetic lexicon identity card.",
  },
];

const flagshipCards = [
  {
    title: "Meta-Pet",
    eyebrow: "Privacy-first digital companion",
    icon: ShieldCheck,
    body: "A free, offline, zero-data-collecting STEAM learning tool designed so children do not have to trade privacy for learning. No tracking, no ads, no unnecessary logins, no student-data harvest.",
    bullets: ["Healthy device use", "Local-first by design", "Teacher-ready lessons", "Built for calm learning"],
  },
  {
    title: "Moss 60",
    eyebrow: "Visual maths / digital DNA",
    icon: BrainCircuit,
    body: "A pattern-based mathematical system that turns number into something visual, audible, symbolic and interactive — connecting base-60 thinking, 108 and 360 cycles, identity marks, sound and geometry.",
    bullets: ["Verifiable uniqueness", "Symbolic number logic", "Audio-visual maths", "Hepta-encryption concept"],
  },
  {
    title: "Teacher Tools",
    eyebrow: "Classroom support without admin drag",
    icon: GraduationCap,
    body: "Teach sheets and behaviour support planning resources made to equip teachers without eating their already stretched time — focused on duties of care, resilience, early-years support and practical behaviour language.",
    bullets: ["No setup maze", "No login burden", "Behavioural support lens", "Rights-first framing"],
  },
  {
    title: "Black Wing Crew",
    eyebrow: "Sound world / lyric engine",
    icon: Feather,
    body: "A mythic music world of black birds, black butterflies, omen language, oars, taiko pulse, recursive hooks, lyric posters, QR campaigns and dark chant crew energy.",
    bullets: ["Neon Venom", "Rowing call-and-response", "Poster-ready lyrics", "Frankston ↔ Susono strands"],
  },
];

const skills = [
  "hands-on making",
  "studio branding",
  "HTML / CSS / React scaffolds",
  "visual mathematics",
  "geometry and symbolic systems",
  "music and lyric writing",
  "poster and sticker design",
  "behaviour support language",
  "STEAM lesson design",
  "memetic framing",
  "Japanese / Sanskrit interest",
  "skateboarding / kendama / origami",
];

const links = [
  ["BlueSnakeStudios.com", "https://www.bluesnakestudios.com/", "Meta-Pet / Blue $nake Studio flagship"],
  ["BlackWingCrew.netlify.app", "https://blackwingcrew.netlify.app/", "Black Wing Crew / Neon Venom music world"],
  ["YouTube @blkck2", "https://www.youtube.com/@blkck2", "Songs, clips and creative drops"],
  ["Jewble Elevator Pitch", "https://elevator-pitch-seven.vercel.app/", "Pitch / concept page"],
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const next = new Set(prev);
              next.add(entry.target.id);
              return next;
            });
          }
        });
      },
      { threshold: 0.12 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) sectionRefs.current[id] = el;
  };

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-deep-black text-cream">
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gold/25 bg-deep-black/92 shadow-2xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-3 no-underline">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-deep-blue text-lg font-black text-gold shadow-[0_0_28px_rgba(212,175,55,0.2)]">
              B<span className="sr-only">dollar</span>$
            </div>
            <div className="leading-tight">
              <span className="block text-base font-black tracking-wide text-cream">
                Blue <span className="text-gold">$</span>nake Studio
              </span>
              <span className="hidden text-xs uppercase tracking-[0.32em] text-cream/55 sm:block">
                Pattern Architects
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
            <a href="#bio" className="nav-link">Bio</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#music" className="nav-link">Music</a>
            <a href="#visuals" className="nav-link">Images</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
          <div className="hero-grid absolute inset-0 -z-20" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute right-[-18rem] top-24 -z-10 h-[36rem] w-[36rem] rounded-full bg-neon-green/10 blur-3xl" />
          <div className="container py-20">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.45em] text-gold">
                The Moss Man · B$S · Pirate Wizard
              </p>
              <h1 className="text-balance text-6xl font-black uppercase leading-none tracking-tight text-cream md:text-8xl lg:text-9xl">
                Art. Music. Apps.
                <span className="block text-gold">From Pattern.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-cream/85 md:text-2xl">
                Blue $nake Studio is a living world of privacy-first learning tools,
                visual mathematics, mythic music, teacher resources, behavioural language
                and symbolic storytelling built by Tom Carroll — The Moss Man.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a className="btn-cta" href="#projects">
                  Enter the B$S World <ArrowRight className="h-5 w-5" />
                </a>
                <a className="btn-ghost" href="https://www.youtube.com/@blkck2" target="_blank" rel="noreferrer">
                  YouTube @blkck2 <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3 text-center">
                <div className="stat-chip"><strong>0</strong><span>data collected</span></div>
                <div className="stat-chip"><strong>60</strong><span>Moss logic</span></div>
                <div className="stat-chip"><strong>108</strong><span>pattern cycle</span></div>
              </div>
              <div className="hero-art-frame mx-auto mt-12 max-w-4xl">
                <img
                  src="/assets/hero-blue-snake-studio.svg"
                  alt="Blue Snake Studio hero artwork showing B$S, Moss 60 pattern rings and Art Music Apps from Pattern"
                  className="h-auto w-full rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="bio"
          ref={setSectionRef("bio")}
          className={`section-fade bg-cream py-20 text-deep-black md:py-28 ${isVisible("bio") ? "is-visible" : ""}`}
        >
          <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="section-kicker">Bio / identity</p>
              <h2 className="section-title text-deep-black">Who is The Moss Man?</h2>
              <div className="space-y-5 text-lg leading-relaxed text-gray-800">
                <p>
                  I am Tom Carroll, also working creatively as The Moss Man — founder,
                  builder, myth-maker and hands-on force behind Blue $nake Studio / B$S.
                  I build, fix, draw, paint, sing, skate, fold, write, compose and follow
                  patterns until they turn into worlds.
                </p>
                <p>
                  My work sits between art, music, mathematics, child development,
                  behavioural support, mythology, memetics, geometry, language and digital
                  invention. What started as a spread of hobbies became a connected studio
                  system with its own symbols, songs, apps, learning tools and visual language.
                </p>
                <p>
                  I am not trying to make technology that steals attention. I am building
                  tools, stories and systems that give attention back — especially for kids,
                  teachers and creative learners who need practical tools without private-data traps.
                </p>
              </div>
            </div>
            <Card className="myth-card p-7">
              <img src="/assets/bss-sigil.svg" alt="Blue Snake Studio B$S sigil" className="mb-6 aspect-square w-28 rounded-3xl border border-gold/30 bg-deep-black p-2" />
              <p className="mb-6 text-3xl font-black leading-tight text-deep-black md:text-4xl">
                “Pattern is the language of meaning.”
              </p>
              <p className="text-lg text-gray-700">
                The art gives it a face. The music gives it a voice. The apps give it a body.
                Underneath all of it is pattern.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-bold text-deep-black">
                <span className="pill">Pirate wizard</span>
                <span className="pill">Studio builder</span>
                <span className="pill">Visual maths</span>
                <span className="pill">Behaviour tools</span>
              </div>
            </Card>
          </div>
        </section>

        <section
          id="world"
          ref={setSectionRef("world")}
          className={`section-fade bg-deep-blue py-20 md:py-28 ${isVisible("world") ? "is-visible" : ""}`}
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Connected system</p>
              <h2 className="section-title text-cream">Blue $nake Studio is not one project.</h2>
              <p className="text-xl leading-relaxed text-cream/75">
                It is a studio world where every strand feeds the next.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projectStrands.map(([name, action]) => (
                <div key={name} className="strand-card">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <div>
                    <strong>{name}</strong>
                    <span>{action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="doors"
          ref={setSectionRef("doors")}
          className={`section-fade bg-cream py-20 text-deep-black md:py-28 ${isVisible("doors") ? "is-visible" : ""}`}
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Three big doors</p>
              <h2 className="section-title text-deep-black">Art gives it a face. Music gives it a voice. Apps give it a body.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {doors.map(({ title, icon: Icon, tagline, body }) => (
                <Card key={title} className="myth-card group p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-black text-gold transition-transform group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-gold">{tagline}</p>
                  <h3 className="mt-2 text-3xl font-black text-deep-black">{title}</h3>
                  <p className="mt-4 text-gray-700">{body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={setSectionRef("projects")}
          className={`section-fade bg-deep-black py-20 md:py-28 ${isVisible("projects") ? "is-visible" : ""}`}
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Flagship systems</p>
              <h2 className="section-title text-cream">Worlds, tools and engines.</h2>
              <p className="text-xl leading-relaxed text-cream/70">
                The old bio repo content is now merged into this scaffold as living project sections.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {flagshipCards.map(({ title, eyebrow, icon: Icon, body, bullets }) => (
                <Card key={title} className="dark-card p-7">
                  <div className="flex items-start gap-4">
                    <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
                      <h3 className="mt-1 text-3xl font-black text-cream">{title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-cream/75">{body}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-sm font-bold text-cream/85">
                        <CheckCircle2 className="h-4 w-4 text-neon-green" />
                        {bullet}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={setSectionRef("education")}
          className={`section-fade bg-cream py-20 text-deep-black md:py-28 ${isVisible("education") ? "is-visible" : ""}`}
        >
          <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">School-safe technology</p>
              <h2 className="section-title text-deep-black">The only app trying to give the child’s attention back.</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Meta-Pet is framed as a STEAM school tool built from the ground up for lessons,
                creativity, digital responsibility, focus and calm learning — without logins,
                setup burden, unnecessary administration or exploitative engagement loops.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-gray-800">
                The Teacher’s Secret Cheatsheet and behaviour support planning strand gives
                educators practical language around behavioural challenges, legal meaning,
                duties of care and early-years resilience without adding more work to their day.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [ShieldCheck, "Zero-data promise", "No external child-data pool to sell, buy, leak, exploit or steal."],
                [BookOpen, "Built-in lessons", "Designed for teacher-led activities without accounts or admin tech overhead."],
                [Code2, "Offline-first", "Private information stays local because the tool does not need the cloud to teach."],
                [BrainCircuit, "Healthy behaviour", "Focused on attention, agency, curiosity, resilience and pattern learning."],
              ].map(([Icon, title, body]) => {
                const TypedIcon = Icon as typeof ShieldCheck;
                return (
                  <Card key={title as string} className="myth-card p-6">
                    <TypedIcon className="mb-4 h-7 w-7 text-gold" />
                    <h3 className="text-xl font-black text-deep-black">{title as string}</h3>
                    <p className="mt-2 text-gray-700">{body as string}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="music"
          ref={setSectionRef("music")}
          className={`section-fade bg-deep-blue py-20 md:py-28 ${isVisible("music") ? "is-visible" : ""}`}
        >
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-kicker">Black Wing Crew / Neon Venom</p>
              <h2 className="section-title text-cream">Dark chant. Omen hooks. Crew rhythm.</h2>
              <p className="text-xl leading-relaxed text-cream/75">
                Black Wing Crew is the sound wing of B$S: black birds, black butterflies,
                recursive hooks, row/oars chants, taiko pulse, lyric sheets, poster systems,
                QR-ready campaigns and bilingual learning materials.
              </p>
              <div className="mt-8 rounded-3xl border border-gold/25 bg-black/25 p-6">
                <Volume2 className="mb-4 h-8 w-8 text-gold" />
                <p className="font-serif text-2xl leading-snug text-cream md:text-3xl">
                  “Black birds dream black butterflies. The sign dreams the seer.
                  The seer dreams the sign. Horror wears the shape of a circle with one side.”
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {["Dark pop-metal chant", "Rowing call-and-response", "Taiko rhythm sheets", "Frankston ↔ Susono learning", "QR posters and lyric cards"].map((item) => (
                <div key={item} className="strand-card">
                  <Feather className="h-5 w-5 text-gold" />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="visuals"
          ref={setSectionRef("visuals")}
          className={`section-fade bg-deep-black py-20 md:py-28 ${isVisible("visuals") ? "is-visible" : ""}`}
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Image system</p>
              <h2 className="section-title text-cream">Generated B$S image assets built into the scaffold.</h2>
              <p className="text-xl leading-relaxed text-cream/70">
                The scaffold now has local vector images for the studio mark, Auralia, Meta-Pet, Moss 60,
                Black Wing Crew, Teacher Tools and The Grammarian’s Coup — no external image hosting needed.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {imageAssets.map(({ title, src, alt, body }) => (
                <Card key={src} className="image-card group overflow-hidden p-0">
                  <div className="asset-frame">
                    <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-cream">{title}</h3>
                    <p className="mt-2 text-cream/68">{body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={setSectionRef("skills")}
          className={`section-fade bg-cream py-20 text-deep-black md:py-28 ${isVisible("skills") ? "is-visible" : ""}`}
        >
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-kicker">Skill map</p>
              <h2 className="section-title text-deep-black">A handy man, a pattern worker, a studio creature.</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Practical hands-on making meets geometry, language, behaviour, music and digital development.
                Not one tidy box — a working system of useful obsessions.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span key={skill} className="pill text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={setSectionRef("contact")}
          className={`section-fade bg-deep-black py-20 md:py-28 ${isVisible("contact") ? "is-visible" : ""}`}
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Contact / links</p>
              <h2 className="section-title text-cream">Patterns → worlds → creatures → stories → build.</h2>
              <p className="text-xl leading-relaxed text-cream/70">
                For Meta-Pet, Black Wing Crew, teacher resources, posters, cultural learning tools,
                app scaffolds or B$S creative builds.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a className="btn-cta" href="mailto:bluesssnakestudio@gmail.com">
                  <Mail className="h-5 w-5" /> bluesssnakestudio@gmail.com
                </a>
                <a className="btn-ghost" href="mailto:blkck2@gmail.com">
                  <Mail className="h-5 w-5" /> blkck2@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {links.map(([label, href, desc]) => (
                <a key={href} className="link-card" href={href} target="_blank" rel="noreferrer">
                  <strong>{label}</strong>
                  <span>{desc}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
