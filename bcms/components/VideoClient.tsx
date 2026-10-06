"use client";

import { useEffect, useState } from "react";

import {
  Play,
  X,
  Film,
  Maximize2,
  Video,
} from "lucide-react";

import { videos } from "@/data/videos";

export default function VideoClient() {
  const [active, setActive] = useState<number | null>(null);

  const selectedVideo =
    active === null
      ? null
      : videos.find((video) => video.id === active);

  /* ================= ESC CLOSE ================= */

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ================= BODY SCROLL LOCK ================= */

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <>
      {/* ================= TOP INFORMATION ================= */}

      <div className="mb-7 flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(6,59,114,0.05)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
            <Film size={21} />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-600">
              Campus Media
            </p>

            <h3 className="mt-0.5 text-lg font-black text-navy">
              Video Gallery
            </h3>
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500">
          <Video size={14} className="text-blue-600" />

          {videos.length} Videos
        </div>
      </div>

      {/* ================= VIDEO GRID ================= */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            onClick={() => setActive(video.id)}
            className="
              group relative overflow-hidden
              rounded-[24px]
              border border-slate-200/80
              bg-white text-left
              shadow-[0_12px_35px_rgba(6,59,114,0.06)]
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-200
              hover:shadow-[0_25px_60px_rgba(6,59,114,0.14)]
            "
          >
            {/* ================= THUMBNAIL ================= */}

            <div className="relative h-[210px] overflow-hidden bg-slate-100">
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#032B55]/85
                  via-[#032B55]/15
                  to-transparent
                "
              />

              {/* Category */}
              <div className="absolute left-4 top-4">
                <span
                  className="
                    inline-flex items-center gap-1.5
                    rounded-full
                    border border-white/30
                    bg-white/90
                    px-3 py-1.5
                    text-[9px] font-black
                    uppercase tracking-[0.12em]
                    text-red-600
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  <Film size={12} />

                  {video.category}
                </span>
              </div>

              {/* Expand icon */}
              <div
                className="
                  absolute right-4 top-4
                  grid h-9 w-9
                  translate-y-2
                  place-items-center
                  rounded-full
                  border border-white/20
                  bg-white/10 text-white
                  opacity-0
                  backdrop-blur-md
                  transition-all duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <Maximize2 size={15} />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className="
                    relative grid h-16 w-16
                    place-items-center
                    rounded-full
                    border border-white/30
                    bg-white/95
                    text-blue-700
                    shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:bg-blue-700
                    group-hover:text-white
                  "
                >
                  {/* Pulse */}
                  <span
                    className="
                      absolute inset-0
                      rounded-full
                      border border-white/50
                      opacity-0
                      transition
                      group-hover:animate-ping
                      group-hover:opacity-50
                    "
                  />

                  <Play
                    size={22}
                    fill="currentColor"
                    className="ml-1"
                  />
                </span>
              </div>

              {/* Watch label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">
                  Watch Video
                </p>
              </div>
            </div>

            {/* ================= CONTENT ================= */}

            <div className="p-5">
              <p className="text-[9px] font-black uppercase tracking-[0.17em] text-red-600">
                Baidyanath College
              </p>

              <h3
                className="
                  mt-2 line-clamp-2
                  min-h-[48px]
                  text-base font-black
                  leading-6 text-navy
                  transition-colors duration-300
                  group-hover:text-blue-700
                "
              >
                {video.title}
              </h3>

              <p
                className="
                  mt-2 line-clamp-3
                  min-h-[60px]
                  text-xs leading-5
                  text-slate-500
                "
              >
                {video.description}
              </p>

              {/* Bottom Action */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-bold text-slate-400">
                  Play Video
                </span>

                <span
                  className="
                    grid h-9 w-9
                    place-items-center
                    rounded-full
                    bg-blue-50
                    text-blue-700
                    transition-all duration-500
                    group-hover:bg-blue-700
                    group-hover:text-white
                  "
                >
                  <Play
                    size={14}
                    fill="currentColor"
                  />
                </span>
              </div>
            </div>

            {/* Animated Bottom Line */}
            <div
              className="
                absolute bottom-0 left-0
                h-[3px] w-0
                bg-gradient-to-r
                from-blue-700
                via-red-500
                to-blue-600
                transition-all duration-700
                group-hover:w-full
              "
            />
          </button>
        ))}
      </div>

      {/* ================= VIDEO MODAL ================= */}

      {selectedVideo && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-[#032B55]/95
            p-3 backdrop-blur-md
            sm:p-6
          "
          onClick={() => setActive(null)}
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-[550px] w-[550px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/10
              blur-[130px]
            "
          />

          {/* Close */}
          <button
            type="button"
            aria-label="Close video"
            onClick={(event) => {
              event.stopPropagation();
              setActive(null);
            }}
            className="
              absolute right-4 top-4
              z-20 grid h-11 w-11
              place-items-center
              rounded-full
              border border-white/20
              bg-white/10
              text-white
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

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Video Container */}
            <div
              className="
                overflow-hidden
                rounded-[24px]
                border border-white/15
                bg-black
                p-1.5
                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                sm:p-2
              "
            >
              <div className="aspect-video overflow-hidden rounded-[18px] bg-black">
                {selectedVideo.videoType === "direct" ? (
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    className="h-full w-full"
                  />
                ) : (
                  <iframe
                    src={getEmbedUrl(
                      selectedVideo.videoUrl,
                      selectedVideo.videoType
                    )}
                    title={selectedVideo.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Video Details */}
            <div className="mx-auto mt-5 max-w-4xl text-center">
              <span
                className="
                  inline-flex items-center gap-1.5
                  rounded-full
                  border border-blue-300/20
                  bg-blue-500/10
                  px-3 py-1.5
                  text-[9px] font-black
                  uppercase tracking-[0.16em]
                  text-blue-200
                "
              >
                <Film size={12} />
                {selectedVideo.category}
              </span>

              <h3 className="mt-3 text-xl font-black text-white sm:text-2xl md:text-3xl">
                {selectedVideo.title}
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                {selectedVideo.description}
              </p>

              <p className="mt-4 hidden text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500 sm:block">
                Press ESC to close video
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ================= VIDEO URL HELPER ================= */

function getEmbedUrl(
  url: string,
  videoType?: string
) {
  if (!url) return "";

  if (videoType === "youtube") {
    if (url.includes("youtube.com/embed/")) {
      return url;
    }

    if (url.includes("youtu.be/")) {
      const id = url
        .split("youtu.be/")[1]
        ?.split("?")[0];

      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    if (url.includes("youtube.com/watch")) {
      try {
        const parsed = new URL(url);
        const id = parsed.searchParams.get("v");

        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      } catch {
        return url;
      }
    }
  }

  if (videoType === "vimeo") {
    if (url.includes("player.vimeo.com")) {
      return url;
    }

    const id = url.split("/").filter(Boolean).pop();

    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }

  return url;
}