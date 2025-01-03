import { Button, buttonVariants } from "@/components/ui/button";
import { ITEMS } from "@/lib";
import { ItemProps } from "@/lib/types";
import localFont from "next/font/local";
import CarouselComponent from "./Carousel";
import MaxWidthWrapper from "./MaxWidthWrapper";

const integralBold = localFont({ src: "../../assets/IntegralCF-Bold.woff" });

const NewArrivals = () => {
  const newArrivals: ItemProps[] = ITEMS.filter(
    (item) => item.category === "New Arrivals"
  );

  return (
    <MaxWidthWrapper className="py-[40px]">
      <section className="flex flex-col items-center justify-center">
        <h1
          className={`font-extrabold text-[36px] leading-8 text-center ${integralBold.className}`}
        >
          New Arrivals
        </h1>
        <div className="w-1/2 mx-auto mt-10">
          <CarouselComponent items={newArrivals} />
        </div>
        <Button
          className={buttonVariants({
            variant: "outline",
            className: "rounded-full text-black w-48 place-self-center my-10",
          })}
        >
          View All
        </Button>
      </section>
    </MaxWidthWrapper>
  );
};
export default NewArrivals;
