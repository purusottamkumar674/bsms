"use client";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
export default function FloatingActions(){return <>
  <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-2 sm:flex"><a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello Baidyanath College of Medical Science, I would like to know more about admission.")}`} target="_blank" className="grid size-12 place-items-center rounded-full bg-blue-500 text-white shadow-xl" aria-label="WhatsApp"><MessageCircle/></a><a href={`tel:${siteConfig.admissionPhone}`} className="grid size-12 place-items-center rounded-full bg-blue text-white shadow-xl" aria-label="Call"><Phone/></a></div>
  <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white p-2 shadow-2xl sm:hidden"><a className="flex flex-col items-center gap-1 text-[10px] font-bold text-blue-600" href={`https://wa.me/${siteConfig.whatsapp}`}><MessageCircle size={18}/>WhatsApp</a><a className="flex flex-col items-center gap-1 text-[10px] font-bold text-blue" href={`tel:${siteConfig.admissionPhone}`}><Phone size={18}/>Call Now</a><a className="flex flex-col items-center gap-1 text-[10px] font-bold text-red-600" href="/online-application"><FileText size={18}/>Apply</a></div>
</>}
