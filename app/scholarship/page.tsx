import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/component/Searchbar";

export default function Scholarship() {
  return (
    <main className="flex flex-col items-center gap-14">
      <div className="relative flex flex-row w-full h-58 bg-yellow-200 gap-15 px-15 py-23">
        <h2 className="flex font-extrabold text-5xl gap-5 font-Inter">
          <span className="text-blue-400">Scholarship</span>
        </h2>
        <SearchBar />
      </div>
      <Image src="/" alt="" width={254} height={317} className="absolute right-6 z-10"/>
      <div className="mt-14  w-full min-h-150"></div>

      <div className="relative w-full h-screen"> 
        <Image src="/soon.jpg" alt="Dalam Pembangunan" width={500} height={300} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-auto"/>
      </div>
    </main>
  );
}


