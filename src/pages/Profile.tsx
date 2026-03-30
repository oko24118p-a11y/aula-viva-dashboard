import { motion } from 'motion/react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Edit3, 
  Camera,
  ChevronRight,
  Heart,
  History,
  FileText
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Profile() {
  return (
    <div className="space-y-12">
      {/* Profile Header */}
      <section className="relative">
        <div className="h-64 w-full bg-gradient-to-br from-secondary to-blue-900 rounded-[3rem] shadow-editorial overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          </div>
        </div>
        
        <div className="px-12 -mt-24 relative z-10 flex flex-col lg:flex-row items-end gap-8">
          <div className="relative group">
            <div className="w-48 h-48 rounded-[3rem] border-8 border-surface overflow-hidden shadow-2xl bg-white">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYX7UnJrCQT8bXYhrWpFOfRUR_uh9qnU4HjpjlgjEjJ1XfbELV1lDh1DT5BlcdpXl6XIOkrOazFqB29jRfG2DGYHDAYCkBojLwR8YQ0KW1hRVzoxoOoR_0iAReBFPBhrZSBNpdTf_YK_CqulbToYSAVYO3Tgz2ocOGcpxG7PbStJkhxyzt76eWCwU7oaap25Xtytep_OjvkSPlXX53F-ggAMVz9x_ZaLVRnzg0lcl0VIVZF0C8RBMYQ5--KiJET-90ZSUQmXI_m_ur" 
                alt="Alejandro" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute bottom-4 right-4 p-3 bg-primary text-white rounded-2xl shadow-xl hover:scale-110 transition-transform">
              <Camera size={20} />
            </button>
          </div>
          
          <div className="flex-1 pb-4 space-y-2">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface">Alejandro Corazón</h1>
              <span className="px-4 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-black uppercase tracking-widest">Estudiante Élite</span>
            </div>
            <p className="text-xl text-slate-500 font-medium">Grado 11 • Promoción 2026</p>
          </div>

          <div className="pb-4">
            <button className="px-10 py-4 bg-white text-on-surface font-bold rounded-full shadow-editorial flex items-center gap-3 hover:bg-slate-50 transition-all">
              <Edit3 size={20} />
              Editar Perfil
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Personal Info */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white p-10 rounded-[3rem] shadow-editorial space-y-10">
            <h3 className="text-2xl font-bold tracking-tight">Información Personal</h3>
            
            <div className="space-y-8">
              {[
                { label: "Correo Institucional", value: "a.corazon@colegio.edu", icon: Mail },
                { label: "Teléfono de Contacto", value: "+51 987 654 321", icon: Phone },
                { label: "Dirección", value: "Av. Las Flores 456, Lima", icon: MapPin },
                { label: "Seguro Médico", value: "Pacífico Seguros • #88291", icon: ShieldCheck }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-slate-500">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-bold text-on-surface">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button className="w-full flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Heart size={22} />
                  </div>
                  <span className="font-bold text-on-surface">Contactos de Emergencia</span>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        </div>

        {/* Right: Academic Status & History */}
        <div className="lg:col-span-8 space-y-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Promedio General", value: "18.5", icon: Award, color: "text-secondary" },
              { label: "Asistencia", value: "98%", icon: History, color: "text-primary" },
              { label: "Créditos", value: "142", icon: FileText, color: "text-tertiary" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-editorial flex flex-col items-center text-center gap-4">
                <div className={cn("w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center", stat.color)}>
                  <stat.icon size={28} />
                </div>
                <div>
                  <p className="text-4xl font-black text-on-surface">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Journey */}
          <section className="bg-surface-container-low rounded-[3rem] p-10">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-3xl font-bold tracking-tight">Trayectoria Académica</h3>
              <button className="text-sm font-bold text-secondary hover:underline">Ver Reporte Completo</button>
            </div>
            
            <div className="space-y-6">
              {[
                { year: "2024", title: "Grado 11 - En Curso", desc: "Mención Honorífica en Ciencias y Letras", active: true },
                { year: "2023", title: "Grado 10 - Finalizado", desc: "Primer Puesto de Promoción • Promedio 19.2", active: false },
                { year: "2022", title: "Grado 9 - Finalizado", desc: "Excelencia Académica • Delegado de Aula", active: false }
              ].map((item, idx) => (
                <div key={idx} className={cn(
                  "relative pl-10 pb-8 border-l-2 last:pb-0",
                  item.active ? "border-secondary" : "border-slate-200"
                )}>
                  <div className={cn(
                    "absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-surface-container-low",
                    item.active ? "bg-secondary" : "bg-slate-200"
                  )} />
                  <div className="bg-white p-6 rounded-2xl shadow-editorial">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-xl text-on-surface">{item.title}</h4>
                      <span className="text-xs font-black text-slate-300">{item.year}</span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
