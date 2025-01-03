import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("mx-auto w-full px-[16px] lg:px-[100px]", className)}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
