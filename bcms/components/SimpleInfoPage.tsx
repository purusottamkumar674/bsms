import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

import Link from "next/link";

import {
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Phone,
  Sparkles,
} from "lucide-react";

type InfoSection = {
  title: string;
  copy: string;
  points?: string[];
  image?: string;
};

type SimpleInfoPageProps = {
  title: string;
  subtitle: string;
  image?: string;
  intro: string;
  sections: InfoSection[];
  cta?: boolean;
};

export default function SimpleInfoPage({
  title,
  subtitle,
  image,
  intro,
  sections,
  cta = true,
}: SimpleInfoPageProps) {
  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <PageHero
        title={title}
        subtitle={subtitle}
        image={image}
      />

      {/* ================= CONTENT ================= */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-40 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[120px]" />

        <div className="container-site relative">
          {/* Heading */}
          <SectionHeading
            kicker="Baidyanath College of Medical Science"
            title={title}
            copy={intro}
          />

          {/* ================= SECTIONS ================= */}
          <div className="mt-12 space-y-8 md:space-y-10">
            {sections.map((section, index) => {
              const hasImage = Boolean(section.image);
              const reverse = index % 2 === 1;

              return (
                <article
                  key={section.title}
                  className="
                    group relative overflow-hidden
                    rounded-[28px]
                    border border-slate-200/80
                    bg-white
                    shadow-[0_15px_50px_rgba(6,59,114,0.06)]
                    transition-all duration-500
                    hover:border-blue-200
                    hover:shadow-[0_28px_70px_rgba(6,59,114,0.10)]
                  "
                >
                  {/* Top Accent */}
                  <div
                    className="
                      absolute left-0 top-0
                      h-[3px] w-0
                      bg-gradient-to-r
                      from-blue-700 via-red-500 to-blue-600
                      transition-all duration-700
                      group-hover:w-full
                    "
                  />

                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-20 -top-20
                      h-52 w-52 rounded-full
                      bg-blue-100/0 blur-3xl
                      transition-all duration-500
                      group-hover:bg-blue-100/70
                    "
                  />

                  <div
                    className={`
                      relative grid items-center
                      ${hasImage ? "lg:grid-cols-2" : ""}
                    `}
                  >
                    {/* ================= CONTENT SIDE ================= */}
                    <div
                      className={`
                        p-6 sm:p-8 md:p-10 lg:p-12
                        ${
                          hasImage && reverse
                            ? "lg:order-2"
                            : ""
                        }
                      `}
                    >
                      {/* Section Number */}
                      <div className="mb-5 flex items-center gap-3">
                        <span
                          className="
                            grid h-10 w-10
                            place-items-center
                            rounded-xl
                            bg-blue-50
                            text-xs font-black
                            text-blue-700
                            transition-all duration-500
                            group-hover:bg-blue-700
                            group-hover:text-white
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600">
                            College Information
                          </p>

                          <div className="mt-1 h-[2px] w-8 rounded-full bg-red-500" />
                        </div>
                      </div>

                      {/* Title */}
                      <h2
                        className="
                          max-w-xl
                          text-2xl font-black
                          leading-tight text-navy
                          transition-colors duration-300
                          group-hover:text-blue-700
                          sm:text-3xl
                        "
                      >
                        {section.title}
                      </h2>

                      {/* Copy */}
                      <p
                        className="
                          mt-4 max-w-2xl
                          text-sm leading-7
                          text-slate-600
                          sm:text-base sm:leading-8
                        "
                      >
                        {section.copy}
                      </p>

                      {/* Points */}
                      {section.points && section.points.length > 0 && (
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {section.points.map((point) => (
                            <div
                              key={point}
                              className="
                                group/item flex
                                items-start gap-3
                                rounded-2xl
                                border border-slate-100
                                bg-slate-50/80
                                p-4
                                text-sm font-semibold
                                leading-6 text-slate-700
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:border-blue-100
                                hover:bg-blue-50
                                hover:shadow-md
                              "
                            >
                              <span
                                className="
                                  mt-0.5 grid h-7 w-7
                                  shrink-0 place-items-center
                                  rounded-lg
                                  bg-white text-blue-600
                                  shadow-sm
                                  transition-all duration-300
                                  group-hover/item:bg-blue-700
                                  group-hover/item:text-white
                                "
                              >
                                <CheckCircle2 size={15} />
                              </span>

                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* ================= IMAGE SIDE ================= */}
                    {section.image && (
                      <div
                        className={`
                          relative min-h-[300px]
                          overflow-hidden
                          sm:min-h-[360px]
                          lg:h-full lg:min-h-[430px]
                          ${
                            reverse
                              ? "lg:order-1"
                              : ""
                          }
                        `}
                      >
                        <img
                          src={section.image}
                          alt={section.title}
                          className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            transition-transform
                            duration-1000 ease-out
                            group-hover:scale-105
                          "
                        />

                        {/* Overlay */}
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-[#032B55]/55
                            via-transparent
                            to-transparent
                          "
                        />

                        {/* Medical Badge */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <div
                            className="
                              inline-flex items-center
                              gap-2 rounded-2xl
                              border border-white/20
                              bg-[#032B55]/55
                              px-4 py-3
                              text-xs font-bold
                              text-white
                              shadow-xl
                              backdrop-blur-md
                            "
                          >
                            <GraduationCap
                              size={17}
                              className="text-red-500"
                            />

                            Baidyanath College of Medical Science
                          </div>
                        </div>

                        {/* Corner Decoration */}
                        <div
                          className="
                            absolute right-5 top-5
                            grid h-11 w-11
                            place-items-center
                            rounded-2xl
                            border border-white/20
                            bg-white/10
                            text-white
                            backdrop-blur-md
                          "
                        >
                          <Sparkles size={18} />
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      {cta && (
        <section className="pb-20 md:pb-24">
          <div className="container-site">
            <div
              className="
                group relative overflow-hidden
                rounded-[32px]
                bg-gradient-to-br
                from-[#032B55]
                via-blue-800
                to-blue-600
                p-7 text-white
                shadow-[0_25px_70px_rgba(6,59,114,0.22)]
                sm:p-9
                md:p-12
              "
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/15 blur-[80px]" />

              <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-blue-300/10 blur-[90px]" />

              {/* Large icon */}
              <GraduationCap
                className="
                  pointer-events-none
                  absolute -bottom-16 right-[8%]
                  hidden h-60 w-60
                  rotate-[-10deg]
                  text-white/[0.04]
                  lg:block
                "
              />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* CTA Copy */}
                <div className="max-w-2xl">
                  <div
                    className="
                      mb-4 inline-flex
                      items-center gap-2
                      rounded-full
                      border border-white/15
                      bg-white/10
                      px-3 py-1.5
                      text-[10px]
                      font-black uppercase
                      tracking-[0.18em]
                      text-blue-100
                      backdrop-blur
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-red-500" />

                    Admission Support
                  </div>

                  <h2
                    className="
                      text-2xl font-black
                      leading-tight
                      sm:text-3xl
                      md:text-4xl
                    "
                  >
                    Want to know more about the college?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                    Explore admission information, available programs,
                    facilities and contact the college enquiry desk for
                    further assistance.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex shrink-0 flex-wrap gap-3">
                  <Link
                    href="/admissions"
                    className="
                      group/button inline-flex
                      items-center gap-2
                      rounded-2xl
                      bg-white
                      px-5 py-3.5
                      text-sm font-black
                      text-navy
                      shadow-xl
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-blue-50
                    "
                  >
                    <GraduationCap size={17} />

                    Admissions

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="
                      group/button inline-flex
                      items-center gap-2
                      rounded-2xl
                      border border-white/25
                      bg-white/10
                      px-5 py-3.5
                      text-sm font-bold
                      text-white
                      backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-white/20
                    "
                  >
                    <Phone size={16} />

                    Contact Us

                    <ArrowRight
                      size={15}
                      className="
                        transition-transform duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}