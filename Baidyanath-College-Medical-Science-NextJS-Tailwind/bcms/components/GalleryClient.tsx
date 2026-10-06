"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  ImageIcon,
} from "lucide-react";

import { gallery } from "@/data/gallery";

export default function GalleryClient() {
  const categories = [
    "All",
    ...Array.from(new Set(gallery.map((item) => item.category))),
  ];

  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return category === "All"
      ? gallery
      : gallery.filter((item) => item.category === category);
  }, [category]);

  const current =
    active === null
      ? null
      : filtered[active];

  function move(direction: number) {
    setActive((value) => {
      if (value === null || filtered.length === 0) {
        return null;
      }

      return (
        (value + direction + filtered.length) %
        filtered.length
      );
    });
  }

  function closeLightbox() {
    setActive(null);
  }

  /* ================= KEYBOARD SUPPORT ================= */

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (active === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        move(-1);
      }

      if (event.key === "ArrowRight") {
        move(1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [active, filtered.length]);

  /* ================= BODY SCROLL LOCK ================= */

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="mb-8 rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_10px_35px_rgba(6,59,114,0.05)] md:p-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
              <Images size={21} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
                Explore Campus
              </p>

              <h3 className="text-lg font-black text-navy">
                Photo Gallery
              </h3>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => {
              const isActive = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setCategory(item);
                    setActive(null);
                  }}
                  className={`
                    relative overflow-hidden
                    rounded-full px-4 py-2.5
                    text-xs font-bold
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                        : "border border-slate-200 bg-slate-50 text-slate-600 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    }
                  `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= COUNT ================= */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-bold text-navy">
            {filtered.length}
          </span>{" "}
          photos
        </p>

        <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
          <ImageIcon size={14} />

          {category}
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      {filtered.length > 0 ? (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className="
                group relative mb-5 block
                w-full break-inside-avoid
                overflow-hidden rounded-[22px]
                border border-slate-200
                bg-white text-left
                shadow-[0_10px_30px_rgba(6,59,114,0.06)]
                transition-all duration-500
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-[0_22px_50px_rgba(6,59,114,0.15)]
              "
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="
                    w-full object-cover
                    transition-transform
                    duration-700 ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark Gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#032B55]/95
                    via-[#032B55]/10
                    to-transparent
                  "
                />

                {/* Blue Hover Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-blue-700/0
                    transition-colors duration-500
                    group-hover:bg-blue-700/10
                  "
                />

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                  <span
                    className="
                      inline-flex rounded-full
                      border border-white/30
                      bg-white/90 px-3 py-1.5
                      text-[10px] font-bold uppercase
                      tracking-[0.12em] text-red-600
                      shadow-lg backdrop-blur
                    "
                  >
                    {item.category}
                  </span>
                </div>

                {/* Expand */}
                <div
                  className="
                    absolute right-4 top-4
                    grid h-10 w-10
                    translate-y-2
                    place-items-center rounded-full
                    border border-white/20
                    bg-white/10 text-white
                    opacity-0 backdrop-blur
                    transition-all duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <Maximize2 size={17} />
                </div>

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-5 pt-20">
                  <h3 className="text-lg font-black text-white">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p
                      className="
                        mt-1 line-clamp-2
                        max-w-sm text-xs
                        leading-5 text-blue-100
                      "
                    >
                      {item.description}
                    </p>
                  )}

                  <div
                    className="
                      mt-3 flex items-center gap-2
                      text-[11px] font-bold
                      uppercase tracking-wider
                      text-blue-200
                    "
                  >
                    View Photo

                    <Maximize2
                      size={12}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Animated Line */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-[3px] w-0
                  bg-gradient-to-r
                  from-blue-700 via-red-500 to-blue-600
                  transition-all duration-700
                  group-hover:w-full
                "
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm">
            <ImageIcon size={24} />
          </div>

          <h3 className="mt-4 font-black text-navy">
            No Photos Available
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            No gallery images are available in this category.
          </p>
        </div>
      )}

      {/* ================= LIGHTBOX ================= */}
      {current && active !== null && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-[#032B55]/95
            p-3 backdrop-blur-md
            sm:p-6
          "
          onClick={closeLightbox}
        >
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

          {/* Close */}
          <button
            type="button"
            aria-label="Close gallery"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            className="
              absolute right-4 top-4 z-20
              grid h-11 w-11 place-items-center
              rounded-full border border-white/20
              bg-white/10 text-white
              backdrop-blur-md
              transition-all duration-300
              hover:rotate-90
              hover:bg-white
              hover:text-navy
              sm:right-7 sm:top-7
            "
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div
            className="
              absolute left-4 top-4 z-20
              rounded-full border border-white/10
              bg-white/10 px-4 py-2
              text-xs font-bold text-white
              backdrop-blur-md
              sm:left-7 sm:top-7
            "
          >
            {active + 1} / {filtered.length}
          </div>

          {/* Previous */}
          {filtered.length > 1 && (
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                move(-1);
              }}
              className="
                absolute left-3 top-1/2 z-20
                grid h-11 w-11
                -translate-y-1/2
                place-items-center rounded-full
                border border-white/20
                bg-white/10 text-white
                backdrop-blur-md
                transition-all duration-300
                hover:scale-110
                hover:bg-white
                hover:text-navy
                sm:left-8 sm:h-12 sm:w-12
              "
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Main Content */}
          <div
            className="
              relative z-10
              w-full max-w-6xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="
                relative overflow-hidden
                rounded-[24px]
                border border-white/10
                bg-white/[0.04]
                p-2 shadow-2xl
                backdrop-blur-md
                sm:p-3
              "
            >
              <img
                src={current.src}
                alt={current.alt}
                className="
                  max-h-[72vh]
                  w-full rounded-[18px]
                  object-contain
                "
              />
            </div>

            {/* Information */}
            <div className="mx-auto mt-5 max-w-3xl text-center">
              <span
                className="
                  inline-flex rounded-full
                  border border-blue-300/20
                  bg-blue-500/10
                  px-3 py-1
                  text-[10px] font-bold
                  uppercase tracking-[0.18em]
                  text-blue-200
                "
              >
                {current.category}
              </span>

              <h3 className="mt-3 text-xl font-black text-white md:text-2xl">
                {current.title}
              </h3>

              {current.description && (
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {current.description}
                </p>
              )}

              <p className="mt-4 hidden text-[11px] text-slate-500 md:block">
                Use ← → arrow keys to navigate · ESC to close
              </p>
            </div>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                move(1);
              }}
              className="
                absolute right-3 top-1/2 z-20
                grid h-11 w-11
                -translate-y-1/2
                place-items-center rounded-full
                border border-white/20
                bg-white/10 text-white
                backdrop-blur-md
                transition-all duration-300
                hover:scale-110
                hover:bg-white
                hover:text-navy
                sm:right-8 sm:h-12 sm:w-12
              "
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
}