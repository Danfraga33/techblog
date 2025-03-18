type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};

export default function PageTitle({
  children,
  className,
  imgSrc,
  imgAlt,
}: PageTitleProps) {
  return (
    <div className="mx-auto w-full max-w-[95rem]">
      <h1 className={className}>asd{children}</h1>
      {/* {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full py-6 md:py-12"
        />
      )} */}
    </div>
  );
}
