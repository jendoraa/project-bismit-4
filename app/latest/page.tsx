import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/component/Searchbar";

export default function Latest() {
  return (
    <main className="flex flex-col items-start gap-14">
      <div className="flex flex-row items-center w-full h-58 bg-red-400 gap-10 px-10 py-23">
        <Image src="/KLUGe-6 1.png" alt="" width={254} height={317} className="mt-24 z-10"/>
        <h2 className="flex items-center font-extrabold text-4xl font-Inter">
          <span className="text-yellow-400">Latest Information</span>
        </h2>

        <SearchBar />
      </div>

      <div className="mt-14  w-full min-h-150"></div>
    </main>
  );
}
