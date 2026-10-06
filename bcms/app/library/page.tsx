import SimpleInfoPage from "@/components/SimpleInfoPage";
export const metadata={title:"Library"};
export default function Page(){return <SimpleInfoPage title="Central Library" subtitle="A focused learning space for books, journals, references and digital resources." intro="The library frontend is designed to present verified collection statistics, timings, rules, digital resources and media once official data is available." image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=80" sections={[
{title:"Learning Resources",copy:"Present books, journals, reference materials and digital resources in an organized student-friendly interface.",points:["Textbooks","Reference books","Journals","Digital resources"],image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"},
{title:"Reading & Study Areas",copy:"Highlight quiet reading zones, group study support and library services for students and faculty.",points:["Reading hall","Issue / return desk","Study support","Resource guidance"]},
{title:"Library Timings & Rules",copy:"This section is ready for verified opening hours, membership guidelines, lending rules and digital access instructions."}
]}/>}
