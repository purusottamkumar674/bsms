import {
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

type FeatureItem = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

export default function FeatureGrid({
  items,
}: {
  items: FeatureItem[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, copy, icon: Icon }, index) => (
        <article
          key={title}
          className="
            group relative overflow-hidden rounded-[24px]
            border border-slate-200/80 bg-white
            p-6
            shadow-[0_12px_35px_rgba(6,59,114,0.05)]
            transition-all duration-500
            hover:-translate-y-2
            hover:border-blue-200
            hover:shadow-[0_25px_60px_rgba(6,59,114,0.13)]
          "
        >
          {/* Background Decorative Glow */}
          <div
            className="
              pointer-events-none absolute
              -right-14 -top-14
              h-32 w-32 rounded-full
              bg-blue-100/0 blur-3xl
              transition-all duration-500
              group-hover:bg-blue-100/80
            "
          />

          {/* Number */}
          <span
            className="
              absolute right-5 top-5
              text-4xl font-black
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
              relative mb-5
              grid h-14 w-14 place-items-center
              rounded-2xl
              border border-blue-100
              bg-gradient-to-br from-blue-50 to-blue-50
              text-blue-700
              shadow-sm
              transition-all duration-500
              group-hover:-translate-y-1
              group-hover:rotate-3
              group-hover:border-blue-600
              group-hover:bg-gradient-to-br
              group-hover:from-blue-700
              group-hover:to-blue-600
              group-hover:text-white
              group-hover:shadow-lg
              group-hover:shadow-blue-700/20
            "
          >
            <Icon
              size={24}
              strokeWidth={1.8}
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
              College Facility
            </p>

            <h3
              className="
                pr-8 text-lg font-black
                leading-snug text-navy
                transition-colors duration-300
                group-hover:text-blue-700
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-3 min-h-[72px]
                text-sm leading-7 text-slate-600
              "
            >
              {copy}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-xs font-bold text-slate-400">
              Learn More
            </span>

            <span
              className="
                grid h-9 w-9 place-items-center
                rounded-full bg-blue-50
                text-blue-700
                transition-all duration-500
                group-hover:rotate-45
                group-hover:bg-blue-700
                group-hover:text-white
                group-hover:shadow-lg
              "
            >
              <ArrowUpRight size={16} />
            </span>
          </div>

          {/* Animated Bottom Line */}
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
        </article>
      ))}
    </div>
  );
}