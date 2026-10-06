"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Search,
  GraduationCap,
  ArrowRight,
  Clock3,
} from "lucide-react";

import { navItems, siteConfig } from "@/config/site";

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);

  const whatsapp =
    siteConfig.admissionPhone?.replace(/\D/g, "") || "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileMenu(null);
  }, [pathname]);

  const activeLink = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="relative z-[70] bg-[#032B55] text-white">
        <div className="container-site flex min-h-10 items-center justify-between gap-4 text-[11px] sm:text-xs">
          <div className="flex min-w-0 items-center gap-5">
            <a
              href={`tel:${siteConfig.admissionPhone}`}
              className="hidden items-center gap-2 text-blue-100 transition hover:text-white sm:flex"
            >
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/10">
                <Phone size={12} />
              </span>

              Admission:
              <strong>
                {siteConfig.admissionPhone}
              </strong>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex min-w-0 items-center gap-2 text-blue-100 transition hover:text-white"
            >
              <Mail size={13} />

              <span className="truncate">
                {siteConfig.email}
              </span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition hover:text-blue-300"
            >
              <MessageCircle size={13} />

              <span className="hidden sm:inline">
                WhatsApp
              </span>
            </a>

            <span className="hidden h-4 w-px bg-white/20 lg:block" />

            <div className="hidden items-center gap-1.5 text-blue-100 lg:flex">
              <Clock3 size={13} />

              Admissions Enquiry Open
            </div>
          </div>
        </div>
      </div>

      {/* ================= NEWS / NOTICE BAR ================= */}
      <div className="relative z-[65] overflow-hidden border-b border-blue-100 bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50">
        <div className="flex h-9 items-center">
          <div className="flex h-full shrink-0 items-center gap-2 bg-red-600 px-4 text-[10px] font-black uppercase tracking-[0.16em] text-white sm:px-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>

            Notice
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="marquee-track flex min-w-max items-center gap-14 whitespace-nowrap px-6 text-xs font-semibold text-navy">
              <span>
                Admission information and course details are available online.
              </span>

              <span className="text-blue-600">
                ◆
              </span>

              <span>
                Explore facilities, clinical training, campus life and departments.
              </span>

              <span className="text-blue-600">
                ◆
              </span>

              <span>
                Official college information will be updated with verified details.
              </span>

              <span className="text-blue-600">
                ◆
              </span>

              <span>
                Admission information and course details are available online.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className={`
          sticky top-0 z-[60]
          border-b transition-all duration-500
          ${
            scrolled
              ? "border-slate-200/80 bg-white/95 shadow-[0_12px_35px_rgba(6,59,114,0.08)] backdrop-blur-xl"
              : "border-slate-200 bg-white"
          }
        `}
      >
        <div
          className={`
            container-site flex items-center
            justify-between gap-5
            transition-all duration-500
            ${
              scrolled
                ? "min-h-[70px] py-2"
                : "min-h-[86px] py-3"
            }
          `}
        >
          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="block min-w-0 shrink sm:shrink-0"
          >
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={400}
              height={80}
              priority
              className="h-auto w-[190px] max-w-full object-contain sm:w-[280px] xl:w-[260px] 2xl:w-[320px]"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center xl:flex">
            {navItems.map((item) => {
              const active = activeLink(item.href);

              return (
                <div
                  key={item.label}
                  className="group relative"
                >
                  <Link
                    href={item.href}
                    className={`
                      relative flex items-center gap-1
                      rounded-xl px-2.5 py-2.5
                      text-[11px] font-bold
                      transition-all duration-300
                      2xl:px-3 2xl:text-xs
                      ${
                        active
                          ? "bg-red-50 text-red-600"
                          : "text-slate-700 hover:bg-red-50 hover:text-red-600"
                      }
                    `}
                  >
                    {item.label}

                    {item.children && (
                      <ChevronDown
                        size={13}
                        className="
                          transition-transform duration-300
                          group-hover:rotate-180
                        "
                      />
                    )}

                    {active && (
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-red-600" />
                    )}
                  </Link>

                  {/* ================= DROPDOWN ================= */}
                  {item.children && (
                    <div
                      className="
                        invisible absolute
                        left-1/2 top-[calc(100%+10px)]
                        w-[270px]
                        -translate-x-1/2
                        translate-y-3 opacity-0
                        transition-all duration-300
                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-200 bg-white" />

                      <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(6,59,114,0.15)]">
                        <div className="mb-2 rounded-xl bg-gradient-to-r from-blue-50 to-blue-50 px-4 py-3">
                          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-red-600">
                            Explore
                          </p>

                          <p className="mt-1 text-sm font-black text-navy">
                            {item.label}
                          </p>
                        </div>

                        {item.children.map(
                          (child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`
                                group/sub flex items-center
                                justify-between
                                rounded-xl px-3 py-2.5
                                text-sm font-semibold
                                transition-all duration-300
                                ${
                                  activeLink(
                                    child.href
                                  )
                                    ? "bg-red-50 text-red-600"
                                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                                }
                              `}
                            >
                              {child.label}

                              <ChevronRight
                                size={14}
                                className="
                                  opacity-40
                                  transition-all duration-300
                                  group-hover/sub:translate-x-1
                                  group-hover/sub:opacity-100
                                "
                              />
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}
          <div className="hidden items-center gap-2 xl:flex">
            <Link
              href="/search"
              aria-label="Search"
              className="
                group grid h-10 w-10
                place-items-center rounded-xl
                border border-slate-200
                bg-white text-navy
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-700
                hover:shadow-lg
              "
            >
              <Search
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            <Link
              href="/online-application"
              className="
                group flex items-center gap-2
                rounded-xl
                bg-gradient-to-r
                from-red-600 to-red-500
                px-4 py-3
                text-xs font-bold text-white
                shadow-lg shadow-red-600/20
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-red-600/25
              "
            >
              <GraduationCap size={16} />

              Apply Now

              <ArrowRight
                size={14}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/search"
              className="
                grid h-10 w-10
                place-items-center
                rounded-xl border
                border-slate-200
                bg-white text-navy
              "
            >
              <Search size={17} />
            </Link>

            <button
              type="button"
              onClick={() =>
                setOpen(!open)
              }
              aria-label="Toggle navigation"
              aria-expanded={open}
              className={`
                grid h-11 w-11
                place-items-center
                rounded-xl border
                transition-all duration-300
                ${
                  open
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-slate-200 bg-white text-navy"
                }
              `}
            >
              {open ? (
                <X size={21} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            overflow-hidden
            border-t bg-white
            transition-all duration-500
            xl:hidden
            ${
              open
                ? "max-h-[80vh] border-slate-200 opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }
          `}
        >
          <div className="container-site max-h-[78vh] overflow-y-auto py-4">
            {/* Mobile Top */}
            <div className="mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-50 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-700 text-white">
                  <GraduationCap size={19} />
                </div>

                <div>
                  <p className="text-xs font-black text-navy">
                    Baidyanath College
                  </p>

                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-red-600">
                    Medical Science
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const expanded =
                  mobileMenu ===
                  item.label;

                const active =
                  activeLink(
                    item.href
                  );

                return (
                  <div
                    key={item.label}
                    className="
                      overflow-hidden
                      rounded-xl
                      border border-slate-100
                    "
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() =>
                          setOpen(false)
                        }
                        className={`
                          flex-1 px-4 py-3
                          text-sm font-bold
                          ${
                            active
                              ? "bg-red-50 text-red-600"
                              : "text-navy"
                          }
                        `}
                      >
                        {item.label}
                      </Link>

                      {item.children && (
                        <button
                          type="button"
                          onClick={() =>
                            setMobileMenu(
                              expanded
                                ? null
                                : item.label
                            )
                          }
                          className="
                            grid h-11 w-11
                            place-items-center
                            text-slate-500
                          "
                        >
                          <ChevronDown
                            size={17}
                            className={`
                              transition-transform duration-300
                              ${
                                expanded
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>
                      )}
                    </div>

                    {item.children && (
                      <div
                        className={`
                          overflow-hidden
                          bg-slate-50
                          transition-all duration-300
                          ${
                            expanded
                              ? "max-h-96 border-t border-slate-100 py-2 opacity-100"
                              : "max-h-0 opacity-0"
                          }
                        `}
                      >
                        {item.children.map(
                          (child) => (
                            <Link
                              key={
                                child.href
                              }
                              href={
                                child.href
                              }
                              onClick={() =>
                                setOpen(
                                  false
                                )
                              }
                              className="
                                flex items-center
                                gap-2 px-5
                                py-2.5 text-xs
                                font-semibold
                                text-slate-600
                                transition
                                hover:bg-blue-50
                                hover:text-blue-700
                              "
                            >
                              <ChevronRight
                                size={13}
                                className="text-blue-500"
                              />

                              {
                                child.label
                              }
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a
                href={`tel:${siteConfig.admissionPhone}`}
                className="
                  flex items-center justify-center gap-2
                  rounded-xl bg-slate-100
                  px-3 py-3
                  text-xs font-bold text-navy
                "
              >
                <Phone size={15} />
                Call Now
              </a>

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  rounded-xl bg-blue-500
                  px-3 py-3
                  text-xs font-bold text-white
                "
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>

            <Link
              href="/online-application"
              onClick={() =>
                setOpen(false)
              }
              className="
                group mt-3 flex w-full
                items-center justify-center gap-2
                rounded-xl
                bg-gradient-to-r
                from-red-600 to-red-500
                px-5 py-3.5
                text-sm font-bold text-white
                shadow-lg shadow-red-600/20
              "
            >
              <GraduationCap size={17} />

              Apply Online

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
