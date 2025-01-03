import { Separator } from "@/components/ui/separator";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <MaxWidthWrapper>
        <Separator className="" />
      </MaxWidthWrapper>
      <TopSelling />
    </>
  );
}
