import { GalleryImage } from "@/types";
const rows = [
  ["Campus","https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"],
  ["Classrooms","https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"],
  ["Laboratory","https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"],
  ["Hospital","https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"],
  ["Hostel","https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"],
  ["Events","https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"],
  ["Sports","https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"],
  ["Seminars","https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"],
  ["Students","https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"],
  ["Faculty","https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"],
];
export const gallery: GalleryImage[] = rows.map((r,i)=>({id:i+1, category:r[0], src:r[1], title:`${r[0]} Highlights`, alt:`${r[0]} at Baidyanath College of Medical Science`, description:`A visual glimpse of ${r[0].toLowerCase()} life and facilities.`}));
