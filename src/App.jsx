
import Navbar from "./Components/layout/Navbar";
import ServiceNavbar from "./Components/layout/ServiceNavbar";
import Footer from "./Components/section/Footer";
import Breadcrumb from "./Components/ui/Breadcrumb";
import Home from "./Pages/HomePage.jsx";
import Services from "./Pages/ServicesPage.jsx";
import ServiceDetails from "./Pages/ServiceDetails.jsx";
import Portfolio from "./Pages/PortfolioPage.jsx";
import About from "./Pages/AboutPage.jsx";
import Blog from "./Pages/BlogPage.jsx";
import SinglePostPage from "./Pages/SinglePostPage.jsx";
import Contact from "./Pages/ContactPage.jsx";
import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import NotFound from "./Pages/NotFoundPage.jsx";

function MainLayout() {
  const { pathname } = useLocation();


  const showServiceNavbar =
    pathname.startsWith("/services") ||
    ["/about", "/contact"].includes(pathname.toLowerCase());

  return (
    <>
      {showServiceNavbar ? <ServiceNavbar /> : <Navbar />}
      <Breadcrumb />
      <Outlet />
      <Footer />
    </>
  );
}


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
   <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SinglePostPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;
