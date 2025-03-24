import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

interface UnderlineAnimationProps extends PropsWithChildren {
  className?: string;
}

const UnderlineAnimation = ({
  children,
  className,
}: UnderlineAnimationProps) => {
  return (
    <div className={cn("group relative overflow-hidden text-black", className)}>
      {children}
      <span className="absolute bottom-0 left-0 h-[2px] w-full translate-x-[-100%] bg-primary transition-transform duration-300 group-hover:translate-x-0"></span>
    </div>
  );
};

export default UnderlineAnimation;
