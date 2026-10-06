import SimpleInfoPage from "@/components/SimpleInfoPage";
export const metadata={title:"Hostel"};
export default function Page(){return <SimpleInfoPage title="Hostel & Residential Life" subtitle="Comfortable, safe and student-focused residential spaces near the academic environment." intro="This page provides a complete frontend structure for boys and girls hostels, rooms, mess services, security, rules, fees and gallery content." image="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1800&q=80" sections={[
{title:"Boys & Girls Hostel",copy:"Separate residential information can be displayed with room types, capacity and facilities once verified.",points:["Room facilities","Common areas","Study-friendly environment","Warden support"],image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"},
{title:"Mess & Dining",copy:"A dedicated area for meal timings, dining rules, menu information and hygiene standards.",points:["Dining hall","Meal schedules","Hygiene practices","Student feedback"]},
{title:"Safety & Rules",copy:"Hostel entry rules, visitor policies, emergency contacts and fee information can later be managed from the admin panel.",points:["Security","Attendance","Emergency support","Resident guidelines"]}
]}/>}
