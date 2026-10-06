"use client";
import { useMemo,useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { departments } from "@/data/departments";
import { faculty } from "@/data/faculty";
import { notices } from "@/data/notices";
import { news } from "@/data/news";
const base=[...courses.map(x=>({title:x.name,type:"Course",href:`/courses/${x.slug}`})),...departments.map(x=>({title:x.name,type:"Department",href:`/departments/${x.slug}`})),...faculty.map(x=>({title:x.name,type:`Faculty · ${x.department}`,href:"/faculty"})),...notices.map(x=>({title:x.title,type:"Notice",href:"/notices"})),...news.map(x=>({title:x.title,type:x.category,href:"/news-events"}))];
export default function Page(){const [q,setQ]=useState("");const results=useMemo(()=>q.trim()?base.filter(x=>`${x.title} ${x.type}`.toLowerCase().includes(q.toLowerCase())):base.slice(0,8),[q]);return <><PageHero title="Search" subtitle="Search local frontend data across courses, departments, faculty, notices and campus updates."/><section className="section-pad"><div className="container-site max-w-4xl"><div className="relative"><SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search courses, departments, faculty, notices..." className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 text-base shadow-soft outline-none focus:border-blue focus:ring-4 focus:ring-blue/10"/></div><div className="mt-8 space-y-3">{results.map((r,i)=><Link key={`${r.title}-${i}`} href={r.href} className="card card-hover flex items-center gap-4 p-4"><div className="grid size-10 place-items-center rounded-xl bg-skysoft text-blue"><SearchIcon size={17}/></div><div className="flex-1"><h3 className="font-black text-navy">{r.title}</h3><p className="text-xs font-semibold text-slate-500">{r.type}</p></div><ArrowRight className="text-blue" size={18}/></Link>)}{results.length===0&&<div className="rounded-2xl bg-slate-50 p-8 text-center text-slate-500">No local frontend result found.</div>}</div></div></section></>}
