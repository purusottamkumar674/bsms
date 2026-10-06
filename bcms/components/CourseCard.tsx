import Link from "next/link";
import {
  Clock3,
  Users,
  ArrowRight,
  GraduationCap,
  BookOpen,
} from "lucide-react";

import { Course } from "@/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-[24px]
        border border-slate-200/80 bg-white
        shadow-[0_12px_35px_rgba(6,59,114,0.06)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_24px_60px_rgba(6,59,114,0.14)]
      "
    >
      {/* Image */}
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Image Gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#032B55]/80
            via-[#032B55]/10
            to-transparent
          "
        />

        {/* Top Badge */}
        <div className="absolute left-4 top-4">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/30
              bg-white/90 px-3 py-1.5
              text-[11px] font-bold uppercase
              tracking-wider text-red-600
              shadow-sm backdrop-blur-md
            "
          >
            <GraduationCap size={14} />
            Medical Course
          </span>
        </div>

        {/* Course Name over Image */}
        <div className="absolute bottom-4 left-5 right-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-blue-100">
            <BookOpen size={14} />
            Academic Programme
          </div>

          <h3
            className="
              text-xl font-black leading-tight text-white
              drop-shadow-sm md:text-2xl
            "
          >
            {course.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Description */}
        <p className="min-h-[72px] text-sm leading-7 text-slate-600">
          {course.short}
        </p>

        {/* Course Information */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div
            className="
              flex items-center gap-3
              rounded-2xl bg-blue-50/80
              px-3 py-3
              transition duration-300
              group-hover:bg-blue-50
            "
          >
            <span
              className="
                grid h-9 w-9 shrink-0 place-items-center
                rounded-xl bg-white text-blue-600
                shadow-sm
              "
            >
              <Clock3 size={17} />
            </span>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Duration
              </p>

              <p className="mt-0.5 text-xs font-bold text-navy">
                {course.duration}
              </p>
            </div>
          </div>

          <div
            className="
              flex items-center gap-3
              rounded-2xl bg-blue-50/80
              px-3 py-3
              transition duration-300
              group-hover:bg-blue-50
            "
          >
            <span
              className="
                grid h-9 w-9 shrink-0 place-items-center
                rounded-xl bg-white text-blue-600
                shadow-sm
              "
            >
              <Users size={17} />
            </span>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Seats
              </p>

              <p className="mt-0.5 text-xs font-bold text-navy">
                {course.seats}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-slate-100" />

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={`/courses/${course.slug}`}
            className="
              group/details flex flex-1 items-center
              justify-center gap-2 rounded-xl
              border border-blue-200
              bg-blue-50 px-4 py-3
              text-sm font-bold text-blue-700
              transition-all duration-300
              hover:border-blue-600
              hover:bg-blue-600
              hover:text-white
            "
          >
            View Details

            <ArrowRight
              size={15}
              className="
                transition-transform duration-300
                group-hover/details:translate-x-1
              "
            />
          </Link>

          <Link
            href="/online-application"
            className="
              flex flex-1 items-center
              justify-center rounded-xl
              bg-gradient-to-r
              from-red-600 to-red-500
              px-4 py-3
              text-sm font-bold text-white
              shadow-lg shadow-red-600/15
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-red-600/20
            "
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Bottom Animated Line */}
      <div
        className="
          absolute bottom-0 left-0 h-[3px] w-0
          bg-gradient-to-r
          from-blue-600 via-red-500 to-blue-600
          transition-all duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}