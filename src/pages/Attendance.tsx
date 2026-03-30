import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Calendar, 
  AlertCircle,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  Loader2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Attendance() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const stats = [
    { label: "Asistencias", value: "92", icon: CheckCircle2, color: "text-secondary", bg: "bg-secondary/10" },
    { label: "Inasistencias", value: "2", icon: XCircle, color: "text-primary", bg: "bg-primary/10" },
    { label: "Tardanzas", value: "4", icon: Clock, color: "text-tertiary", bg: "bg-tertiary/10" },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const records = [
    { date: "24 Oct, 2024", status: "Presente", time: "07:55 AM", subject: "Matemáticas Avanzadas", type: "success" },
    { date: "23 Oct, 2024", status: "Presente", time: "07:58 AM", subject: "Física II", type: "success" },
    { date: "22 Oct, 2024", status: "Tardanza", time: "08:15 AM", subject: "Literatura Universal", type: "warning" },
    { date: "21 Oct, 2024", status: "Falta", time: "-", subject: "Historia Moderna", type: "danger" },
    { date: "18 Oct, 2024", status: "Presente", time: "07:50 AM", subject: "Inglés Avanzado", type: "success" },
    { date: "17 Oct, 2024", status: "Presente", time: "07:52 AM", subject: "Educación Física", type: "success" },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <span className="font-bold text-[10px] tracking-[0.3em] text-primary uppercase block">CONTROL DE ASISTENCIA</span>
          <h1 className="text-6xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-none">
            Mi <span className="text-secondary">Registro</span>
          </h1>
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-slate-500 font-bold">
              <Calendar size={20} />
              <span>Octubre 2024</span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full md:w-auto relative">
          <button className="flex-1 md:flex-none px-8 py-4 bg-white rounded-2xl shadow-editorial font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Filter size={18} />
            Filtrar
          </button>
          
          <div className="relative flex-1 md:flex-none">
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className={cn(
                "w-full px-8 py-4 rounded-2xl shadow-editorial font-bold text-sm flex items-center justify-center gap-2 transition-all",
                isDownloading ? "bg-slate-100 text-slate-400 cursor-wait" : "bg-secondary text-white hover:scale-105"
              )}
            >
              {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
              {isDownloading ? "Generando..." : "Reporte"}
            </button>

            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 right-0 bg-white p-4 rounded-2xl shadow-editorial border border-green-100 flex items-center gap-3 min-w-[240px] z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">¡Reporte Listo!</p>
                    <p className="text-[10px] text-slate-400 font-medium">Asistencia_Oct_2024.pdf</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-editorial flex flex-col items-center text-center gap-6 group hover:scale-105 transition-transform cursor-default">
            <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center", stat.bg, stat.color)}>
              <stat.icon size={40} />
            </div>
            <div>
              <p className="text-5xl font-black text-on-surface">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Attendance List */}
      <section className="bg-white rounded-[3rem] shadow-editorial overflow-hidden border border-slate-50">
        <div className="p-10 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-2xl font-bold tracking-tight">Historial Reciente</h3>
          <div className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest">
            <BarChart3 size={16} />
            98% Promedio Mensual
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Fecha</th>
                <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Asignatura</th>
                <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Hora de Ingreso</th>
                <th className="px-10 py-6 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {records.map((record, idx) => (
                <tr key={idx} className="group hover:bg-slate-50/30 transition-colors">
                  <td className="px-10 py-8 font-bold text-on-surface">{record.date}</td>
                  <td className="px-10 py-8">
                    <p className="font-bold text-on-surface">{record.subject}</p>
                    <p className="text-xs text-slate-400 font-medium">Clase Presencial</p>
                  </td>
                  <td className="px-10 py-8 font-mono text-sm text-slate-500">{record.time}</td>
                  <td className="px-10 py-8 text-right">
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2",
                      record.type === "success" ? "bg-secondary/10 text-secondary" :
                      record.type === "warning" ? "bg-tertiary/10 text-tertiary" : "bg-primary/10 text-primary"
                    )}>
                      {record.type === "success" ? <CheckCircle2 size={12} /> : 
                       record.type === "warning" ? <AlertCircle size={12} /> : <XCircle size={12} />}
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Justification Section */}
      <section className="bg-surface-container-low rounded-[3rem] p-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-3xl font-bold tracking-tight">¿Necesitas justificar una falta?</h3>
            <p className="text-slate-500 font-medium max-w-xl">
              Recuerda que tienes un plazo de 48 horas para presentar la documentación correspondiente a través de este portal.
            </p>
          </div>
          <button className="px-12 py-5 bg-white text-on-surface font-bold rounded-2xl shadow-editorial hover:bg-slate-50 transition-all shrink-0">
            Enviar Justificación
          </button>
        </div>
      </section>
    </div>
  );
}
