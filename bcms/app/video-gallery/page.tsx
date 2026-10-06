import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VideoClient from "@/components/VideoClient";
export const metadata={title:"Video Gallery"};
export default function Page(){return <><PageHero title="Video Gallery" subtitle="Campus tours, facilities, clinical learning and student-life videos presented inside the website."/><section className="section-pad"><div className="container-site"><SectionHeading kicker="Watch & Explore" title="Video Gallery" copy="The modal player supports frontend video data and is ready for future YouTube, Vimeo or direct-video URLs from the backend."/><VideoClient/></div></section></>}
