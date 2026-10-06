import {
  CalendarDays,
  MapPin,
  ArrowRight,
  Newspaper,
} from "lucide-react";

import { NewsItem } from "@/types";

export default function NewsCard({
  item,
}: {
  item: NewsItem;
}) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-[24px]
        border border-slate-200/80 bg-white
        shadow-[0_12px_35px_rgba(6,59,114,0.06)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(6,59,114,0.14)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-[235px] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#032B55]/80
            via-[#032B55]/10
            to-transparent
          "
        />

        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/30
              bg-white/90 px-3 py-1.5
              text-[10px] font-bold uppercase
              tracking-[0.12em] text-red-600
              shadow-lg backdrop-blur-md
            "
          >
            <Newspaper size={13} />
            {item.category}
          </span>
        </div>

        {/* Date overlay */}
        <div
          className="
            absolute bottom-4 left-4
            inline-flex items-center gap-2
            rounded-xl border border-white/15
            bg-[#032B55]/60 px-3 py-2
            text-[11px] font-semibold text-white
            backdrop-blur-md
          "
        >
          <CalendarDays size={13} />
          {item.date}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5 md:p-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
          College Updates
        </p>

        <h3
          className="
            line-clamp-2 min-h-[54px]
            text-xl font-black leading-snug text-navy
            transition-colors duration-300
            group-hover:text-blue-700
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3 line-clamp-3 min-h-[72px]
            text-sm leading-7 text-slate-600
          "
        >
          {item.description}
        </p>

        {/* Location */}
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
          <span
            className="
              grid h-9 w-9 shrink-0
              place-items-center rounded-xl
              bg-white text-blue-600 shadow-sm
            "
          >
            <MapPin size={16} />
          </span>

          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Location
            </p>

            <p className="mt-0.5 truncate text-xs font-bold text-slate-700">
              {item.location}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-slate-100" />

        {/* CTA */}
        <button
          type="button"
          className="
            group/button flex w-full items-center
            justify-between rounded-xl
            bg-blue-50 px-4 py-3
            text-sm font-bold text-blue-700
            transition-all duration-300
            hover:bg-blue-700
            hover:text-white
            hover:shadow-lg
            hover:shadow-blue-700/20
          "
        >
          <span>Read Full Story</span>

          <span
            className="
              grid h-8 w-8 place-items-center
              rounded-lg bg-white
              text-blue-700 shadow-sm
              transition-all duration-300
              group-hover/button:translate-x-1
              group-hover/button:bg-white/15
              group-hover/button:text-white
            "
          >
            <ArrowRight size={15} />
          </span>
        </button>
      </div>

      {/* ================= BOTTOM ANIMATED LINE ================= */}
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

      {/* Glow */}
      <div
        className="
          pointer-events-none absolute
          -bottom-16 -right-16
          h-36 w-36 rounded-full
          bg-blue-400/0 blur-3xl
          transition-all duration-500
          group-hover:bg-blue-400/10
        "
      />
    </article>
  );
}