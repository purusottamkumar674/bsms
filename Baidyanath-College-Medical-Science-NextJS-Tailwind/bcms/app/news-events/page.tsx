import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";
export const metadata={title:"News & Events"};
export default function Page(){return <><PageHero title="News & Events" subtitle="Stay connected with campus activities, seminars, student programs and institutional updates."/><section className="section-pad"><div className="container-site"><SectionHeading kicker="Campus Updates" title="Latest news & upcoming events" copy="These are frontend demo entries. In Phase 2, news and event content can be published dynamically from the admin panel."/><div className="mb-6 flex flex-wrap gap-2">{["All","Latest News","Upcoming Events","Past Events"].map((x,i)=><button key={x} className={`rounded-full px-4 py-2 text-xs font-bold ${i===0?"bg-blue text-white":"bg-slate-100 text-slate-600"}`}>{x}</button>)}</div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{news.map(n=><NewsCard key={n.id} item={n}/>)}</div></div></section></>}
