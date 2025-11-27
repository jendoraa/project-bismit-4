import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/component/Searchbar";
import EventCard from "@/component/Eventcard";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-14">
      <div className="relative flex flex-row w-full h-58 bg-yellow-200 gap-15 px-15 py-23">
        <h2 className="flex font-extrabold text-4xl gap-5 font-Inter">
          <span className="text-blue-400">Good Morning,</span>
          <span className="text-red-400">Ajen</span>
        </h2>
        <SearchBar />
      </div>
      <Image src="/KLUGe-5 1.png" alt="" width={254} height={317} className="absolute right-10 z-10"/>
      <div className="flex flex-col mt-14 w-full min-h-150 pl-20 gap-14">
        <div className="flex flex-col gap-10 w-[1271px]">
          <div className="flex items-center justify-between relative w-[1271px]">
            <div className="inline-flex items-center justify-center gap-2 relative shrink-0">
              <h1 className="text-red-400 font-inter text-4xl font-bold -mt-px whitespace-nowrap w-fit">
                What's new?
              </h1>
            </div>
            <Link href="/latest" className="text-xl underline whitespace-nowrap w-fit hover:text-red-600 transition-colors">
            See All
            </Link>
            </div>
          <div className="flex flex-row relative gap-9 max-w-full overflow-x-auto">
            <EventCard/>
            <EventCard/>
            <EventCard/>
          </div>
        </div>
        
        <div className="flex flex-col gap-10 w-[1271px]">
          <div className="flex items-center justify-between relative w-[1271px]">
            <div className="inline-flex items-center justify-center gap-2 relative shrink-0">
              <h1 className="text-orange-300 font-inter text-4xl font-bold -mt-px whitespace-nowrap w-fit">
                Academic
              </h1>
            </div>
            <Link href="/latest" className="text-xl underline whitespace-nowrap w-fit hover:text-orange-300 transition-colors">
            See All
            </Link>
            </div>
          <div className="flex flex-row relative gap-9 max-w-full overflow-x-auto">
            <div className="shrink-0 w-132 h-80 bg-orange-300 rounded-xl text-white shadow-lg">
              tes
            </div>
            <div className="shrink-0 w-132 h-80 bg-orange-300 rounded-xl text-white shadow-lg">
              tes
            </div>
            <div className="shrink-0 w-132 h-80 bg-orange-300 rounded-xl text-white shadow-lg">
              tes
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-10 w-[1271px]">
          <div className="flex items-center justify-between relative w-[1271px]">
            <div className="inline-flex items-center justify-center gap-2 relative shrink-0">
              <h1 className="text-yellow-200 font-inter text-4xl font-bold -mt-px whitespace-nowrap w-fit">
                Scholarship
              </h1>
            </div>
            <Link href="/latest" className="text-xl underline whitespace-nowrap w-fit hover:text-yellow-200 transition-colors">
            See All
            </Link>
            </div>
          <div className="flex flex-row relative gap-9 max-w-full overflow-x-auto">
            <div className="shrink-0 w-132 h-80 bg-yellow-200 rounded-xl text-white shadow-lg">
              tes
            </div>
            <div className="shrink-0 w-132 h-80 bg-yellow-200 rounded-xl text-white shadow-lg">
              tes
            </div>
            <div className="shrink-0 w-132 h-80 bg-yellow-200 rounded-xl text-white shadow-lg">
              tes
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}


