import { Separator } from "@/components/ui/separator";
import Hero from "./components/Hero";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import Brands from "./components/Brands";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <MaxWidthWrapper>
        <Separator />
      </MaxWidthWrapper>
      <TopSelling />
    </>
  );
}
