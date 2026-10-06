import { NavItem } from "@/types";

export const siteConfig = {
  name: "Baidyanath College of Medical Science",
  shortName: "BCMS",
  tagline: "Learning. Care. Excellence.",
  phone: "+91 90000 00000",
  admissionPhone: "+91 90000 00001",
  email: "admissions@example.edu.in",
  whatsapp: "919000000001",
  address: "College Address Placeholder, Bihar, India",
  officeHours: "Mon–Sat, 9:00 AM – 5:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
    linkedin: "#",
    telegram: "#",
    pinterest: "#",
    threads: "#",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", children: [
    { label: "About College", href: "/about" },
    { label: "Vision & Mission", href: "/vision-mission" },
    { label: "Chairman Message", href: "/chairman-message" },
    { label: "Principal / Dean", href: "/principal-message" },
  ]},
  { label: "Academics", href: "/courses", children: [
    { label: "Courses", href: "/courses" },
    { label: "Departments", href: "/departments" },
    { label: "Faculty", href: "/faculty" },
    { label: "Academic Calendar", href: "/academic-calendar" },
  ]},
  { label: "Admissions", href: "/admissions", children: [
    { label: "Admission Overview", href: "/admissions" },
    { label: "Apply Online", href: "/online-application" },
    { label: "Eligibility & Fees", href: "/eligibility-fees" },
    { label: "Scholarships", href: "/scholarships" },
  ]},
  { label: "Campus", href: "/facilities", children: [
    { label: "Facilities", href: "/facilities" },
    { label: "Hospital / Clinical", href: "/hospital-clinical-training" },
    { label: "Library", href: "/library" },
    { label: "Laboratories", href: "/laboratories" },
    { label: "Hostel", href: "/hostel" },
    { label: "Student Life", href: "/student-life" },
  ]},
  { label: "Media", href: "/photo-gallery", children: [
    { label: "Photo Gallery", href: "/photo-gallery" },
    { label: "Video Gallery", href: "/video-gallery" },
    { label: "News & Events", href: "/news-events" },
  ]},
  { label: "Notices", href: "/notices" },
  { label: "Disclosure", href: "/mandatory-disclosure" },
  { label: "Contact", href: "/contact" },
];
