"use client";

import {
  FormEvent,
  useState,
  ChangeEvent,
} from "react";

import {
  CheckCircle2,
  UploadCloud,
  User,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  GraduationCap,
  CalendarDays,
  FileText,
  Send,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  Building2,
} from "lucide-react";

type DemoFormProps = {
  application?: boolean;
};

type FileState = {
  photo?: File;
  marksheet?: File;
  certificate?: File;
};

export default function DemoForm({
  application = false,
}: DemoFormProps) {
  const [done, setDone] = useState(false);
  const [files, setFiles] = useState<FileState>({});

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setDone(true);

    setTimeout(() => {
      document
        .getElementById("form-success")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  }

  function handleFile(
    key: keyof FileState,
    e: ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (file) {
      setFiles((prev) => ({
        ...prev,
        [key]: file,
      }));
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const labelClass =
    "text-xs font-bold uppercase tracking-[0.06em] text-slate-600";

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(6,59,114,0.08)]">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

      {/* ================= HEADER ================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#063B72] via-blue-700 to-blue-600 px-6 py-7 text-white md:px-9">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
              {application ? (
                <GraduationCap size={25} />
              ) : (
                <MessageCircle size={24} />
              )}
            </div>

            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-100">
                Baidyanath College of Medical Science
              </p>

              <h2 className="text-2xl font-black md:text-3xl">
                {application
                  ? "Online Admission Application"
                  : "Admission Enquiry"}
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
                {application
                  ? "Complete the details below to prepare your admission application."
                  : "Share your details and our admission team can assist you with course information."}
              </p>
            </div>
          </div>

          <div className="hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-right backdrop-blur lg:block">
            <p className="text-[10px] uppercase tracking-wider text-blue-100">
              Form Type
            </p>

            <p className="mt-1 text-sm font-bold">
              {application ? "Application" : "Enquiry"}
            </p>
          </div>
        </div>
      </div>

      {/* ================= SUCCESS ================= */}
      {done && (
        <div
          id="form-success"
          className="relative mx-5 mt-6 overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-5 md:mx-8"
        >
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl" />

          <div className="relative flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <h3 className="font-bold text-blue-900">
                Frontend Demo Submitted Successfully
              </h3>

              <p className="mt-1 text-sm leading-6 text-blue-700">
                The form UI is working correctly. Actual submission and data
                storage will be enabled when the backend is connected.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= FORM ================= */}
      <form
        onSubmit={submit}
        className="relative p-5 md:p-8 lg:p-9"
      >
        {/* Section Heading */}
        <div className="mb-7 flex items-center gap-3 border-b border-slate-100 pb-5">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
            <User size={19} />
          </div>

          <div>
            <h3 className="font-black text-navy">
              {application
                ? "Student Information"
                : "Your Information"}
            </h3>

            <p className="mt-0.5 text-xs text-slate-500">
              Fields marked with * are required.
            </p>
          </div>
        </div>

        {/* ================= BASIC FIELDS ================= */}
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">
          {application ? (
            <>
              <Field
                label="Student Name"
                icon={<User size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter student's full name"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Father's Name"
                icon={<User size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter father's name"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Mother's Name"
                icon={<User size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter mother's name"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Date of Birth"
                icon={<CalendarDays size={16} />}
                required
              >
                <input
                  required
                  type="date"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Email Address"
                icon={<Mail size={16} />}
                required
              >
                <input
                  required
                  type="email"
                  placeholder="student@example.com"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Phone Number"
                icon={<Phone size={16} />}
                required
              >
                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </Field>

              <Field
                label="WhatsApp Number"
                icon={<MessageCircle size={16} />}
                required
              >
                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </Field>

              <Field
                label="State"
                icon={<MapPin size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter state"
                  className={inputClass}
                />
              </Field>

              <Field
                label="District"
                icon={<MapPin size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter district"
                  className={inputClass}
                />
              </Field>

              <Field
                label="City"
                icon={<Building2 size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter city"
                  className={inputClass}
                />
              </Field>

              <Field
                label="PIN Code"
                icon={<MapPin size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Previous Qualification"
                icon={<BookOpen size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="e.g. 10+2 Science"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Marks / Percentage"
                icon={<FileText size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="e.g. 82%"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Entrance Examination"
                icon={<FileText size={16} />}
              >
                <input
                  type="text"
                  placeholder="Enter examination details"
                  className={inputClass}
                />
              </Field>
            </>
          ) : (
            <>
              <Field
                label="Full Name"
                icon={<User size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Email Address"
                icon={<Mail size={16} />}
                required
              >
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Phone Number"
                icon={<Phone size={16} />}
                required
              >
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </Field>

              <Field
                label="WhatsApp Number"
                icon={<MessageCircle size={16} />}
                required
              >
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </Field>

              <Field
                label="City"
                icon={<MapPin size={16} />}
                required
              >
                <input
                  required
                  type="text"
                  placeholder="Enter your city"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Course of Interest"
                icon={<GraduationCap size={16} />}
                required
              >
                <select
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select course
                  </option>

                  <option>MBBS</option>
                  <option>B.Sc. Nursing</option>
                  <option>BPT</option>
                  <option>Medical Laboratory Sciences</option>
                </select>
              </Field>
            </>
          )}
        </div>

        {/* ================= APPLICATION COURSE ================= */}
        {application && (
          <>
            <div className="my-8 h-px bg-slate-100" />

            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
                <GraduationCap size={19} />
              </div>

              <div>
                <h3 className="font-black text-navy">
                  Course Selection
                </h3>

                <p className="text-xs text-slate-500">
                  Select the programme you want to apply for.
                </p>
              </div>
            </div>

            <label className={labelClass}>
              Course Applying For *

              <select
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select a course
                </option>

                <option>MBBS</option>
                <option>B.Sc. Nursing</option>
                <option>BPT</option>
                <option>Medical Laboratory Sciences</option>
              </select>
            </label>

            {/* Upload Section */}
            <div className="mt-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
                  <UploadCloud size={19} />
                </div>

                <div>
                  <h3 className="font-black text-navy">
                    Upload Documents
                  </h3>

                  <p className="text-xs text-slate-500">
                    Frontend preview only. Files are not uploaded to a server.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <UploadCard
                  title="Student Photo"
                  file={files.photo}
                  onChange={(e) =>
                    handleFile("photo", e)
                  }
                />

                <UploadCard
                  title="Marksheet"
                  file={files.marksheet}
                  onChange={(e) =>
                    handleFile("marksheet", e)
                  }
                />

                <UploadCard
                  title="ID / Certificate"
                  file={files.certificate}
                  onChange={(e) =>
                    handleFile("certificate", e)
                  }
                />
              </div>
            </div>
          </>
        )}

        {/* ================= MESSAGE ================= */}
        <div className="my-8 h-px bg-slate-100" />

        <label className={labelClass}>
          Message

          <textarea
            rows={5}
            placeholder={
              application
                ? "Add any additional information related to your application..."
                : "Tell us which course or admission information you need..."
            }
            className={`${inputClass} resize-none`}
          />
        </label>

        {/* ================= FOOTER ================= */}
        <div className="mt-7 flex flex-col gap-5 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <div>
              <p className="text-xs font-bold text-slate-700">
                Frontend Demo
              </p>

              <p className="mt-1 max-w-md text-[11px] leading-5 text-slate-500">
                Your information is currently not sent to any server or
                database. Backend submission will be connected in Phase 2.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/25 active:translate-y-0"
          >
            <Send
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

            Submit {application ? "Application" : "Enquiry"}

            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </form>
    </div>
  );
}

/* ================= REUSABLE FIELD ================= */

function Field({
  label,
  icon,
  required,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="group block">
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-slate-600">
        <span className="text-blue-600 transition-transform duration-300 group-focus-within:scale-110">
          {icon}
        </span>

        {label}

        {required && (
          <span className="text-red-500">
            *
          </span>
        )}
      </span>

      {children}
    </label>
  );
}

/* ================= UPLOAD CARD ================= */

function UploadCard({
  title,
  file,
  onChange,
}: {
  title: string;
  file?: File;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <label
      className={`
        group relative cursor-pointer overflow-hidden
        rounded-2xl border-2 border-dashed p-5
        transition-all duration-300
        ${
          file
            ? "border-blue-300 bg-blue-50"
            : "border-blue-200 bg-blue-50/50 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg"
        }
      `}
    >
      <input
        type="file"
        className="hidden"
        onChange={onChange}
      />

      <div className="flex flex-col items-center text-center">
        <div
          className={`
            grid h-12 w-12 place-items-center rounded-2xl
            transition-all duration-300
            ${
              file
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-600 shadow-sm group-hover:scale-110"
            }
          `}
        >
          {file ? (
            <CheckCircle2 size={21} />
          ) : (
            <UploadCloud size={21} />
          )}
        </div>

        <p className="mt-3 text-sm font-bold text-navy">
          {title}
        </p>

        {file ? (
          <p className="mt-1 max-w-full truncate text-xs text-blue-700">
            {file.name}
          </p>
        ) : (
          <>
            <p className="mt-1 text-xs text-slate-500">
              Click to choose file
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              JPG, PNG or PDF
            </p>
          </>
        )}
      </div>
    </label>
  );
}