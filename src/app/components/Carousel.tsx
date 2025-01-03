import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Item from "./Item";
import type { ItemProps } from "@/lib/types";

const CarouselComponent = ({ items }: { items: ItemProps[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item: ItemProps) => (
          <CarouselItem key={item.name} className="md:basis-1/2 lg:basis-1/3">
            <Item item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselComponent;
