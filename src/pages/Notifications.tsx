import { motion } from 'motion/react';
import { 
  Bell, 
  AlertTriangle, 
  BookOpen, 
  Trophy, 
  CreditCard,
  CheckCheck,
  Clock,
  UserCheck,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "urgent",
      title: "Suspensión de clases por mantenimiento",
      desc: "Debido a mantenimiento preventivo en las instalaciones eléctricas, las clases presenciales quedan suspendidas por 24 horas.",
      time: "Hace 15 minutos",
      meta: "Dirección General",
      icon: AlertTriangle,
      color: "bg-primary",
      lightColor: "bg-primary/10",
      textColor: "text-primary"
    },
    {
      id: 2,
      type: "unread",
      title: "Nuevo material en Matemáticas",
      desc: "Se ha publicado la guía de estudio para el examen de cálculo integral. Disponible en la sección académica.",
      time: "Hace 2 horas",
      meta: "Prof. Martínez",
      icon: BookOpen,
      color: "bg-secondary",
      lightColor: "bg-secondary/10",
      textColor: "text-secondary"
    },
    {
      id: 3,
      type: "unread",
      title: "Invitación: Concurso de Oratoria",
      desc: "Participa en el XV certamen anual 'La Voz del Corazón'. Inscripciones abiertas en secretaría.",
      time: "Hoy, 9:00 AM",
      meta: "Extensión Cultural",
      icon: Trophy,
      color: "bg-tertiary",
      lightColor: "bg-tertiary/10",
      textColor: "text-tertiary"
    },
    {
      id: 4,
      type: "read",
      title: "Recordatorio de pago",
      desc: "Se aproxima el vencimiento de la cuota del mes de Octubre. Realice su pago a través de la banca en línea.",
      time: "Ayer",
      meta: "Administrativo",
      icon: CreditCard,
      color: "bg-slate-400",
      lightColor: "bg-slate-100",
      textColor: "text-slate-500"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <section>
        <span className="font-bold text-[10px] tracking-[0.3em] text-primary uppercase block mb-2">CENTRO DE COMUNICACIÓN</span>
        <h1 className="font-headline text-5xl lg:text-6xl font-extrabold tracking-tighter text-on-surface mb-6">Notificaciones</h1>
        <div className="flex flex-wrap items-center gap-6">
          <span className="px-6 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm">3 Pendientes</span>
          <button className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-primary transition-colors">
            <CheckCheck size={18} />
            Marcar todas como leídas
          </button>
        </div>
      </section>

      {/* Notifications List */}
      <div className="space-y-6">
        {notifications.map((notif, idx) => (
          <motion.div 
            key={notif.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "relative group p-8 rounded-3xl transition-all duration-300 editorial-shadow border-l-8",
              notif.type === "read" ? "bg-white/50 opacity-70 grayscale-[0.5]" : "bg-white hover:scale-[1.01]",
              notif.type === "urgent" ? "border-primary" : 
              notif.type === "unread" ? "border-secondary" : "border-slate-200"
            )}
          >
            <div className="flex gap-6">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", notif.lightColor, notif.textColor)}>
                <notif.icon size={28} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <h3 className="font-headline font-bold text-xl tracking-tight text-on-surface">{notif.title}</h3>
                    {notif.type !== "read" && (
                      <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    )}
                  </div>
                  {notif.type === "urgent" && (
                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Urgente</span>
                  )}
                </div>
                <p className="text-on-surface-variant leading-relaxed font-medium">
                  {notif.desc}
                </p>
                <div className="flex items-center gap-6 pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {notif.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserCheck size={14} />
                    {notif.meta}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pt-8">
        <button className="group flex flex-col items-center gap-2 mx-auto text-slate-400 font-bold hover:text-secondary transition-colors">
          <span className="text-sm uppercase tracking-widest">Ver notificaciones anteriores</span>
          <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
