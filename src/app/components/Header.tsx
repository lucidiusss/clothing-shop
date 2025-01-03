import { Menu, Search, ShoppingCart, User } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SearchInput from "./SearchInput";
const integralBold = localFont({ src: "../../assets/IntegralCF-Bold.woff" });

const Header: React.FC = () => {
  return (
    <MaxWidthWrapper className="my-3">
      <header>
        <nav>
          <ul className="flex flex-row items-center w-full justify-between lg:justify-normal">
            <div className="flex flex-row items-center gap-3">
              <li className="md:hidden block">
                <Menu className="w-6 h-6" />
              </li>
              <li>
                <Link
                  className={`uppercase font-bold text-[24px] md:text-[32px] leading-none ${integralBold.className}`}
                  href="/"
                >
                  Shop.co
                </Link>
              </li>
            </div>

            <div className="flex-row  min-w-fit mx-10 items-center gap-5 hidden lg:flex">
              <li>
                <Link
                  className="md:text-[16px] font-normal hover:underline"
                  href="/shop"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[16px] font-normal hover:underline"
                  href="/on-sale"
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[16px] font-normal hover:underline"
                  href="/new-arrivals"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[16px] font-normal hover:underline"
                  href="/brands"
                >
                  Brands
                </Link>
              </li>
            </div>
            <SearchInput />
            <div className="flex ml-10 min-w-fit flex-row items-center gap-2">
              <div className="flex items-center flex-row lg:hidden">
                <li>
                  <Search
                    color="black"
                    className="w-6 h-6 lg:w-[20px] lg:h-[20px]"
                  />
                </li>
              </div>
              <div className="flex flex-row items-center gap-2 justify-center">
                <li>
                  <ShoppingCart
                    color="black"
                    className="w-6 h-6 lg:w-[20px] lg:h-[20px]"
                  />
                </li>
                <li>
                  <User
                    color="black"
                    className="w-6 h-6 lg:w-[20px] lg:h-[20px]"
                  />
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </MaxWidthWrapper>
  );
};

export default Header;
