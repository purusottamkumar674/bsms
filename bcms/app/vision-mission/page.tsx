import SimpleInfoPage from "@/components/SimpleInfoPage";
export const metadata={title:"Vision & Mission"};
export default function Page(){return <SimpleInfoPage title="Vision & Mission" subtitle="The values and educational direction that shape the college experience." intro="These sections provide a polished frontend framework for the college's verified vision, mission, objectives and institutional values." sections={[
{title:"Our Vision",copy:"To nurture capable, compassionate and ethically grounded healthcare professionals through a strong learning culture.",points:["Excellence in learning","Patient-centered values","Continuous improvement","Social responsibility"]},
{title:"Our Mission",copy:"To provide structured education, practical exposure and a supportive campus environment that encourages professional growth.",points:["Strong academic foundation","Practical skills","Ethical practice","Community awareness"]},
{title:"Core Values & Objectives",copy:"Integrity, empathy, discipline, teamwork, scientific curiosity and lifelong learning remain central to the intended student experience.",points:["Integrity","Compassion","Teamwork","Scientific thinking","Accountability","Respect"]}
]}/>}
