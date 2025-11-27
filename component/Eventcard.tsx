// components/EventCard.tsx

import React from 'react';

interface EventCardProps {
  title: string;
  subtitle: string;
  time: string;
  dates: string;
  location: string;
  organizer: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  subtitle,
  time,
  dates,
  location,
  organizer,
}) => {
  return (
    // Wadah Kartu Merah
    <div className="shrink-0 w-[320px] p-5 bg-red-500 rounded-xl text-white shadow-lg mr-4">
      
      {/* Judul dan Ikon Bookmark */}
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <span className="text-xl">&#x1F516;</span>
      </div>

      {/* Subtitle */}
      <p className="text-sm mb-4">{subtitle}</p>

      {/* Detail Waktu */}
      <div className="flex items-center text-sm mb-1">
        <span className="mr-2">🕒</span>
        <span>{time}</span>
      </div>

      {/* Detail Tanggal */}
      <div className="flex items-center text-sm mb-1">
        <span className="mr-2">📅</span>
        <span>{dates}</span>
      </div>

      {/* Detail Lokasi */}
      <div className="flex items-center text-sm mb-4">
        <span className="mr-2">📍</span>
        <span>{location}</span>
      </div>
      
      {/* Organizer dan Tombol Details */}
      <div className="flex justify-between items-center text-sm">
        <p className="font-semibold text-xs">@{organizer}</p>
        <a 
          href="#" 
          className="text-white underline hover:text-red-100 transition-colors text-xs"
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default EventCard;