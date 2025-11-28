// components/EventModal.tsx
import React from 'react';
import { EventData } from '@/data/event';

interface DetailCardProps {
  isOpen: boolean;
  onClose: () => void;
  data: EventData | null;
}

export default function DetailCard({ isOpen, onClose, data }: DetailCardProps) {
  if (!isOpen || !data) return null;

  return (
    // 1. Overlay Hitam Transparan (Fixed Position)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* 2. Kotak Putih (Card) */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Tombol Close (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-2"
        >
        </button>

        {/* Konten Scrollable (jika teks sangat panjang) */}
        <div className="max-h-[80vh] overflow-y-auto p-8">
            
            <p className="text-sm text-gray-500 font-medium mb-1">Fullview Card</p>
            
            {/* Judul Biru seperti di gambar */}
            <h3 className="text-xl font-bold text-black mb-6 leading-relaxed">
              {data.description ? data.description.split('\n')[0] : data.title}
            </h3>

            {/* Deskripsi Panjang */}
            {/* whitespace-pre-wrap: Agar Enter/Baris baru terbaca */}
            <div className="text-black text-sm leading-relaxed whitespace-pre-wrap font-sans">
              {data.description || "No description available."}
            </div>
        </div>
      </div>
    </div>
  );
}