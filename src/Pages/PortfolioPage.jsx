import Pagination from "../Components/ui/Pagination";
import CtaBanner from "../Components/section/Portfolio/Ctabanner";
import Header from "../Components/section/Portfolio/Header";
import ProjectGrid from "../Components/section/Portfolio/ProjectGrid";

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <Header />
      <ProjectGrid/>
      <Pagination align="left"/>
      <CtaBanner/>   
    </main>
  );
}