'use client';

import React, { useState } from 'react';
import DetailCard from "@/component/Detailcard";
import Image from "next/image";
import SearchBar from "@/component/Searchbar";
import EventCard from "@/component/Eventcard";
import { eventSections, EventData } from '@/data/event';

export default function Latest() {

  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedTextColor, setSelectedTextColor] = useState<string>("");

  const allowedHeaders = [
    "What's new?",
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

  const handleOpenModal = (item: EventData, color: string, textColor: string) => {
      setSelectedEvent(item);
      setSelectedColor(color);
      setSelectedTextColor(textColor);
  };

  return (
    <main className="flex flex-col items-start gap-14 bg-white relative">

      <DetailCard 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
        data={selectedEvent}
        colorClass={selectedColor}
        textClass={selectedTextColor} 
      />

      <div className="flex flex-row w-full h-58 bg-red-400 pl-10 pr-15 items-center justify-between">
        <Image src="/KLUGe-6 1.png" alt="" width={254} height={317} className="z-10 -mb-20" />
        <h2 className="flex font-extrabold text-4xl gap-3 font-Inter shrink-0">
          <span className="text-yellow-400 -ml-20">Latest Information</span>
        </h2>
        <SearchBar />
      </div>

      <div className="w-full min-h-150 pl-10 pr-20 mt-10 mb-20">
        {visibleSections.map((section, index) => { // 1. BUKA KURUNG KURAWAL
            
            // 2. DEFINISIKAN VARIABEL DI SINI
            const sectionColor = getThemeColor(section.theme);
            const customTextColor = "text-orange-900"; // Sesuaikan warna teks yang diinginkan

            return ( // 3. TAMBAHKAN RETURN
                <section key={index} className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 justify-between gap-15"> 
                    {section.items.map((item) => (
                      <div key={item.id}>
                        <EventCard 
                          data={item} 
                          // Gunakan variabel yang sudah didefinisikan
                          colorClass={sectionColor} 
                          textColor={customTextColor} 

                          // Sekarang variabel ini sudah dikenali
                          onViewDetail={() => handleOpenModal(item, sectionColor, customTextColor)}
                        />
                      </div>
                    ))}
                  </div>
                </section>
            );
        })}
      </div>
    </main>
  );
}