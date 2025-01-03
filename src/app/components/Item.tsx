import Image from "next/image";

interface ItemProps {
  id: number;
  name: string;
  imgSrc: string;
  price: string;
  old_price?: string;
  off?: string;
  score: string;
  category: string;
}

interface Props {
  item: ItemProps;
}

const Item: React.FC<Props> = ({ item }) => {
  console.log(item);

  return (
    <div>
      <div>
        <Image src={item.imgSrc} width={300} height={300} alt={item.name} />
      </div>
      <div>
        <h1>{item.name}</h1>
      </div>
    </div>
  );
};
export default Item;
