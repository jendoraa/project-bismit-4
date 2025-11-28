import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-78 bg-orange-300 flex items-center px-20 py-10">
      <div className="w-108 h-full flex flex-col justify-between">
        <div className="flex flex-row gap-0 items-center">
            <Image src="/Logo.png" alt="Logo Proek" width={42} height={52} />
            <Image src="/LogoName.png" alt="Logo Name Proek" width={106} height={32} />
        </div>
        <div className="flex flex-col gap-3 -mt-5 font-Inter text-xl font-medium text-white">
            Brought to you with ❤️ by SBF Bismit Group 4
            <span className="text-sm">
                Designed by Cindy & Kayla <br />
                Developed by Rajendra & Damica <br />
                Managed by Nadhirah
            </span>
        </div>
        <div className="flex flex-row w-33 h-12 justify-between items-center bg-white px-4 py-2.5 rounded-4xl cursor-pointer">
            <Image src="/arrow-up.svg" alt="back to top" width={20} height={20} />
            <span className="font-Inter text-sm font-medium text-blue-600">Back to Top</span>
        </div>
       </div>
    </footer>
  );
}