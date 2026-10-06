import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GalleryClient from "@/components/GalleryClient";
export const metadata={title:"Photo Gallery"};
export default function Page(){return <><PageHero title="Photo Gallery" subtitle="Explore campus, classrooms, laboratories, hospital, student activities and events."/><section className="section-pad"><div className="container-site"><SectionHeading kicker="Campus Moments" title="Photo Gallery" copy="Use category filters and click any image to open the full-screen lightbox with next and previous controls."/><GalleryClient/></div></section></>}
