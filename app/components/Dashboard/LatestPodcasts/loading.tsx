import SkeletonCard from "./SkeletonCard";

export default function Loading() {
  return (
    <div className="mx-auto grid w-full max-w-[95rem] border-collapse grid-cols-1 border border-black md:grid-cols-3 xl:grid-cols-3">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
