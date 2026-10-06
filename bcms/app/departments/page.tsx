import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DepartmentCard from "@/components/DepartmentCard";
import { departments } from "@/data/departments";
export const metadata={title:"Departments"};
export default function Page(){return <><PageHero title="Our Departments" subtitle="Browse academic and clinical departments through a scalable card-based interface."/><section className="section-pad"><div className="container-site"><SectionHeading kicker="Academic Directory" title="Departments across medical education" copy="Each department links to a reusable detail route ready for future faculty, facilities, activities and backend-managed content."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{departments.map(d=><DepartmentCard key={d.slug} department={d}/>)}</div></div></section></>}
