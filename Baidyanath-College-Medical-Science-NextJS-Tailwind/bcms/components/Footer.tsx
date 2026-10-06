import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Clock3,
  HeartPulse,
  FileText,
  ExternalLink,
} from "lucide-react";

import { siteConfig } from "@/config/site";

const groups = [
  {
    title: "Quick Links",
    links: [
      ["About College", "/about"],
      ["Courses", "/courses"],
      ["Departments", "/departments"],
      ["Faculty", "/faculty"],
      ["Facilities", "/facilities"],
    ],
  },
  {
    title: "Admissions",
    links: [
      ["Admission Overview", "/admissions"],
      ["Apply Online", "/online-application"],
      ["Eligibility & Fees", "/eligibility-fees"],
      ["Scholarships", "/scholarships"],
      ["Academic Calendar", "/academic-calendar"],
    ],
  },
  {
    title: "Student Corner",
    links: [
      ["Student Life", "/student-life"],
      ["Library", "/library"],
      ["Laboratories", "/laboratories"],
      ["Hostel", "/hostel"],
      ["Notices", "/notices"],
    ],
  },
];

const socials = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
];

export default function Footer() {
  const whatsappNumber =
    siteConfig.admissionPhone?.replace(/\D/g, "") || "";

  return (
    <footer className="relative mt-20 overflow-hidden bg-[#032B55] text-white">

      {/* =========================================
          TOP RED ACCENT
      ========================================= */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#032B55] via-red-500 to-[#032B55]" />

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />

        <HeartPulse
          className="
            absolute right-[3%] top-[35%]
            hidden h-[340px] w-[340px]
            text-white/[0.025]
            lg:block
          "
        />
      </div>

      {/* =========================================
          ADMISSION CTA
          NO NEGATIVE TRANSLATE
      ========================================= */}
      <div className="container-site relative z-10 pt-10 md:pt-12">
        <div
          className="
            relative overflow-hidden
            rounded-[28px]
            border border-white/15
            bg-gradient-to-r
            from-[#074987]
            via-[#0863c4]
            to-[#ff202b]
            px-6 py-7
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            md:px-9 md:py-8
            lg:px-10
          "
        >
          {/* CTA Glow */}
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />

          <div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-red-300/10 blur-[80px]" />

          <div
            className="
              relative flex flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* CTA Content */}
            <div className="flex items-start gap-4">
              <div
                className="
                  hidden h-14 w-14 shrink-0
                  place-items-center
                  rounded-2xl
                  border border-white/20
                  bg-white/15
                  backdrop-blur-md
                  md:grid
                "
              >
                <GraduationCap size={27} />
              </div>

              <div>
                <p
                  className="
                    mb-1 text-[10px]
                    font-black uppercase
                    tracking-[0.2em]
                    text-white/80
                  "
                >
                  Admissions Open
                </p>

                <h2 className="text-2xl font-black leading-tight md:text-3xl">
                  Start Your Journey in Medical Education
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
                  Explore courses, admission information and campus facilities
                  at Baidyanath College of Medical Science.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/online-application"
                className="
                  group inline-flex items-center gap-2
                  rounded-xl
                  bg-[#ff1717]
                  px-5 py-3
                  text-sm font-black text-white
                  shadow-lg shadow-red-950/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#ed1010]
                  hover:shadow-xl
                "
              >
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
                href="/admissions"
                className="
                  inline-flex items-center gap-2
                  rounded-xl
                  border border-white/30
                  bg-white/10
                  px-5 py-3
                  text-sm font-bold text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#032B55]
                "
              >
                Admission Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className="container-site relative z-10 py-14 md:py-16">
        <div
          className="
            grid gap-x-8 gap-y-12
            md:grid-cols-2
            lg:grid-cols-6
          "
        >
          {/* =====================================
              BRAND
          ===================================== */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="
                inline-flex
                rounded-2xl
                bg-white
                p-3
                shadow-xl
                shadow-black/10
                transition-transform duration-300
                hover:-translate-y-1
              "
            >
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={390}
                height={80}
                className="
                  h-auto
                  w-[280px]
                  object-contain
                  sm:w-[330px]
                "
              />
            </Link>

            <p
              className="
                mt-6 max-w-md
                text-sm leading-7
                text-slate-300
              "
            >
              A modern medical education institution focused on quality
              learning, clinical exposure, professional development and a
              student-focused campus experience.
            </p>

            {/* Contacts */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="
                  group flex items-center gap-3
                  text-sm text-slate-300
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    grid h-10 w-10
                    place-items-center
                    rounded-xl
                    border border-white/10
                    bg-white/10
                    transition-all duration-300
                    group-hover:bg-red-500
                  "
                >
                  <Phone size={15} />
                </span>

                {siteConfig.phone}
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="
                  group flex items-center gap-3
                  text-sm text-slate-300
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    grid h-10 w-10
                    place-items-center
                    rounded-xl
                    border border-white/10
                    bg-white/10
                    transition-all duration-300
                    group-hover:bg-red-500
                  "
                >
                  <Mail size={15} />
                </span>

                <span className="break-all">
                  {siteConfig.email}
                </span>
              </a>
            </div>

            {/* Social */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="
                    group grid h-10 w-10
                    place-items-center
                    rounded-xl
                    border border-white/10
                    bg-white/[0.06]
                    text-slate-300
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-red-400/50
                    hover:bg-red-500
                    hover:text-white
                    hover:shadow-lg
                  "
                >
                  <Icon
                    size={17}
                    className="
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  />
                </a>
              ))}
            </div>
          </div>

          {/* =====================================
              LINKS
          ===================================== */}
          {groups.map((group) => (
            <div key={group.title}>
              <h3
                className="
                  relative mb-7
                  text-sm font-black
                  uppercase tracking-[0.08em]
                  text-white
                "
              >
                {group.title}

                <span className="absolute -bottom-3 left-0 h-[2px] w-9 rounded-full bg-red-500" />
              </h3>

              <div className="space-y-3">
                {group.links.map(([title, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="
                      group flex items-center
                      gap-2 text-sm
                      text-slate-300
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                  >
                    <ChevronRight
                      size={13}
                      className="
                        shrink-0 text-red-500
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                      "
                    />

                    {title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* =====================================
              VISIT CAMPUS
          ===================================== */}
          <div>
            <h3
              className="
                relative mb-7
                text-sm font-black
                uppercase tracking-[0.08em]
                text-white
              "
            >
              Visit Campus

              <span className="absolute -bottom-3 left-0 h-[2px] w-9 rounded-full bg-red-500" />
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <span
                  className="
                    grid h-9 w-9
                    shrink-0 place-items-center
                    rounded-xl
                    bg-red-500/10
                    text-red-400
                  "
                >
                  <MapPin size={17} />
                </span>

                <div>
                  <p className="text-xs font-bold text-white">
                    College Address
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-3">
                <span
                  className="
                    grid h-9 w-9
                    shrink-0 place-items-center
                    rounded-xl
                    bg-red-500/10
                    text-red-400
                  "
                >
                  <Clock3 size={17} />
                </span>

                <div>
                  <p className="text-xs font-bold text-white">
                    Office Hours
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Monday – Saturday
                    <br />
                    09:00 AM – 05:00 PM
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center
                  justify-between
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]
                  p-4
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-green-400/40
                  hover:bg-green-500/10
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      grid h-10 w-10
                      place-items-center
                      rounded-xl
                      bg-[#25D366]
                      text-white
                      shadow-lg
                      shadow-green-950/20
                    "
                  >
                    <MessageCircle size={18} />
                  </span>

                  <div>
                    <p className="text-[10px] text-slate-400">
                      Admission Help
                    </p>

                    <p className="text-sm font-black text-white">
                      WhatsApp Us
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          IMPORTANT LINKS
      ========================================= */}
      <div className="relative z-10 border-y border-white/10 bg-[#02264a]">
        <div
          className="
            container-site flex
            flex-col gap-5 py-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/mandatory-disclosure"
              className="
                group flex items-center gap-1.5
                text-xs font-semibold
                text-slate-300
                transition hover:text-white
              "
            >
              <FileText size={13} className="text-red-400" />
              Mandatory Disclosure
            </Link>

            <Link
              href="/notices"
              className="
                group flex items-center gap-1.5
                text-xs font-semibold
                text-slate-300
                transition hover:text-white
              "
            >
              <FileText size={13} className="text-red-400" />
              Notices & Circulars
            </Link>

            <Link
              href="/contact"
              className="
                group flex items-center gap-1.5
                text-xs font-semibold
                text-slate-300
                transition hover:text-white
              "
            >
              <ExternalLink size={13} className="text-red-400" />
              Contact
            </Link>

            <Link
              href="/photo-gallery"
              className="
                group flex items-center gap-1.5
                text-xs font-semibold
                text-slate-300
                transition hover:text-white
              "
            >
              <ExternalLink size={13} className="text-red-400" />
              Gallery
            </Link>
          </div>

          <div
            className="
              flex items-center gap-2
              text-[11px] font-bold
              uppercase tracking-[0.12em]
              text-white/70
            "
          >
            <GraduationCap size={14} className="text-red-400" />

            Excellence in Medical Education
          </div>
        </div>
      </div>

      {/* =========================================
          COPYRIGHT
      ========================================= */}
      <div className="relative z-10 bg-[#021d39]">
        <div
          className="
            container-site flex
            flex-col gap-4 py-5
            text-[11px]
            text-slate-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2026{" "}
            <span className="font-semibold text-slate-200">
              Baidyanath College of Medical Science
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}