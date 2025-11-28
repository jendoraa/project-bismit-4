// components/EventCard.tsx
import React from 'react';

// Definisikan tipe data agar autocomplete jalan (Opsional tapi disarankan)
interface EventData {
  title: string;
  subtitle: string;
  time: string;
  date: string;
  location: string;
  contact: string;
  description?: string;
}

interface EventCardProps {
  data: EventData;
  colorClass: string;
  textColor: string;
}

export default function EventCard({ data, colorClass, textColor }: EventCardProps) {
  return (
    <div className={`w-120 shrink-0 px-8 py-11 rounded-xl ${textColor} relative ${colorClass}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold leading-tight">{data.title}</h3>
      </div>
      
      <p className="text-xs mb-6 opacity-90 font-medium line-clamp-2 min-h-[2.5em]">
        {data.subtitle}
      </p>

      <div className="space-y-2 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <span>🕒</span> {data.time}
        </div>
        <div className="flex items-center gap-2">
          <span>📅</span> {data.date}
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span> {data.location}
        </div>
        <div className="flex items-center gap-2 mt-4 opacity-80">
          <span>👤</span> {data.contact}
        </div>
      </div>

      <button className="absolute bottom-5 right-5 text-xs underline font-bold hover:text-gray-200 transition">
        Details
      </button>
    </div>
  );
}