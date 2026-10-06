import SimpleInfoPage from "@/components/SimpleInfoPage";
export const metadata={title:"Scholarships"};
export default function Page(){return <SimpleInfoPage title="Scholarships & Student Support" subtitle="A dedicated frontend space for verified scholarship schemes, eligibility and application guidance." intro="Official scholarship names, values and deadlines should be added only after verification. The current interface demonstrates the final presentation and information architecture." sections={[
{title:"Merit Support",copy:"Frontend placeholder for merit-based assistance, eligibility criteria and application instructions.",points:["Eligibility criteria","Required documents","Application timeline","Selection process"]},
{title:"Need-based Assistance",copy:"A section for verified financial support programs intended for eligible students and families.",points:["Income documentation","Academic standing","Application review","Support guidance"]},
{title:"Government & External Schemes",copy:"This area can later list verified state, central or external scholarship programs with links and downloadable documents.",points:["Official scheme link","Deadline","Eligibility","Required certificates"]}
]}/>}
