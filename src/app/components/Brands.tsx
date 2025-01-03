import CalvinKlein from "./Icons/CalvinKlein";
import Gucci from "./Icons/Gucci";
import Prada from "./Icons/Prada";
import Versache from "./Icons/Versache";
import Zara from "./Icons/Zara";

const Brands = () => {
  return (
    <div className="w-full  bg-[#000000] py-[40px] flex flex-wrap lg:flex-nowrap gap-5 justify-center lg:justify-between items-center mx-auto  px-[16px] md:px-[100px]">
      <Gucci />
      <Zara />
      <Versache />
      <Prada />
      <CalvinKlein />
    </div>
  );
};
export default Brands;
