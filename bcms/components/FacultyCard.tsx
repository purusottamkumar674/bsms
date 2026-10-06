import {
  Mail,
  BadgeCheck,
  GraduationCap,
  BriefcaseMedical,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

import { Faculty } from "@/types";

export default function FacultyCard({
  person,
}: {
  person: Faculty;
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
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={person.image}
          alt={person.name}
          className="
            h-full w-full object-cover object-top
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#032B55]/90
            via-[#032B55]/10
            to-transparent
          "
        />

        {/* Verified Badge */}
        <div className="absolute left-4 top-4">
          <span
            className="
              inline-flex items-center gap-1.5
              rounded-full border border-white/30
              bg-white/90 px-3 py-1.5
              text-[10px] font-bold uppercase
              tracking-[0.1em] text-red-600
              shadow-lg backdrop-blur-md
            "
          >
            <BadgeCheck size={13} />
            Faculty
          </span>
        </div>

        {/* Floating Arrow */}
        <div
          className="
            absolute right-4 top-4
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
        </div>

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-5 right-5">
          <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200">
            <Stethoscope size={13} />
            {person.department}
          </div>

          <h3 className="text-xl font-black leading-tight text-white">
            {person.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-blue-100">
            {person.designation}
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative p-5">
        {/* Floating Medical Icon */}
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
          <BriefcaseMedical size={20} />
        </div>

        {/* Department */}
        <div className="mb-5 pr-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
            Department
          </p>

          <p className="mt-1 text-sm font-black text-navy">
            {person.department}
          </p>
        </div>

        {/* Information */}
        <div className="space-y-3">
          {/* Qualification */}
          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-blue-600 shadow-sm">
              <GraduationCap size={15} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Qualification
              </p>

              <p className="mt-0.5 text-xs font-semibold leading-5 text-slate-700">
                {person.qualification}
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-blue-600 shadow-sm">
              <BriefcaseMedical size={15} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Experience
              </p>

              <p className="mt-0.5 text-xs font-semibold text-slate-700">
                {person.experience}
              </p>
            </div>
          </div>

          {/* Specialization */}
          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-blue-600 shadow-sm">
              <Stethoscope size={15} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Specialization
              </p>

              <p className="mt-0.5 text-xs font-semibold leading-5 text-slate-700">
                {person.specialization}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-slate-100" />

        {/* View Profile Button */}
        <button
          type="button"
          className="
            group/button flex w-full items-center
            justify-center gap-2
            rounded-xl border border-blue-100
            bg-blue-50 px-4 py-3
            text-sm font-bold text-blue-700
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-blue-700
            hover:bg-blue-700
            hover:text-white
            hover:shadow-lg hover:shadow-blue-700/20
          "
        >
          <Mail size={16} />

          View Faculty Profile

          <ArrowUpRight
            size={15}
            className="
              transition-transform duration-300
              group-hover/button:translate-x-1
              group-hover/button:-translate-y-0.5
            "
          />
        </button>
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