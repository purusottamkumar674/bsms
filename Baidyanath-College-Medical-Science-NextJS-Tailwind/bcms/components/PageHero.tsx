
import Link from "next/link";

import {
  ChevronRight,
  Home,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function PageHero({
  title,
  subtitle,
  image =
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=85",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#063B72]">
      {/* Background Image */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="
          absolute inset-0 -z-30
          h-full w-full
          scale-[1.04]
          object-cover object-center
          opacity-45
        "
      />

      {/* Main Dark Overlay */}
      <div
        className="
          absolute inset-0 -z-20
          bg-gradient-to-r
          from-[#032B55]/[0.99]
          via-[#063B72]/95
          to-[#0B63CE]/45
        "
      />

      {/* Bottom Overlay */}
      <div
        className="
          absolute inset-0 -z-20
          bg-gradient-to-t
          from-[#032B55]/75
          via-transparent
          to-transparent
        "
      />

      {/* Grid Pattern */}
      <div className="hero-grid absolute inset-0 -z-10 opacity-25" />

      {/* Decorative Glow */}
      <div
        className="
          pointer-events-none
          absolute -left-28 top-1/2
          -z-10 h-[330px] w-[330px]
          -translate-y-1/2
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-28 -top-28
          -z-10 h-[360px] w-[360px]
          rounded-full
          bg-red-500/10
          blur-[120px]
        "
      />

      {/* Large Medical Decorative Icon */}
      <Stethoscope
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-24 right-[5%]
          -z-10 hidden
          h-[360px] w-[360px]
          rotate-[-14deg]
          text-white/[0.035]
          lg:block
        "
      />

      {/* Content */}
      <div
        className="
          container-site relative
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div className="max-w-5xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="
              mb-6 inline-flex
              max-w-full flex-wrap
              items-center gap-2
              rounded-full
              border border-white/15
              bg-white/10
              px-4 py-2
              text-[11px]
              font-semibold
              text-blue-100
              shadow-lg
              backdrop-blur-md
            "
          >
            <Link
              href="/"
              className="
                group flex items-center gap-1.5
                transition-all duration-300
                hover:text-white
              "
            >
              <Home
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              Home
            </Link>

            <ChevronRight
              size={12}
              className="text-blue-300"
            />

            <span
              className="
                max-w-[220px]
                truncate
                font-bold
                text-white
                sm:max-w-none
              "
            >
              {title}
            </span>
          </nav>

          {/* College Label */}
          <div
            className="
              mb-5
              flex items-center gap-2
              text-[10px]
              font-black uppercase
              tracking-[0.2em]
              text-blue-200
            "
          >
            <span
              className="
                grid h-8 w-8
                place-items-center
                rounded-xl
                border border-white/10
                bg-white/10
                backdrop-blur-md
              "
            >
              <GraduationCap size={15} />
            </span>

            Baidyanath College of Medical Science
          </div>

          {/* Page Heading */}
          <h1
            className="
              max-w-5xl
              text-balance
              text-4xl
              font-black
              leading-[1.04]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-[64px]
            "
          >
            {title}
          </h1>

          {/* Accent Lines */}
          <div className="mt-6 flex items-center gap-2">
            <span className="h-[3px] w-14 rounded-full bg-red-500" />
            <span className="h-[3px] w-7 rounded-full bg-blue-300/60" />
            <span className="h-[3px] w-3 rounded-full bg-white/30" />
          </div>

          {/* Subtitle */}
          <p
            className="
              mt-6
              max-w-3xl
              text-sm
              leading-7
              text-blue-50/90
              sm:text-base
              sm:leading-8
              md:text-[17px]
            "
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Label */}
      <div
        className="
          pointer-events-none
          absolute bottom-8 right-8
          hidden items-center gap-3
          xl:flex
        "
      >
        <span className="h-px w-10 bg-white/30" />

        <span
          className="
            text-[9px]
            font-bold uppercase
            tracking-[0.25em]
            text-white/50
          "
        >
          Medical Education
        </span>
      </div>

      {/* Bottom Border Glow */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-red-500/60
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-20
          bg-gradient-to-t
          from-[#032B55]/30
          to-transparent
        "
      />
    </section>
  );
}
