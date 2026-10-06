import {
  Bell,
  Download,
  CalendarDays,
  Tag,
  FileText,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

import { notices } from "@/data/notices";

export default function NoticeList({
  limit,
}: {
  limit?: number;
}) {
  const rows = limit
    ? notices.slice(0, limit)
    : notices;

  return (
    <div className="space-y-4">
      {rows.map((notice) => (
        <article
          key={notice.id}
          className={`
            group relative overflow-hidden
            rounded-[22px] border bg-white
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-[0_20px_50px_rgba(6,59,114,0.12)]
            ${
              notice.important
                ? "border-red-100"
                : "border-slate-200/80"
            }
          `}
        >
          {/* Left Accent */}
          <div
            className={`
              absolute bottom-0 left-0 top-0
              w-[4px]
              ${
                notice.important
                  ? "bg-gradient-to-b from-red-500 to-orange-400"
                  : "bg-gradient-to-b from-blue-700 to-red-500"
              }
            `}
          />

          {/* Hover Glow */}
          <div
            className="
              pointer-events-none absolute
              -right-16 -top-16
              h-40 w-40 rounded-full
              bg-blue-100/0 blur-3xl
              transition-all duration-500
              group-hover:bg-blue-100/70
            "
          />

          <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center md:p-6">
            {/* ================= ICON ================= */}
            <div
              className={`
                relative grid h-13 w-13
                shrink-0 place-items-center
                rounded-2xl
                transition-all duration-500
                group-hover:-translate-y-1
                group-hover:rotate-3
                ${
                  notice.important
                    ? "bg-red-50 text-red-600"
                    : "bg-blue-50 text-blue-700"
                }
              `}
            >
              {notice.important ? (
                <AlertCircle size={22} />
              ) : (
                <Bell size={22} />
              )}

              {notice.isNew && (
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-blue-500" />
                </span>
              )}
            </div>

            {/* ================= CONTENT ================= */}
            <div className="min-w-0 flex-1">
              {/* Badges */}
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {notice.isNew && (
                  <span
                    className="
                      inline-flex items-center gap-1
                      rounded-full bg-red-50
                      px-2.5 py-1
                      text-[9px] font-black
                      uppercase tracking-wider
                      text-red-600
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    New
                  </span>
                )}

                {notice.important && (
                  <span
                    className="
                      inline-flex items-center gap-1
                      rounded-full bg-red-50
                      px-2.5 py-1
                      text-[9px] font-black
                      uppercase tracking-wider
                      text-red-700
                    "
                  >
                    <AlertCircle size={11} />
                    Important
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                className="
                  text-base font-black leading-snug
                  text-navy transition-colors duration-300
                  group-hover:text-blue-700
                  md:text-lg
                "
              >
                {notice.title}
              </h3>

              {/* Meta */}
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays
                    size={13}
                    className="text-blue-600"
                  />
                  {notice.date}
                </span>

                <span className="flex items-center gap-1.5">
                  <Tag
                    size={13}
                    className="text-blue-600"
                  />
                  {notice.category}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 line-clamp-2 max-w-4xl text-sm leading-6 text-slate-600">
                {notice.description}
              </p>
            </div>

            {/* ================= PDF ACTION ================= */}
            <div className="flex shrink-0 sm:justify-end">
              <button
                type="button"
                className="
                  group/button flex w-full
                  items-center justify-between gap-3
                  rounded-xl border border-blue-100
                  bg-blue-50 px-4 py-3
                  text-xs font-bold text-blue-700
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-700
                  hover:bg-blue-700
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-blue-700/20
                  sm:w-auto
                "
              >
                <span className="flex items-center gap-2">
                  <FileText size={15} />
                  View PDF
                </span>

                <span
                  className="
                    grid h-7 w-7 place-items-center
                    rounded-lg bg-white
                    text-blue-700
                    shadow-sm
                    transition-all duration-300
                    group-hover/button:bg-white/15
                    group-hover/button:text-white
                  "
                >
                  <Download size={13} />
                </span>
              </button>
            </div>
          </div>

          {/* ================= BOTTOM LINE ================= */}
          <div
            className={`
              absolute bottom-0 left-0
              h-[3px] w-0
              transition-all duration-700
              group-hover:w-full
              ${
                notice.important
                  ? "bg-gradient-to-r from-red-500 via-orange-400 to-red-500"
                  : "bg-gradient-to-r from-blue-700 via-red-500 to-blue-600"
              }
            `}
          />

          {/* Hover Arrow */}
          <div
            className="
              pointer-events-none absolute
              right-3 top-3
              translate-x-2 opacity-0
              transition-all duration-300
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight
              size={15}
              className="text-blue-300"
            />
          </div>
        </article>
      ))}
    </div>
  );
}