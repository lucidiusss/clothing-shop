import localFont from "next/font/local";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ITEMS } from "@/lib";
import Item from "./Item";

const integralBold = localFont({ src: "../../assets/IntegralCF-Bold.woff" });

const TopSelling = () => {
  const topSelling = ITEMS.filter((item) => item.category === "Top Selling");

  return (
    <MaxWidthWrapper className="py-[40px]">
      <section className="flex flex-col items-center justify-center">
        <h1
          className={`font-extrabold text-[36px] leading-8 text-center ${integralBold.className}`}
        >
          New Arrivals
        </h1>
        <div className="w-1/2 mx-auto mt-10">
          <Carousel>
            <CarouselContent>
              {topSelling.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Item item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
export default TopSelling;
