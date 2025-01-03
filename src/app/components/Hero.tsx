import { Button, buttonVariants } from "@/components/ui/button";
import localFont from "next/font/local";
const integralBold = localFont({ src: "../../assets/IntegralCF-Bold.woff" });

const Hero = () => {
  return (
    <>
      <main className="bg-[#F2F0F1] py-[40px] h-full mx-auto w-full px-[16px] lg:px-[100px]">
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col max-w-[600px] gap-4">
            <h1
              className={`font-extrabold text-[36px] lg:text-[64px] leading-8 md:leading-none ${integralBold.className}`}
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#000]/50 text-[14px] font-medium">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div className="mt-5">
            <Button
              className={buttonVariants({
                size: "lg",
                className: "rounded-full w-full md:w-48",
              })}
            >
              Shop Now
            </Button>
          </div>
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start items-center mt-5">
            <div className="flex-col flex">
              <p className="text-black text-[24px] lg:text-[40px] font-bold">
                200+
              </p>
              <span className="font-medium text-[12px] lg:text-[16px] text-[#000]/60">
                International Brands
              </span>
            </div>
            <div className="w-px h-[50px] lg:h-[75px] bg-[#000]/10" />
            <div className="flex-col flex">
              <p className="text-black text-[24px] lg:text-[40px] font-bold">
                2,000+
              </p>
              <span className="font-medium text-[12px] lg:text-[16px] text-[#000]/60">
                High-Quality Products
              </span>
            </div>
            <div className="w-px h-[50px] lg:h-[75px] bg-[#000]/10 hidden lg:block" />
            <div className="min-w-full lg:min-w-fit flex flex-col items-center justify-center">
              <p className="text-black text-[24px] lg:text-[40px] font-bold">
                30,000+
              </p>
              <span className="font-medium text-[12px] lg:text-[16px] text-[#000]/60">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;
