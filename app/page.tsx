import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/component/Searchbar";
import EventCard from "@/component/Eventcard";
import { eventSections } from '@/data/event';

export default function Home() {

  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'red': return 'bg-red-400';
      case 'orange': return 'bg-orange-200';
      case 'yellow': return 'bg-yellow-200';
      case 'green': return 'bg-green-300';
      case 'blue': return 'bg-blue-400';
      case 'pink': return 'bg-pink-300';
      default: return 'bg-gray-500';
    }
  };

  const getTextColor =  (text: string) => {
    switch (text) {
      case 'dark orange': return 'text-orange-900';
      case 'dark red': return 'text-red-900';
      case 'dark green': return 'text-green-900';
      case 'dark blue': return 'text-blue-900';
      case 'red': return 'text-red-500';
      case 'black': return 'text-black';
      default: return 'text-white';
    }
  };
  
  return (
    <main className="flex flex-col items-center gap-14">
      <div className="relative flex flex-row w-full h-58 bg-yellow-200 px-15 items-center justify-between">
        <div className="flex flex-row items-center gap-10">
          <h2 className="flex font-extrabold text-4xl gap-2 font-Inter">
            <span className="text-blue-400">Good Morning,</span>
            <span className="text-red-400">Ajen</span>
          </h2>
          <SearchBar />
        </div>
        <Image src="/KLUGe-5 1.png" alt="" width={254} height={317} className="absolute right-15 -bottom-20 z-10"/>
      </div>
      <div className="flex flex-col mt-6 w-full min-h-150 gap-14 mb-15">
        {eventSections.map((section, index) => (
        <section key={index} className="flex flex-col gap-4">
          
          <div className="flex justify-between items-end px-20">
            <h2 className={`text-2xl font-extrabold ${getTextColor(section.text)} `}>
              {section.title}
            </h2>
            <button className="text-sm text-gray-400 font-medium underline">See All</button>
          </div>

          <div className="flex ml-16 gap-6 overflow-x-auto pb-4 px-2">
            
            {section.items.map((item) => (
              <div key={item.id} className="shrink-0 first:pl-2 last:pr-2">
                <EventCard 
                  data={item} 
                  colorClass={getThemeColor(section.theme)}
                  textColor={getTextColor(section.text)}
                />
              </div>
            ))}

          </div>

        </section>
      ))}
      </div>
    </main>
  );
}
