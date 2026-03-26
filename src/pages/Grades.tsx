import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  TrendingUp, 
  TrendingDown,
  FileText, 
  ChevronRight, 
  Download,
  Star,
  Target,
  BarChart3,
  Calendar,
  CheckCircle2,
  Loader2,
  Calculator,
  Book,
  Zap,
  Landmark,
  Languages,
  MoreHorizontal,
  X,
  LayoutDashboard,
  GraduationCap,
  Bell,
  User,
  BookOpen
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Grades() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const subjects = [
    { name: "Matemáticas Avanzadas", grade: "19.5", progress: 95, color: "from-secondary to-blue-600", status: "Excelente", icon: Calculator, trend: "up", credits: 4 },
    { name: "Literatura Universal", grade: "18.0", progress: 88, color: "from-primary to-rose-600", status: "Sobresaliente", icon: Book, trend: "up", credits: 3 },
    { name: "Física II", grade: "17.5", progress: 85, color: "from-tertiary to-amber-600", status: "Notable", icon: Zap, trend: "down", credits: 4 },
    { name: "Historia Moderna", grade: "19.0", progress: 92, color: "from-secondary to-indigo-600", status: "Excelente", icon: Landmark, trend: "up", credits: 3 },
    { name: "Inglés Avanzado", grade: "20.0", progress: 100, color: "from-primary to-pink-600", status: "Perfecto", icon: Languages, trend: "up", credits: 2 },
  ];

  const sections = [
    { to: "/", icon: LayoutDashboard, label: "Panel Principal", desc: "Vista general de tu progreso" },
    { to: "/horario", icon: Calendar, label: "Horario Escolar", desc: "Tus clases y eventos" },
    { to: "/cursos", icon: GraduationCap, label: "Mis Cursos", desc: "Materiales y tareas" },
    { to: "/asistencia", icon: CheckCircle2, label: "Asistencia", desc: "Tu registro de puntualidad" },
    { to: "/recursos", icon: BookOpen, label: "Recursos", desc: "Biblioteca y herramientas" },
    { to: "/notificaciones", icon: Bell, label: "Notificaciones", desc: "Avisos y mensajes" },
    { to: "/perfil", icon: User, label: "Mi Perfil", desc: "Configuración de cuenta" },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Sections Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-white z-[101] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-4xl font-headline font-black tracking-tighter">Secciones</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Navegación Rápida</p>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 bg-slate-50 rounded-2xl text-on-surface hover:bg-primary hover:text-white transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {sections.map((section, idx) => (
                  <Link 
                    key={idx} 
                    to={section.to}
                    className="flex items-center gap-6 p-6 rounded-[2rem] hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all">
                      <section.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface group-hover:text-secondary transition-colors">{section.label}</h4>
                      <p className="text-xs text-slate-400 font-medium">{section.desc}</p>
                    </div>
                    <ChevronRight size={20} className="ml-auto text-slate-200 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="bg-secondary/5 rounded-3xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                    <Star size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">¿Necesitas Ayuda?</p>
                    <p className="text-xs text-slate-500 font-medium">Contacta con soporte académico</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <span className="font-bold text-[10px] tracking-[0.3em] text-primary uppercase block">RENDIMIENTO ACADÉMICO</span>
          <h1 className="text-6xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-none">
            Mis <span className="text-secondary">Notas</span>
          </h1>
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-slate-500 font-bold">
              <Calendar size={20} />
              <span>Bimestre 3 • 2024</span>
            </div>
            <span className="px-4 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-black uppercase tracking-widest">Promedio: 18.8</span>
          </div>
        </div>

        <div className="relative">
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className={cn(
              "px-10 py-4 rounded-2xl editorial-shadow font-bold text-sm flex items-center gap-2 transition-all",
              isDownloading ? "bg-slate-100 text-slate-400 cursor-wait" : "bg-secondary text-white hover:scale-105 active:scale-95"
            )}
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            {isDownloading ? "Generando..." : "Descargar Boleta"}
          </button>

          <AnimatePresence>
            {showSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full mt-4 right-0 bg-white p-4 rounded-2xl editorial-shadow border border-green-100 flex items-center gap-3 min-w-[240px] z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">¡Descarga Lista!</p>
                  <p className="text-[10px] text-slate-400 font-medium">Boleta_B3_Alejandro.pdf</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[
          { label: "Puesto en Promoción", value: "3° / 120", icon: Target, color: "text-secondary", bg: "bg-secondary/10" },
          { label: "Méritos Acumulados", value: "12", icon: Star, color: "text-tertiary", bg: "bg-tertiary/10" },
          { label: "Tendencia Semanal", value: "+0.4", icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" }
        ].map((stat, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] editorial-shadow flex flex-col items-center text-center gap-4 group hover:bg-on-surface hover:text-white transition-all duration-500"
          >
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500", stat.bg, stat.color)}>
              <stat.icon size={32} />
            </div>
            <div>
              <p className="text-4xl font-black tracking-tighter leading-none">{stat.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-60">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grades Grid - Modern Cards */}
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-headline font-extrabold tracking-tight">Detalle Académico</h3>
          <div className="flex gap-2">
            <button className="p-3 bg-white rounded-xl editorial-shadow text-slate-400 hover:text-secondary transition-colors"><BarChart3 size={20} /></button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-3 bg-white rounded-xl editorial-shadow text-slate-400 hover:text-secondary transition-colors"
            >
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {subjects.map((sub, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-white rounded-[3rem] p-8 editorial-shadow overflow-hidden border border-slate-50 flex flex-col justify-between min-h-[320px]"
            >
              {/* Background Accent */}
              <div className={cn("absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-bl-[5rem] transition-all group-hover:scale-150 duration-700", sub.color)}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br text-white shadow-lg", sub.color)}>
                    <sub.icon size={28} />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 mb-1">
                      {sub.trend === "up" ? (
                        <TrendingUp size={14} className="text-secondary" />
                      ) : (
                        <TrendingDown size={14} className="text-primary" />
                      )}
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tendencia</span>
                    </div>
                    <p className="text-4xl font-black text-on-surface tracking-tighter leading-none">{sub.grade}</p>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-on-surface tracking-tight mb-2 group-hover:text-secondary transition-colors">{sub.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Prof. Titular • {sub.credits} Créditos</p>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-end">
                  <span className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                    sub.status === "Excelente" || sub.status === "Perfecto" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
                  )}>
                    {sub.status}
                  </span>
                  <span className="text-xs font-black text-slate-400">{sub.progress}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${sub.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (idx * 0.1) }}
                    className={cn("h-full rounded-full bg-gradient-to-r shadow-sm", sub.color)}
                  />
                </div>
              </div>

              {/* Hover Action */}
              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                <div className="w-10 h-10 rounded-full bg-on-surface text-white flex items-center justify-center">
                  <ChevronRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Academic Feedback - Redesigned */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-on-surface text-white rounded-[4rem] p-12 lg:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-32 h-32 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-secondary shrink-0 rotate-6">
            <Award size={64} className="animate-bounce" />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10">
              <Star size={16} className="text-secondary fill-secondary" />
              <span className="text-xs font-black uppercase tracking-widest">Reconocimiento al Mérito</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tight leading-tight">
              "Tu consistencia es tu <br/>mayor fortaleza."
            </h3>
            <p className="text-xl text-white/60 font-medium leading-relaxed italic max-w-3xl">
              "Alejandro, tu desempeño en Matemáticas y Física es sobresaliente. Has demostrado que con disciplina y curiosidad no hay reto que te detenga. Mantén ese estándar de oro."
            </p>
            <div className="pt-4">
              <p className="text-lg font-bold">Dra. Helena Ramirez</p>
              <p className="text-sm text-white/40 font-bold uppercase tracking-widest">Consejera Académica • Colegio Corazón de Jesús</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
