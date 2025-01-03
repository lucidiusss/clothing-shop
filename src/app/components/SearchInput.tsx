import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative flex w-full flex-row items-center justify-center">
      <Input
        type="text"
        className="bg-[#f0f0f0] !border-transparent !transition-all pl-10 rounded-full !outline-transparent !ring-transparent"
        placeholder="Search for products..."
      />
      <div className="absolute top-0 w-10 h-full flex items-center justify-center left-0">
        <SearchIcon size={20} color="#909090" />
      </div>
    </div>
  );
};
export default SearchInput;