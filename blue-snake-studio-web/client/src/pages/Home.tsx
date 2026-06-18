import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Music, Palette, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Blue $nake Studio Landing Page
 * Design: Mythic Pattern Systems
 * Color Palette: Deep Black + Gold (mythic), Deep Blue (digital), Cream (canvas), Neon Green (energy)
 * Typography: Playfair Display (headings), Inter (body), IBM Plex Mono (labels)
 * Layout: Asymmetric composition with diagonal cuts, offset grid for three doors
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-cream text-deep-black">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030842943/6TTnbNVGdg5porzSnoczn7/logo-mark-29di59kYAfAKYMnKFBepJT.webp"
              alt="Blue $nake Studio"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-deep-black">
              Blue <span className="text-gold">$</span>nake Studio
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#art" className="hover:text-gold transition-colors">
              Art
            </a>
            <a href="#music" className="hover:text-gold transition-colors">
              Music
            </a>
            <a href="#apps" className="hover:text-gold transition-colors">
              Apps
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663030842943/6TTnbNVGdg5porzSnoczn7/hero-pattern-abstract-mqvur7HChxtsS98q4TvS3M.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-deep-black/50"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <h1 className="text-6xl md:text-7xl font-bold text-cream leading-tight tracking-tight">
                Blue <span className="text-gold drop-shadow-lg">$</span>nake
              </h1>
              <h1 className="text-6xl md:text-7xl font-bold text-cream leading-tight tracking-tight">
                Studio
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-cream/95 font-light leading-relaxed max-w-2xl mx-auto">
              builds art, music and apps from the same source:
              <span className="block text-gold font-bold mt-3 text-3xl md:text-4xl">pattern</span>
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cta text-lg px-8 py-4">
                Explore the Pattern <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-cream" style={{
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
        }}></div>
      </section>

      {/* Opening Statement */}
      <section
        id="opening"
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionRefs.current["opening"] = el;
        }}
        className={`py-24 md:py-32 bg-cream transition-opacity duration-1000 ${
          isVisible("opening") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-deep-black leading-tight">
            The B<span className="text-gold">$</span>S World
          </h2>
          <div className="border-l-4 border-gold pl-8 text-left space-y-4">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              Blue $nake Studio is not one project. It is a connected creative
              system.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><span className="text-gold font-semibold">Meta-Pet</span> teaches.</li>
              <li><span className="text-gold font-semibold">Moss 60</span> gives it structure.</li>
              <li><span className="text-gold font-semibold">Auralia</span> gives it myth.</li>
              <li><span className="text-gold font-semibold">Black Wing Crew</span> gives it sound.</li>
              <li><span className="text-gold font-semibold">The Teacher's Cheatsheet</span> gives it classroom use.</li>
              <li><span className="text-gold font-semibold">The Memetic Lexicon</span> gives it language.</li>
            </ul>
            <p className="text-lg text-gray-800 font-semibold pt-4">
              Together, they form a living studio world built from patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Three Doors: Art, Music, Apps */}
      <section
        id="doors"
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionRefs.current["doors"] = el;
        }}
        className={`py-20 md:py-32 bg-cream transition-opacity duration-1000 ${
          isVisible("doors") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-deep-black">
            Three Big Doors
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 md:mt-8">
            {/* Art Door */}
            <div
              className="stagger-child"
              style={{
                animation: isVisible("doors")
                  ? "fadeInUp 0.6s ease-out 0.1s both"
                  : "none",
              }}
            >
              <div
                className="card-mythic h-full flex flex-col relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663030842943/6TTnbNVGdg5porzSnoczn7/art-section-texture-cNXppn7pdgMPi6nHd3GCKc.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-cream/92 rounded-lg"></div>
                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <Palette className="h-8 w-8 text-gold flex-shrink-0" />
                    <h3 className="text-3xl font-bold text-deep-black">Art</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed flex-grow">
                    Mythic visual systems, posters, paintings, logos, stickers,
                    colouring sheets and symbolic brand worlds.
                  </p>
                  <button className="btn-cta text-sm w-full">
                    Enter the Studio
                  </button>
                </div>
              </div>
            </div>

            {/* Music Door */}
            <div
              className="stagger-child"
              style={{
                animation: isVisible("doors")
                  ? "fadeInUp 0.6s ease-out 0.15s both"
                  : "none",
              }}
            >
              <div
                className="card-mythic h-full flex flex-col relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663030842943/6TTnbNVGdg5porzSnoczn7/music-section-energy-GN74uVmYL3CibEuvL8vvcS.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-cream/92 rounded-lg"></div>
                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <Music className="h-8 w-8 text-gold flex-shrink-0" />
                    <h3 className="text-3xl font-bold text-deep-black">Music</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed flex-grow">
                    Black Wing Crew, Neon Venom, lyric sheets, chants, video
                    concepts, rhythmic language and memetic hooks.
                  </p>
                  <button className="btn-cta text-sm w-full">
                    Hear the Crew
                  </button>
                </div>
              </div>
            </div>

            {/* Apps Door */}
            <div
              className="stagger-child"
              style={{
                animation: isVisible("doors")
                  ? "fadeInUp 0.6s ease-out 0.2s both"
                  : "none",
              }}
            >
              <div
                className="card-mythic h-full flex flex-col relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663030842943/6TTnbNVGdg5porzSnoczn7/apps-section-digital-AZgCWUe4pZf2YooVzV6CVi.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-cream/92 rounded-lg"></div>
                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <Zap className="h-8 w-8 text-gold flex-shrink-0" />
                    <h3 className="text-3xl font-bold text-deep-black">Apps</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed flex-grow">
                    Meta-Pet, Moss 60, learning tools, teacher resources,
                    cultural web apps and privacy-first digital companions.
                  </p>
                  <button className="btn-cta text-sm w-full">
                    Explore Tools
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Connection */}
      <section
        id="connection"
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionRefs.current["connection"] = el;
        }}
        className={`py-16 md:py-24 bg-deep-blue text-cream transition-opacity duration-1000 ${
          isVisible("connection") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">The Connection</h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              <span className="text-gold font-semibold">The art</span> gives it a
              face.
            </p>
            <p>
              <span className="text-gold font-semibold">The music</span> gives it
              a voice.
            </p>
            <p>
              <span className="text-gold font-semibold">The apps</span> give it a
              body.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is The Moss Man */}
      <section
        id="about"
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionRefs.current["about"] = el;
        }}
        className={`py-20 md:py-32 bg-cream transition-opacity duration-1000 ${
          isVisible("about") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-deep-black">
            Who Is The Moss Man?
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              The Moss Man is the working identity of Tom Carroll — a hands-on
              creator from Frankston building strange but practical tools across
              art, maths, music, education and digital systems.
            </p>
            <p>
              I use myth, pattern, humour and visual systems to turn complicated
              ideas into things people can see, hear, use and remember.
            </p>
            <div className="pt-8 border-t-2 border-gold">
              <p className="text-center text-gold font-semibold italic">
                "Pattern is the language of meaning."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionRefs.current["projects"] = el;
        }}
        className={`py-20 md:py-32 bg-cream transition-opacity duration-1000 ${
          isVisible("projects") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-deep-black">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Meta-Pet */}
            <div
              className="stagger-child"
              style={{
                animation: isVisible("projects")
                  ? "fadeInUp 0.6s ease-out 0.1s both"
                  : "none",
              }}
            >
              <Card className="card-mythic space-y-4">
                <h3 className="text-2xl font-bold text-deep-black">Meta-Pet</h3>
                <p className="text-gray-700 font-semibold">
                  Privacy-first digital companion / STEAM learning tool
                </p>
                <p className="text-gray-600">
                  Built around a simple rule: children should not have to trade
                  privacy for learning.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gold font-semibold">✓ No ads</p>
                  <p className="text-gold font-semibold">✓ No trackers</p>
                  <p className="text-gold font-semibold">✓ Local-first</p>
                  <p className="text-gold font-semibold">✓ School friendly</p>
                </div>
                <button className="btn-cta w-full text-sm">
                  View Meta-Pet
                </button>
              </Card>
            </div>

            {/* Black Wing Crew */}
            <div
              className="stagger-child"
              style={{
                animation: isVisible("projects")
                  ? "fadeInUp 0.6s ease-out 0.15s both"
                  : "none",
              }}
            >
              <Card className="card-mythic space-y-4">
                <h3 className="text-2xl font-bold text-deep-black">
                  Black Wing Crew
                </h3>
                <p className="text-gray-700 font-semibold">
                  Music, lyric sheets, posters, mythic chant world
                </p>
                <p className="text-gray-600">
                  An active creative project exploring rhythmic language, memetic
                  hooks, and sonic identity.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Status: <span className="text-gold font-semibold">Active Creative Project</span>
                  </p>
                </div>
                <button className="btn-cta w-full text-sm">
                  Listen & Watch
                </button>
              </Card>
            </div>

            {/* Moss 60 */}
            <div
              className="stagger-child"
              style={{
                animation: isVisible("projects")
                  ? "fadeInUp 0.6s ease-out 0.2s both"
                  : "none",
              }}
            >
              <Card className="card-mythic space-y-4">
                <h3 className="text-2xl font-bold text-deep-black">Moss 60</h3>
                <p className="text-gray-700 font-semibold">
                  Visual maths, digital DNA, symbolic number system
                </p>
                <p className="text-gray-600">
                  An experimental system exploring pattern mathematics and visual
                  symbolism.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Status: <span className="text-gold font-semibold">Original Theory</span>
                  </p>
                </div>
                <button className="btn-cta w-full text-sm">
                  See the System
                </button>
              </Card>
            </div>

            {/* Teacher Resources */}
            <div
              className="stagger-child"
              style={{
                animation: isVisible("projects")
                  ? "fadeInUp 0.6s ease-out 0.25s both"
                  : "none",
              }}
            >
              <Card className="card-mythic space-y-4">
                <h3 className="text-2xl font-bold text-deep-black">
                  Teacher's Secret Cheatsheet
                </h3>
                <p className="text-gray-700 font-semibold">
                  Behaviour support and classroom resource pack
                </p>
                <p className="text-gray-600">
                  Practical education resources designed for real classroom
                  challenges.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Status: <span className="text-gold font-semibold">Practical Resource</span>
                  </p>
                </div>
                <button className="btn-cta w-full text-sm">
                  View Resource
                </button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Meta-Pet Matters */}
      <section
        id="why-metapet"
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionRefs.current["why-metapet"] = el;
        }}
        className={`py-20 md:py-32 bg-deep-blue text-cream transition-opacity duration-1000 ${
          isVisible("why-metapet") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Meta-Pet Matters
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-center text-gold font-semibold border-b-2 border-gold pb-6">
              Children should not have to trade privacy for learning.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "No ads",
                "No trackers",
                "No unnecessary logins",
                "Local-first",
                "School friendly",
                "Teacher usable",
                "Child-safe design",
                "Screen time that gives attention back",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-gold font-bold text-xl">✓</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el: HTMLDivElement | null) => {
          if (el) sectionRefs.current["contact"] = el;
        }}
        className={`py-20 md:py-32 bg-cream transition-opacity duration-1000 ${
          isVisible("contact") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black">
            Work With B<span className="text-gold">$</span>S
          </h2>
          <p className="text-lg text-gray-700">
            We collaborate on custom projects, creative systems, and education
            tools.
          </p>
          <div className="space-y-4 pt-8">
            <p className="text-gray-600">Contact for:</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                "Meta-Pet / education",
                "Music / Black Wing Crew",
                "Art / branding",
                "Collaboration",
                "School / teacher resources",
                "Frankston–Susono cultural learning",
              ].map((item, idx) => (
                <div key={idx} className="text-gray-700">
                  • {item}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 space-y-3 border-t-2 border-gold">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>
            </p>
            <p className="text-gold font-semibold">bluesssnakestudio@gmail.com</p>
            <p className="text-gold font-semibold">blkck2@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-black text-cream py-8">
        <div className="container text-center text-sm">
          <p className="mb-2">
            Blue <span className="text-gold">$</span>nake Studio — Pattern, Myth,
            and Meaning
          </p>
          <p className="text-gray-400">
            © 2026 The Moss Man. All patterns reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
