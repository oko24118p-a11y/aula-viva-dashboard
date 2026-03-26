import { motion } from 'motion/react';
import { 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Filter,
  Calendar as CalendarIcon,
  MoreVertical
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Schedule() {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const hours = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

  const classes = [
    { day: "Lunes", start: "08:00", end: "10:00", title: "Matemáticas Avanzadas", room: "Aula 302", color: "bg-secondary" },
    { day: "Lunes", start: "10:30", end: "12:30", title: "Literatura Universal", room: "Biblioteca", color: "bg-primary" },
    { day: "Martes", start: "08:00", end: "10:00", title: "Física II", room: "Lab B", color: "bg-tertiary" },
    { day: "Miércoles", start: "09:00", end: "11:00", title: "Historia Moderna", room: "Aula 105", color: "bg-secondary" },
    { day: "Jueves", start: "11:00", end: "13:00", title: "Inglés Avanzado", room: "Aula 204", color: "bg-primary" },
    { day: "Viernes", start: "13:30", end: "15:30", title: "Educación Física", room: "Gimnasio", color: "bg-tertiary" },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <span className="font-bold text-[10px] tracking-[0.3em] text-primary uppercase block">GESTIÓN DE TIEMPO</span>
          <h1 className="text-6xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-none">
            Mi <span className="text-secondary">Horario</span>
          </h1>
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-slate-500 font-bold">
              <CalendarIcon size={20} />
              <span>Semana 12 • Octubre 2024</span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-8 py-4 bg-white rounded-2xl editorial-shadow font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Filter size={18} />
            Filtrar
          </button>
          <button className="flex-1 md:flex-none px-8 py-4 bg-secondary text-white rounded-2xl editorial-shadow font-bold text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            <Download size={18} />
            Exportar PDF
          </button>
        </div>
      </section>

      {/* Schedule Grid */}
      <div className="bg-white rounded-[3rem] editorial-shadow overflow-hidden border border-slate-100">
        <div className="overflow-x-auto no-scrollbar">
          <div className="min-w-[800px]">
            {/* Grid Header */}
            <div className="grid grid-cols-6 border-b border-slate-100">
              <div className="p-6 border-r border-slate-100 bg-slate-50/50"></div>
              {days.map(day => (
                <div key={day} className="p-6 text-center border-r border-slate-100 last:border-r-0">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">{day}</span>
                </div>
              ))}
            </div>

            {/* Grid Body */}
            <div className="relative">
              {hours.map((hour, hIdx) => (
                <div key={hour} className="grid grid-cols-6 border-b border-slate-100 last:border-b-0 h-24">
                  <div className="p-4 border-r border-slate-100 flex items-start justify-center bg-slate-50/50">
                    <span className="text-xs font-bold text-slate-300">{hour}</span>
                  </div>
                  {days.map((day, dIdx) => (
                    <div key={`${day}-${hour}`} className="border-r border-slate-100 last:border-r-0 relative">
                      {/* Class Blocks */}
                      {classes.filter(c => c.day === day && c.start === hour).map((c, cIdx) => (
                        <motion.div 
                          key={cIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={cn(
                            "absolute inset-1 z-10 p-4 rounded-2xl text-white shadow-xl flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform",
                            c.color
                          )}
                          style={{ height: "calc(200% - 8px)" }} // Assuming 2 hour blocks for simplicity
                        >
                          <div className="space-y-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-sm leading-tight">{c.title}</h4>
                              <MoreVertical size={14} className="opacity-50 group-hover:opacity-100" />
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-medium opacity-80">
                              <MapPin size={10} />
                              {c.room}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                            <Clock size={10} />
                            {c.start} - {c.end}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend / Info */}
      <div className="flex flex-wrap gap-8 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-secondary" />
          <span className="text-sm font-bold text-slate-500">Ciencias Exactas</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-primary" />
          <span className="text-sm font-bold text-slate-500">Humanidades</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-tertiary" />
          <span className="text-sm font-bold text-slate-500">Actividades Especiales</span>
        </div>
      </div>
    </div>
  );
}
