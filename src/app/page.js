import Banner from "@/components/HomePage/Banner/Banner";
import Chair from "@/components/HomePage/Chair/Chair";
import Copun from "@/components/HomePage/copun/Copun";
import Interior from "@/components/HomePage/interior/Interior";
import OurTeam from "@/components/HomePage/OurTeam/OurTeam";
import PopularServices from "@/components/HomePage/popuparServices/PopularServices";
import Question from "@/components/HomePage/question/Question";
import Testimonial from "@/components/HomePage/testimonial/Testimonial";
import Footer from '@/components/sheared/Footer/Fotter';
 

export default function Home() {
  return (
    <div>
          <Banner/>
          <PopularServices/>
          <Copun/>
          <Interior/>
          <Chair/>
          <OurTeam/>
          <Question/>
          <Testimonial/>
          <Footer/>
    </div>
  );
}
