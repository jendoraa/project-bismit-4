import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/component/Searchbar";

export default function Bookmark() {
  return (
    <main className="flex flex-col items-center gap-14">
      <div className="relative flex flex-row w-full h-58 bg-yellow-200 gap-15 px-15 py-23">
        <h2 className="flex font-extrabold text-5xl gap-5 font-Inter">
          <span className="text-blue-400">Good Morning,</span>
          <span className="text-red-400">Ajen</span>
        </h2>
        <SearchBar />
      </div>
      <Image src="/Orang1.png" alt="" width={254} height={317} className="absolute right-6 z-10"/>
      <div className="mt-14 bg-black w-full min-h-150"></div>
    </main>
  );
}


