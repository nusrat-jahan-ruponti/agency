import project1 from "../../assets/project.png";
import project2 from "../../assets/project (1).png";
import project3 from "../../assets/project (2).png";
import project4 from "../../assets/project (3).png";
import SectionHeading from '../ui/SectionHeading'
import Button from "../ui/Button";
import Container from "../ui/Container";


export default function FeaturedProjects() {
  return (
    <Container className="bg-white dark:bg-gray-900 pb-0 pt-2 font-['Manrope',sans-serif]">
      <div className="mx-auto max-w-[1296px]">
       
        <SectionHeading title="Featured Projects" description="We create websites and mobile apps, marketing materials, branding, web design, UX/UI design and illustrations." />

       
        <div className="mt-11 grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-0">         
          <div className="relative aspect-[416/856] overflow-hidden md:row-span-2 md:aspect-auto">
            <img src={project1} alt="" className="absolute " />
          </div>

          
          <div className="relative aspect-square overflow-hidden">
            <img src={project2} alt="" className="absolute" />
          </div>

          <div className="relative aspect-square overflow-hidden">
            <img src={project3} alt="" className="absolute" />
          </div>

          
         <div className="relative aspect-[2/1] overflow-hidden md:col-span-2 md:col-start-2 md:aspect-[856/416]">
            <img src={project4} alt="" className="absolute" />
          </div>
        </div>

      
        <div className="mt-10 text-center mb-25">
        <Button>Explore all</Button>
        </div>
      </div>
    </Container>
  );
}