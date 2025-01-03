"use client";
import { ItemProps } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

interface Props {
  item: ItemProps;
}

const Item: React.FC<Props> = ({ item }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div>
      <div>
        <Image
          onLoadingComplete={() => setLoading(false)}
          src={item.imgSrc}
          width={300}
          height={300}
          alt={item.name}
          className={`${loading ? "opacity-0" : "opacity-100"} transition`}
        />
      </div>
      <div className="w-full">
        <h1 className="lg:text-[16px] text-[13px] font-bold mt-3">
          {item.name}
        </h1>
        <div className="flex flex-row items-center gap-1">
          <div className="flex flex-row">
            <Rating
              readonly={true}
              initialValue={item.score}
              emptyClassName="hidden"
              size={22}
              transition
              allowFraction
            />
          </div>
          <p className="text-[#666666] font-normal lg:text-[14px] text-[11px]">
            <span className="text-black">{item.score}/</span>5
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 mt-3">
          <span className="font-bold lg:text-[20px] text-[17px]">
            ${item.price}
          </span>
          {item.old_price && (
            <div className="items-center flex flex-row gap-3">
              <p className="lg:text-[20px] line-through font-bold text-[17px] text-[#999999]">
                ${item.old_price}
              </p>
              <span className="text-[#FF3333] font-medium lg:text-[10px] px-[14px] py-[6px] rounded-full text-[7px] bg-[#FF3333]/10">
                -{item.off}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Item;
