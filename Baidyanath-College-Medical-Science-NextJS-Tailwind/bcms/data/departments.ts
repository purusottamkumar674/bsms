import { Department } from "@/types";
const names = ["Anatomy","Physiology","Biochemistry","Pharmacology","Pathology","Microbiology","Community Medicine","Medicine","Surgery","Pediatrics","Obstetrics & Gynaecology","Orthopaedics","ENT","Ophthalmology","Dermatology","Radiology","Anaesthesiology"];
const imgs = [
"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
];
export const departments: Department[] = names.map((name,i)=>({
  slug: name.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),
  name,
  image: imgs[i%imgs.length],
  description: `Explore the ${name} department, its academic learning environment, facilities and student-focused activities.`
}));
