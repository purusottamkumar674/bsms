import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
export const metadata={title:"Courses"};
export default function Page(){return <><PageHero title="Our Courses" subtitle="Explore program information, eligibility, duration and admission pathways in a clean frontend-ready layout."/><section className="section-pad"><div className="container-site"><SectionHeading kicker="Academics" title="Programs designed for healthcare careers" copy="The cards below use local TypeScript data. In Phase 2, the same UI can receive course information from an API or database."/><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{courses.map(c=><CourseCard key={c.slug} course={c}/>)}</div></div></section></>}
