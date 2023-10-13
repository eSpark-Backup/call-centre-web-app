import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Home3Blog from "../components/blog/Home3Blog";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/ContactUsSection";
import Feature4 from "../components/features/Feature4";
import Partnar4 from "../components/partner/PartnarSlider";
import Testimonial3 from "../components/testimonial/Testimonial3";

function AboutPage() {
  return (
    <>
      <Breadcrumb
        pageList="About"
        title="Get To Know About Softconic"
        pageName="ABOUT"
      />
      <About3 />
      <Choose6 />
      <Feature4 />
      <Partnar4 />
      <Testimonial3 />
      <Home3Team />
      <Home3Contact />
      <Home3Blog />
    </>
  );
}

export default AboutPage;
