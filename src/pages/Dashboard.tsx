import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  PlayCircle, 
  FileText, 
  HelpCircle,
  Trophy,
  Star,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-16 px-10 rounded-[3rem] overflow-hidden bg-secondary text-white editorial-shadow"
      >
        {/* Background Image with Expert Design Touches */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-3/5 z-0 pointer-events-none overflow-hidden">
          <img 
            src="https://picsum.photos/seed/students-playing/1200/800" 
            alt="Estudiantes" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110 group-hover:scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Mask for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <span className="font-bold text-xs tracking-[0.2em] text-blue-200 uppercase block mb-4">¡Buen día, Alejandro!</span>
          <h1 className="font-headline text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Tu camino académico <br/>te espera hoy.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-lg">
            Tienes 4 clases hoy y 2 tareas pendientes para la medianoche. Mantén el enfoque y sigue alcanzando el estándar de oro.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/perfil" className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform editorial-shadow">
              Ver Mi Portal
            </Link>
            <Link to="/recursos" className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
              Enlaces Rápidos
            </Link>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute right-12 bottom-0 w-80 h-80 bg-secondary-container/10 rounded-full blur-2xl z-0"></div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Schedule & Materials */}
        <div className="lg:col-span-8 space-y-12">
          {/* Daily Schedule */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight">Horario Diario</h2>
              <Link to="/horario" className="text-sm font-bold text-secondary flex items-center gap-2 hover:underline group">
                Calendario Completo 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {[
                { time: "08:00", period: "AM", title: "Matemáticas Avanzadas", subtitle: "Aula 302 • Dra. Helena Ramirez", status: "En curso", color: "bg-primary", link: "/cursos", roomLink: "/aula" },
                { time: "10:15", period: "AM", title: "Literatura Universal", subtitle: "Salón de Biblioteca • Prof. James Miller", status: "Próxima", color: "bg-secondary", link: "/cursos", roomLink: "/aula" },
                { time: "01:30", period: "PM", title: "Laboratorio de Física", subtitle: "Ala de Ciencias B • Dr. Aris Thorne", status: "Más tarde", color: "bg-tertiary", link: "/cursos", roomLink: "/aula" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center gap-6 h-16 px-8 bg-white rounded-full transition-all hover:editorial-shadow border border-slate-50 relative overflow-hidden"
                >
                  {/* Color Indicator Bar */}
                  <div className={cn("absolute left-0 top-0 w-2 h-full", item.color)}></div>
                  
                  <div className="text-center min-w-[60px]">
                    <p className="text-base font-black text-on-surface leading-none">{item.time}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.period}</p>
                  </div>

                  <div className="flex-1 flex items-center gap-4 overflow-hidden">
                    <div className="h-8 w-[1px] bg-slate-100"></div>
                    <div className="truncate">
                      <Link to={item.link} className="font-bold text-base text-on-surface tracking-tight hover:text-secondary transition-colors block truncate">{item.title}</Link>
                      <p className="text-xs text-slate-400 font-medium truncate">
                        <Link to={item.roomLink} className="hover:underline">{item.subtitle.split(' • ')[0]}</Link> • {item.subtitle.split(' • ')[1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap",
                      item.status === "En curso" ? "bg-primary/10 text-primary animate-pulse" : 
                      item.status === "Próxima" ? "bg-secondary/10 text-secondary" : "bg-slate-100 text-slate-400"
                    )}>
                      {item.status}
                    </span>
                    <button className="p-2 text-slate-300 hover:text-secondary transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Learning Materials */}
          <section>
            <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-8">Materiales de Aprendizaje</h2>
            <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-2 px-2">
              {[
                { title: "Introducción a las Integrales", type: "Video Clase", icon: PlayCircle, color: "text-secondary", img: "https://picsum.photos/seed/math/400/300" },
                { title: "Mecánica de Ondas", type: "Documento", icon: FileText, color: "text-primary", img: "https://picsum.photos/seed/physics/400/300" },
                { title: "Preparación: La Ilustración", type: "Práctica", icon: HelpCircle, color: "text-tertiary", img: "https://picsum.photos/seed/history/400/300" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="min-w-[280px] bg-white rounded-3xl editorial-shadow overflow-hidden group cursor-pointer"
                >
                  <div className="h-40 bg-slate-200 overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-4 left-4">
                      <item.icon className={cn("w-8 h-8 fill-white", item.color)} />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={cn("text-[10px] font-black uppercase tracking-[0.2em] mb-2", item.color)}>{item.type}</p>
                    <h4 className="font-bold text-lg leading-tight text-on-surface">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Achievements & Tasks */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Academic Achievements */}
          <section className="bg-surface-container-high p-8 rounded-3xl editorial-shadow relative overflow-hidden">
            <div className="absolute -right-8 -top-8 opacity-5">
              <Trophy size={160} />
            </div>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-8">Logros Académicos</h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-on-surface">Créditos de Curso</p>
                  <p className="text-xs text-slate-500 font-medium">Becario Nivel 4</p>
                </div>
                <p className="text-4xl font-black text-secondary italic">85%</p>
              </div>
              <div className="h-3 w-full bg-white rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-secondary rounded-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { label: "Oro", icon: Trophy, color: "text-tertiary", active: true },
                  { label: "Élite", icon: Star, color: "text-slate-300", active: false },
                  { label: "Perfecto", icon: CheckCircle2, color: "text-secondary", active: true }
                ].map((badge, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "aspect-square bg-white rounded-2xl flex items-center justify-center flex-col gap-2 transition-all",
                      !badge.active && "opacity-40 grayscale"
                    )}
                  >
                    <badge.icon className={cn("w-8 h-8", badge.color)} />
                    <span className="text-[8px] font-black uppercase tracking-tighter">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pending Tasks */}
          <section>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-8">Tareas Pendientes</h2>
            <div className="space-y-4">
              {[
                { title: "Cálculo #4: Derivadas", deadline: "Vence hoy, 11:59 PM", type: "urgent", icon: AlertCircle },
                { title: "Borrador de Ensayo: Inglés", deadline: "Vence en 3 días", type: "pending", icon: FileText },
                { title: "Cuestionario de Química", deadline: "Calificado: 94/100", type: "completed", icon: CheckCircle2 }
              ].map((task, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  className={cn(
                    "bg-white p-6 rounded-2xl editorial-shadow flex items-start gap-4 border-l-4",
                    task.type === "urgent" ? "border-primary" : 
                    task.type === "completed" ? "border-green-500 opacity-70" : "border-slate-200"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl",
                    task.type === "urgent" ? "bg-primary/10 text-primary" : 
                    task.type === "completed" ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"
                  )}>
                    <task.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface leading-tight">{task.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 font-medium">{task.deadline}</p>
                    {task.type === "urgent" && (
                      <button className="text-[10px] font-black text-primary uppercase tracking-widest mt-3 hover:underline">
                        Entregar Ahora
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
