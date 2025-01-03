import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="relative w-full">
      <Image
        className="absolute top-[25%] left-0"
        width={44}
        height={44}
        src="/sparkle.png"
        alt="sparkle"
      />
      <Image
        className="absolute top-[7%] right-0"
        width={76}
        height={76}
        src="/sparkle.png"
        alt="sparkle"
      />
      <Image
        priority={true}
        className="w-full object-cover h-full"
        width={4000}
        height={4000}
        src="/main-bg.png"
        alt="mobile hero image"
      />
    </div>
  );
};
export default HeroImages;
