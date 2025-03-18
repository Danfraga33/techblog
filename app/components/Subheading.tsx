import { Link } from "@remix-run/react";

type SubheadingProps = {
  children: React.ReactNode;
  className: string;
  url: string;
  linkText: string;
};

export default function Subheading({
  children,
  className,
  url,
  linkText,
}: SubheadingProps) {
  return (
    <div className="flex justify-between">
      <h2
        className={`mx-auto mb-8 mt-4 w-full max-w-[95rem] md:mb-16 md:mt-12 ${className}`}
      >
        {children}
      </h2>
      <Link
        className="flex w-full items-center justify-end gap-2 font-semibold uppercase"
        to={url}
      >
        <p className="hidden text-lg font-semibold uppercase sm:block md:text-[2rem]">
          {linkText}
        </p>
        <img
          className="h-fit w-fit"
          src="/icons/ri_arrow-right-line.svg"
          alt="A right black arrow"
        />
      </Link>
    </div>
  );
}
