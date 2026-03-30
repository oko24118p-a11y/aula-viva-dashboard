import { motion } from 'motion/react';
import { 
  Wifi, 
  Cast, 
  AirVent, 
  Video, 
  Monitor, 
  Users, 
  Activity, 
  MapPin, 
  Maximize2,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function ClassroomDetail() {
  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="flex flex-col lg:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 flex items-center gap-2 text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              En Clase: Física II
            </span>
            <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">Aula 302</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-none">
            Espacio <br/><span className="text-secondary">Académico</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium">Segundo Piso • Ala Norte</p>
        </div>
        
        <div className="flex gap-4">
          <div className="glass-card p-6 rounded-3xl shadow-editorial flex items-center gap-4 min-w-[220px]">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Users size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Capacidad</p>
              <p className="text-xl font-bold text-on-surface">35 Estudiantes</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-3xl shadow-editorial flex items-center gap-4 min-w-[220px]">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado</p>
              <p className="text-xl font-bold text-primary">Ocupado</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Map & Gallery */}
        <div className="lg:col-span-7 space-y-12">
          {/* Interactive Map Mockup */}
          <div className="bg-white rounded-[3rem] p-10 shadow-editorial relative overflow-hidden group">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Ubicación de Aula</h2>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">Ala Norte</span>
            </div>
            <div className="relative aspect-[16/10] bg-surface-container rounded-[2rem] flex items-center justify-center overflow-hidden border border-slate-100">
              <img 
                src="https://picsum.photos/seed/blueprint/800/500" 
                alt="Map" 
                className="w-full h-full object-cover opacity-40 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl ring-8 ring-primary/20"
                >
                  <MapPin size={24} className="text-white fill-white" />
                </motion.div>
              </div>
              <button className="absolute bottom-6 right-6 bg-secondary text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform">
                <Maximize2 size={24} />
              </button>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-[2.5rem] overflow-hidden aspect-square shadow-editorial group cursor-zoom-in">
              <img 
                src="https://picsum.photos/seed/class1/600/600" 
                alt="Class" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden aspect-square shadow-editorial group cursor-zoom-in">
              <img 
                src="https://picsum.photos/seed/class2/600/600" 
                alt="Class" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right: Equipment & Schedule */}
        <div className="lg:col-span-5 space-y-12">
          {/* Equipment */}
          <section className="bg-surface-container-low rounded-[3rem] p-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-secondary rounded-full" />
              Equipamiento
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Wi-Fi 5G Alta Velocidad", icon: Wifi },
                { label: "Pizarra Interactiva 85\"", icon: Cast },
                { label: "Sistema Videoconferencia", icon: Video },
                { label: "Climatización Central", icon: AirVent },
                { label: "Estaciones Dell Precision", icon: Monitor }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl flex items-center gap-5 transition-all hover:scale-[1.02] hover:shadow-editorial cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <span className="font-bold text-on-surface">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Today's Schedule */}
          <section className="bg-secondary rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Calendar size={140} />
            </div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">Horario Hoy</h3>
            <div className="space-y-6 relative z-10">
              {[
                { time: "08:00", title: "Física II", prof: "Prof. Ricardo Méndez", active: true },
                { time: "10:30", title: "Programación I", prof: "Ing. Sofía Castillo", active: false },
                { time: "14:00", title: "Cálculo Diferencial", prof: "Dr. Esteban Quito", active: false }
              ].map((slot, idx) => (
                <div key={idx} className={cn(
                  "flex items-center gap-6 p-5 rounded-2xl border transition-all",
                  slot.active ? "bg-white/10 border-white/20 shadow-lg" : "bg-white/5 border-transparent opacity-60"
                )}>
                  <div className="text-center min-w-[60px]">
                    <p className="text-[10px] font-black uppercase text-blue-200">Inicia</p>
                    <p className="text-xl font-black">{slot.time}</p>
                  </div>
                  <div className="h-10 w-px bg-white/20" />
                  <div className="flex-1">
                    <p className="font-bold text-lg">{slot.title}</p>
                    <p className="text-xs text-blue-100/70 italic">{slot.prof}</p>
                  </div>
                  {slot.active && (
                    <span className="bg-primary px-3 py-1 rounded-full text-[8px] font-black uppercase animate-pulse">En curso</span>
                  )}
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 rounded-full bg-white text-secondary font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform">
              Ver Calendario Completo
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
