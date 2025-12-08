import { EventData } from '@/data/event';

interface DetailCardProps {
  isOpen: boolean;
  onClose: () => void;
  data: EventData | null;
  colorClass: string;
  textColor?: string;
}

export default function DetailCard({ isOpen, onClose, data, colorClass, textColor }: DetailCardProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Container Utama */}
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* --- HEADER BERWARNA --- */}
        {/* h-20: Memberi ruang cukup agar tidak sempit */}
        {/* flex justify-between: Agar badge di kiri dan tombol X di kanan otomatis rapi */}
        <div className={`h-20 shrink-0 rounded-t-3xl flex items-center justify-between px-6 ${colorClass || 'bg-gray-800'}`}>
          
          {/* Badge Kategori */}
          {/* bg-white/90: Putih transparan agar cocok di background warna apapun */}
          <span className="bg-white/90 text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm tracking-wide uppercase">
            Event Detail
          </span>

          {/* Tombol X (Close) */}
          <button 
            onClick={onClose}
            className="bg-black/10 hover:bg-black/30 text-white rounded-full p-2 transition duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* --- BODY CONTENT (SCROLLABLE) --- */}
        <div className="px-8 py-6 overflow-y-auto custom-scrollbar">            
            
            <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
                {data.title}
            </h2>
            
            <p className="text-sm text-gray-500 font-medium mb-6">
                {data.subtitle}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 font-semibold uppercase tracking-wider">Date</p>
                    <p className="text-sm font-bold text-gray-700">📅 {data.date}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 font-semibold uppercase tracking-wider">Time</p>
                    <p className="text-sm font-bold text-gray-700">🕒 {data.time}</p>
                </div>
                <div className="col-span-2 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 font-semibold uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-gray-700">📍 {data.location}</p>
                </div>
            </div>

            {/* Deskripsi */}
            <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap mb-8">
                {data.description || "No description provided."}
            </div>

            {/* --- FOOTER --- */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between sticky bottom-0 bg-white">
                <div className="text-xs text-gray-400">
                    Organizer <br/>
                    <span className="text-gray-800 font-bold text-sm">{data.contact}</span>
                </div>
                
                {/* Tombol Close Bawah - Warnanya mengikuti Header */}
                <button 
                    onClick={onClose}
                    className={`px-8 py-3 text-sm font-bold rounded-2xl shadow-md ${colorClass || 'bg-gray-800'} ${textColor || 'text-gray-800'} `}
                >
                    Close
                </button>
            </div>

        </div>
      </div>
    </div>
  );
}