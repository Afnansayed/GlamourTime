import Banner from "@/components/HomePage/Banner/Banner";
import Chair from "@/components/HomePage/Chair/Chair";
import Copun from "@/components/HomePage/copun/Copun";
import Interior from "@/components/HomePage/interior/Interior";
import PopularServices from "@/components/HomePage/popuparServices/PopularServices";

 

export default function Home() {
  return (
    <div>
          <Banner/>
          <PopularServices/>
          <Copun/>
          <Interior/>
          <Chair/>
    </div>
  );
}
