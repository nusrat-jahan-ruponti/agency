import AboutIntro from "../Components/section/About/Aboutintro";
import VideoCard from "../Components/section/About/VideoCard";
import Features from "../Components/section/Feature";
import Awards from "../Components/section/Awards";
import ClientReviews from "../Components/section/About/Clientreviews";
import Leadership from "../Components/section/About/Leadership";
import Contact from "../Components/section/Contact"

export default function About() {
  return (
    <main>
        <AboutIntro/>
        <Features/>
        <VideoCard/>
        <Awards/>
        <ClientReviews/>
        <Leadership/>
        <Contact/>
    
    </main>
  );
}