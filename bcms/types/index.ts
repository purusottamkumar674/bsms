export type NavItem = { label: string; href: string; children?: NavItem[] };
export type Course = { slug: string; name: string; short: string; duration: string; seats: string; eligibility: string; image: string };
export type Department = { slug: string; name: string; image: string; description: string };
export type Faculty = { name: string; department: string; designation: string; qualification: string; experience: string; specialization: string; image: string };
export type GalleryImage = { id: number; src: string; title: string; alt: string; category: string; description: string };
export type VideoItem = { id: number; title: string; description: string; thumbnail: string; videoUrl: string; videoType: "youtube" | "vimeo" | "direct"; category: string };
export type Notice = { id: number; title: string; date: string; category: string; description: string; important?: boolean; isNew?: boolean };
export type NewsItem = { id: number; title: string; date: string; location: string; category: string; image: string; description: string };
