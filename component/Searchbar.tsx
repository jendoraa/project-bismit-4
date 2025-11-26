import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="flex items-center rounded-4xl w-155 h-12 bg-white px-5 mr-4 z-20">
      <input
        type="text"
        placeholder="Search..."
        className="flex w-full"
      />
      <Image src="/search.svg" alt="Search" width={40} height={40} className="ml-auto" />
    </div>
  );
}
