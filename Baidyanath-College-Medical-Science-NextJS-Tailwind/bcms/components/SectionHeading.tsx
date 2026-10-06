
type SectionHeadingProps = {
  kicker?: string;
  title: string;
  copy?: string;
  center?: boolean;
};

export default function SectionHeading({
  kicker,
  title,
  copy,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`
        relative mb-10 max-w-3xl
        ${center ? "mx-auto text-center" : ""}
      `}
    >
      {/* Decorative Glow */}
      <div
        className={`
          pointer-events-none absolute
          top-0 h-24 w-24
          rounded-full bg-blue-100/60
          blur-3xl
          ${
            center
              ? "left-1/2 -translate-x-1/2"
              : "-left-8"
          }
        `}
      />

      {/* Kicker */}
      {kicker && (
        <div
          className={`
            relative mb-4
            inline-flex items-center gap-2
            rounded-full
            border border-red-100
            bg-gradient-to-r
            from-red-50 to-red-50
            px-3.5 py-1.5
            text-[10px] font-black
            uppercase tracking-[0.18em]
            text-red-600
            shadow-sm
          `}
        >
          {/* Dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
          </span>

          {kicker}
        </div>
      )}

      {/* Title */}
      <h2
        className="
          relative
          text-balance
          text-3xl font-black
          leading-[1.1]
          tracking-[-0.035em]
          text-navy
          sm:text-4xl
          lg:text-[44px]
        "
      >
        {title}
      </h2>

      {/* Accent */}
      <div
        className={`
          relative mt-5
          flex items-center gap-2
          ${center ? "justify-center" : ""}
        `}
      >
        <span className="h-[3px] w-12 rounded-full bg-red-600" />

        <span className="h-[3px] w-6 rounded-full bg-red-500" />

        <span className="h-[3px] w-2 rounded-full bg-slate-200" />
      </div>

      {/* Description */}
      {copy && (
        <p
          className="
            relative mt-5
            text-sm leading-7
            text-slate-600
            sm:text-base
            sm:leading-8
          "
        >
          {copy}
        </p>
      )}
    </div>
  );
}