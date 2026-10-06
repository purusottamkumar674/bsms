"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Stethoscope,
  Building2,
  Microscope,
  Mouse,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=90",

    eyebrow: "Medical Education • Clinical Learning",

    title: "Learn with purpose. Care with confidence.",

    copy:
      "A modern academic experience designed around medical learning, practical exposure, student support and a vibrant campus life.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2000&q=90",

    eyebrow: "Campus • Hospital • Laboratories",

    title: "Where academics meet real-world healthcare.",

    copy:
      "Explore a complete medical education environment with classrooms, laboratories, library resources and clinical learning spaces.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=90",

    eyebrow: "Student Life • Growth • Community",

    title: "Build knowledge, character and a career that matters.",

    copy:
      "Discover programs, faculty, student activities and the facilities that shape a confident healthcare professional.",
  },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Medical Education",
    copy: "Student-focused learning",
  },
  {
    icon: Stethoscope,
    title: "Clinical Exposure",
    copy: "Practical experience",
  },
  {
    icon: Microscope,
    title: "Modern Labs",
    copy: "Learning facilities",
  },
];

export default function HomeHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  function nextSlide() {
    setActive((current) => (current + 1) % slides.length);
  }

  function previousSlide() {
    setActive(
      (current) =>
        (current - 1 + slides.length) % slides.length
    );
  }

  const slide = slides[active];

  return (
    <section
      className="
        relative min-h-[680px] overflow-hidden
        bg-[#063B72]
        lg:min-h-[760px]
      "
    >
      {/* ================= BACKGROUND IMAGES ================= */}

      <div className="absolute inset-0">
        {slides.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt="Baidyanath College of Medical Science"
            className={`
              absolute inset-0 h-full w-full
              object-cover object-center
              transition-all duration-[1400ms] ease-out
              ${
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              }
            `}
          />
        ))}
      </div>

      {/* ================= OVERLAYS ================= */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#032B55]/[0.98]
          via-[#063B72]/90
          to-[#0B63CE]/25
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#032B55]/70
          via-transparent
          to-[#032B55]/20
        "
      />

      {/* Grid Pattern */}
      <div className="hero-grid absolute inset-0 opacity-30" />

      {/* Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px]" />

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          container-site relative z-10
          flex min-h-[680px] items-center
          pb-40 pt-20
          lg:min-h-[760px]
          lg:pb-44
        "
      >
        <div
          key={active}
          className="max-w-[880px] animate-fadeUp"
        >
          {/* Eyebrow */}

          <div
            className="
              mb-6 inline-flex items-center gap-3
              rounded-full border border-white/20
              bg-white/10 px-4 py-2
              text-[10px] font-black uppercase
              tracking-[0.18em] text-blue-50
              shadow-lg backdrop-blur-md
              sm:text-xs
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            {slide.eyebrow}
          </div>

          {/* Small Label */}

          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
            <Building2 size={15} />

            Baidyanath College of Medical Science
          </div>

          {/* Heading */}

          <h1
            className="
              max-w-5xl text-balance
              text-[42px] font-black
              leading-[1.03] tracking-[-0.04em]
              text-white
              sm:text-6xl
              lg:text-[76px]
            "
          >
            {slide.title}
          </h1>

          {/* Description */}

          <p
            className="
              mt-7 max-w-2xl
              text-sm leading-7 text-blue-50/90
              sm:text-base sm:leading-8
              md:text-lg
            "
          >
            {slide.copy}
          </p>

          {/* CTA */}

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/online-application"
              className="
                group inline-flex items-center gap-2
                rounded-2xl bg-red-600
                px-6 py-3.5
                text-sm font-black text-white
                shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-red-500
                hover:shadow-xl
              "
            >
              <GraduationCap size={18} />

              Apply Now

              <ArrowRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/courses"
              className="
                group inline-flex items-center gap-3
                rounded-2xl border border-white/25
                bg-white/10 px-6 py-3.5
                text-sm font-bold text-white
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white/20
              "
            >
              <span
                className="
                  grid h-7 w-7 place-items-center
                  rounded-full bg-white text-blue-700
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <Play
                  size={12}
                  fill="currentColor"
                />
              </span>

              Explore Courses
            </Link>
          </div>
        </div>
      </div>

      {/* ================= FEATURE GLASS CARDS ================= */}

      <div
        className="
          absolute bottom-[74px] left-0 right-0
          z-20 hidden
          lg:block
        "
      >
        <div className="container-site">
          <div
            className="
              grid max-w-[760px]
              grid-cols-3 overflow-hidden
              rounded-[22px]
              border border-white/15
              bg-white/10
              shadow-2xl backdrop-blur-xl
            "
          >
            {highlights.map(
              ({ icon: Icon, title, copy }, index) => (
                <div
                  key={title}
                  className={`
                    group flex items-center gap-3
                    px-5 py-4
                    transition-all duration-300
                    hover:bg-white/10
                    ${
                      index !== highlights.length - 1
                        ? "border-r border-white/10"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      grid h-11 w-11 shrink-0
                      place-items-center rounded-xl
                      bg-white/10 text-blue-200
                      transition-all duration-300
                      group-hover:bg-white
                      group-hover:text-blue-700
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-white">
                      {title}
                    </p>

                    <p className="mt-1 text-[10px] text-blue-100">
                      {copy}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* ================= SLIDE NAVIGATION ================= */}

      <div
        className="
          absolute bottom-6 right-5
          z-30 flex items-center gap-2
          sm:right-8
          lg:bottom-8
        "
      >
        <button
          type="button"
          aria-label="Previous slide"
          onClick={previousSlide}
          className="
            group grid h-11 w-11
            place-items-center rounded-full
            border border-white/20
            bg-white/10 text-white
            backdrop-blur-md
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white
            hover:text-navy
          "
        >
          <ChevronLeft
            size={19}
            className="transition-transform group-hover:-translate-x-0.5"
          />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
          className="
            group grid h-11 w-11
            place-items-center rounded-full
            border border-white/20
            bg-white/10 text-white
            backdrop-blur-md
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white
            hover:text-navy
          "
        >
          <ChevronRight
            size={19}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* ================= SLIDE INDICATORS ================= */}

      <div
        className="
          absolute bottom-7 left-5
          z-30
          sm:left-8
          lg:bottom-9
        "
      >
        <div className="flex items-center gap-4">
          {/* Slide Counter */}

          <div className="hidden items-center gap-1 text-xs font-bold text-white sm:flex">
            <span className="text-base">
              0{active + 1}
            </span>

            <span className="text-white/40">
              /
            </span>

            <span className="text-white/50">
              0{slides.length}
            </span>
          </div>

          {/* Dots */}

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`
                  relative h-1.5 overflow-hidden
                  rounded-full
                  transition-all duration-500
                  ${
                    active === index
                      ? "w-12 bg-white"
                      : "w-5 bg-white/35 hover:bg-white/60"
                  }
                `}
              >
                {active === index && (
                  <span className="absolute inset-0 origin-left animate-pulse bg-red-500/60" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div
        className="
          absolute bottom-7 left-1/2
          z-20 hidden
          -translate-x-1/2
          flex-col items-center
          gap-1 text-white/60
          xl:flex
        "
      >
        <Mouse
          size={17}
          className="animate-bounce"
        />

        <span className="text-[8px] font-bold uppercase tracking-[0.2em]">
          Scroll
        </span>
      </div>

      {/* ================= SIDE NUMBER ================= */}

      <div
        className="
          pointer-events-none absolute
          right-10 top-1/2
          hidden -translate-y-1/2
          2xl:block
        "
      >
        <span className="text-[120px] font-black leading-none text-white/[0.045]">
          0{active + 1}
        </span>
      </div>
    </section>
  );
}
