import Link from "next/link";
import {
  ArrowUpRight,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

import { Department } from "@/types";

export default function DepartmentCard({
  department,
}: {
  department: Department;
}) {
  return (
    <Link
      href={`/departments/${department.slug}`}
      className="
        group relative block overflow-hidden rounded-[24px]
        border border-slate-200/80 bg-white
        shadow-[0_10px_35px_rgba(6,59,114,0.06)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(6,59,114,0.15)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Premium Gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#032B55]/95
            via-[#032B55]/30
            to-transparent
          "
        />

        {/* Subtle Overlay */}
        <div
          className="
            absolute inset-0 bg-blue-600/0
            transition-colors duration-500
            group-hover:bg-blue-600/10
          "
        />

        {/* Department Badge */}
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
            <Stethoscope size={13} />
            Department
          </span>
        </div>

        {/* Floating Arrow */}
        <div className="absolute right-4 top-4">
          <span
            className="
              grid h-10 w-10 place-items-center
              rounded-full border border-white/20
              bg-white/10 text-white
              backdrop-blur-md
              transition-all duration-500
              group-hover:rotate-45
              group-hover:bg-white
              group-hover:text-blue-700
            "
          >
            <ArrowUpRight size={18} />
          </span>
        </div>

        {/* Department Name on Image */}
        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
            Medical Sciences
          </p>

          <h3 className="text-xl font-black leading-tight text-white md:text-2xl">
            {department.name}
          </h3>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative p-5">
        {/* Small decorative icon */}
        <div
          className="
            absolute -top-6 right-5
            grid h-12 w-12 place-items-center
            rounded-2xl border-4 border-white
            bg-blue-50 text-blue-700
            shadow-lg
            transition-all duration-500
            group-hover:-translate-y-1
            group-hover:bg-blue-700
            group-hover:text-white
          "
        >
          <Stethoscope size={20} />
        </div>

        <p
          className="
            line-clamp-3 min-h-[66px]
            pr-10 text-sm leading-6 text-slate-600
          "
        >
          {department.description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-slate-100" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Explore Department
            </p>

            <p className="mt-0.5 text-xs font-bold text-navy">
              View Details & Facilities
            </p>
          </div>

          <span
            className="
              flex items-center gap-1
              rounded-xl bg-blue-50
              px-3 py-2
              text-xs font-bold text-blue-700
              transition-all duration-300
              group-hover:bg-blue-700
              group-hover:text-white
            "
          >
            Explore

            <ChevronRight
              size={14}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </span>
        </div>
      </div>

      {/* ================= BOTTOM ANIMATION ================= */}
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

      {/* Corner Glow */}
      <div
        className="
          pointer-events-none absolute
          -bottom-16 -right-16
          h-32 w-32 rounded-full
          bg-blue-400/0 blur-3xl
          transition-all duration-500
          group-hover:bg-blue-400/15
        "
      />
    </Link>
  );
}