import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <Skeleton className="rounded-none border border-[#a1a1a1] bg-white p-4 md:p-12">
      <Skeleton className="min-h-[25rem] rounded-none bg-[#a1a1a1]"></Skeleton>
      <div className="flex flex-col gap-2 pb-12 pt-8">
        <Skeleton className="h-10 w-full rounded-none bg-[#a1a1a1]"></Skeleton>
        <Skeleton className="h-10 w-full rounded-none bg-[#a1a1a1]"></Skeleton>
      </div>
      <div className="flex w-[50%] gap-2">
        <Skeleton className="h-6 w-[50%] rounded-none bg-[#a1a1a1]"></Skeleton>
        <Skeleton className="h-6 w-[50%] rounded-none bg-[#a1a1a1]"></Skeleton>
      </div>
    </Skeleton>
  );
}
