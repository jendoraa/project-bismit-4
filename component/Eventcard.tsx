'use client'; 

import { EventData } from '@/data/event';

interface EventCardProps {
  data: EventData;
  colorClass: string;
  textColor?: string;
  onViewDetail: () => void;
}

export default function EventCard({ data, colorClass, textColor, onViewDetail }: EventCardProps) {
  
  return (
    <div className={`w-96 h-60 relative rounded-3xl shadow-lg`}>
      <div className={`w-full h-full p-4 flex flex-col justify-between ${colorClass} rounded-3xl`}>
        <div>
            <div className="flex justify-between items-start mb-1">
                <h3 className={`text-3xl font-bold leading-tight line-clamp-1 ${textColor || 'text-white'}`}>
                    {data.title}
                </h3>
            </div>
            <p className={`text-xl opacity-90 font-medium line-clamp-1 leading-snug ${textColor || 'text-white'}`}>
                {data.subtitle}
            </p>
        </div>

        <div className={`flex flex-col gap-x-3 gap-y-1 text-[13px] font-semibold opacity-90 ${textColor || 'text-white'}`}>
          <div className="flex items-center gap-1"><span>🕒</span> {data.time}</div> 
          <div className="flex items-center gap-1"><span>📅</span> {data.date}</div>
          <div className="flex items-center gap-1"><span>📍</span> {data.location}</div>
          <div className="flex items-center gap-1"><span>📞</span> {data.contact}</div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onViewDetail();
          }}
          className={`text-xs font-bold text-right flex justify-end items-center gap-1 ml-auto hover:opacity-80 transition-opacity cursor-pointer ${textColor || 'text-white'}`}
        >
          <span>Details</span>
        </button>

      </div>
    </div>
  );
}