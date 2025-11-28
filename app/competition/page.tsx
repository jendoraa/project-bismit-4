import Image from "next/image";
import SearchBar from "@/component/Searchbar";
import EventCard from "@/component/Eventcard";
import { eventSections } from '@/data/event';

export default function Latest() {
  const allowedHeaders = [
    "Competition",
  ];

  const visibleSections = eventSections.filter(section => 
    allowedHeaders.includes(section.title)
  );

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

  return (
    <main className="flex flex-col items-start gap-14">
      <div className="flex flex-row w-full h-58 bg-green-300 pl-10 pr-15 items-center justify-between">
        <Image src="/KLUGe-5 1.png" alt="" width={254} height={317} className="z-10 -mb-20" />
        <h2 className="flex font-extrabold text-4xl gap-3 font-Inter shrink-0">
          <span className="text-blue-900 -ml-20">Competition</span>
        </h2>
        <SearchBar />
      </div>

      <div className="w-full min-h-150 pl-40 pr-32 mt-10 mb-20">
        {visibleSections.map((section, index) => (
        <section key={index} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 justify-between gap-15"> 
            {section.items.map((item) => (
              <div key={item.id}>
                <EventCard 
                  data={item} 
                  colorClass={getThemeColor(section.theme)} 
                  textColor="text-blue-900"
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