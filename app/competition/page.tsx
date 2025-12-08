'use client'; // 1. Wajib

import React, { useState } from 'react';
import Image from "next/image";
import SearchBar from "@/component/Searchbar";
import EventCard from "@/component/Eventcard";
import DetailCard from "@/component/Detailcard"; // 2. Import DetailCard
import { eventSections, EventData } from '@/data/event';

export default function Latest() {

  // --- 3. SETUP STATE (Sama persis) ---
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedTextColor, setSelectedTextColor] = useState<string>("");

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

  // Fungsi Helper
  const handleOpenModal = (item: EventData, color: string, textColor: string) => {
      setSelectedEvent(item);
      setSelectedColor(color);
      setSelectedTextColor(textColor);
  };

  return (
    <main className="flex flex-col items-start gap-14 bg-white relative">
      
      {/* --- 4. PASANG MODAL --- */}
      <DetailCard 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
        data={selectedEvent}
        colorClass={selectedColor}
        textClass={selectedTextColor} 
      />

      {/* Header Khusus Competition (TETAP SAMA) */}
      <div className="flex flex-row w-full h-58 bg-green-300 pl-10 pr-15 items-center justify-between">
        <Image src="/KLUGe-5 1.png" alt="" width={254} height={317} className="z-10 -mb-20" />
        <h2 className="flex font-extrabold text-4xl gap-3 font-Inter shrink-0">
          <span className="text-blue-900 -ml-20">Competition</span>
        </h2>
        <SearchBar />
      </div>

      <div className="w-full min-h-150 pl-10 pr-20 mt-10 mb-20">
        {visibleSections.map((section, index) => {
            
            // --- 5. DEFINISI VARIABEL ---
            const sectionColor = getThemeColor(section.theme);
            const customTextColor = "text-blue-900"; // Warna teks khusus Competition

            return (
                <section key={index} className="flex flex-col gap-4">
                  <div className="grid grid-cols-3 justify-between gap-15"> 
                    {section.items.map((item) => (
                      <div key={item.id}>
                        
                        {/* --- 6. EVENT CARD DENGAN LOGIKA KLIK --- */}
                        <EventCard 
                          data={item} 
                          colorClass={sectionColor} 
                          textColor={customTextColor}
                          
                          // Logika klik:
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