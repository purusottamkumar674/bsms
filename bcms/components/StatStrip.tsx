import {
  Users,
  BookOpen,
  Building2,
  GraduationCap,
  HeartPulse,
  Award,
} from "lucide-react";

const stats = [
  ["1500+", "Students", Users],
  ["200+", "Faculty", GraduationCap],
  ["17", "Departments", Building2],
  ["15+", "Courses", BookOpen],
  ["500+", "Clinical Capacity", HeartPulse],
  ["25+", "Years", Award],
] as const;

export default function StatStrip() {
  return (
    <section className="relative">
      <div
        className="
          relative overflow-hidden
          rounded-[28px]
          border border-slate-200/80
          bg-white
          shadow-[0_18px_60px_rgba(6,59,114,0.07)]
        "
      >
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-100/60 blur-[80px]" />

        <div className="pointer-events-none absolute -bottom-24 -right-20 h-60 w-60 rounded-full bg-blue-100/50 blur-[90px]" />

        {/* Top Accent */}
        <div
          className="
            absolute left-0 right-0 top-0
            h-[3px]
            bg-gradient-to-r
            from-blue-700
            via-red-500
            to-blue-600
          "
        />

        <div
          className="
            relative grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
          "
        >
          {stats.map(([value, label, Icon], index) => (
            <div
              key={label}
              className={`
                group relative
                px-4 py-7 text-center
                transition-all duration-500
                hover:bg-gradient-to-b
                hover:from-blue-50/80
                hover:to-white
                sm:px-5 sm:py-8
                ${
                  index % 2 !== 0
                    ? "border-l border-slate-100"
                    : ""
                }
                ${
                  index >= 2
                    ? "border-t border-slate-100 md:border-t-0"
                    : ""
                }
                ${
                  index >= 3
                    ? "md:border-t border-slate-100 lg:border-t-0"
                    : ""
                }
                ${
                  index > 0
                    ? "lg:border-l lg:border-slate-100"
                    : ""
                }
              `}
            >
              {/* Number Watermark */}
              <span
                className="
                  pointer-events-none absolute
                  right-3 top-2
                  text-3xl font-black
                  text-slate-100
                  transition-all duration-500
                  group-hover:text-blue-50
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="
                  relative mx-auto mb-4
                  grid h-12 w-12
                  place-items-center
                  rounded-2xl
                  border border-blue-100
                  bg-gradient-to-br
                  from-blue-50 to-blue-50
                  text-blue-700
                  shadow-sm
                  transition-all duration-500
                  group-hover:-translate-y-1
                  group-hover:rotate-3
                  group-hover:border-blue-600
                  group-hover:from-blue-700
                  group-hover:to-blue-600
                  group-hover:text-white
                  group-hover:shadow-lg
                  group-hover:shadow-blue-700/20
                "
              >
                <Icon
                  size={21}
                  strokeWidth={1.9}
                  className="
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Value */}
              <div
                className="
                  text-2xl font-black
                  tracking-tight text-navy
                  transition-colors duration-300
                  group-hover:text-blue-700
                  sm:text-3xl
                "
              >
                {value}
              </div>

              {/* Label */}
              <div
                className="
                  mt-2 text-[10px]
                  font-black uppercase
                  tracking-[0.14em]
                  text-slate-500
                  sm:text-[11px]
                "
              >
                {label}
              </div>

              {/* Bottom Mini Accent */}
              <div
                className="
                  mx-auto mt-4
                  h-[2px] w-5
                  rounded-full
                  bg-slate-200
                  transition-all duration-500
                  group-hover:w-10
                  group-hover:bg-red-500
                "
              />

              {/* Hover Glow */}
              <div
                className="
                  pointer-events-none
                  absolute inset-x-6 bottom-2
                  h-8 rounded-full
                  bg-blue-400/0 blur-2xl
                  transition-all duration-500
                  group-hover:bg-blue-400/10
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}