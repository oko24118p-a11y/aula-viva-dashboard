import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  PlayCircle, 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  BookOpen, 
  FileText,
  Video,
  Megaphone,
  Clock
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function CourseDetail() {
  return (
    <div className="space-y-12">
      {/* Header Navigation */}
      <div className="flex items-center gap-4">
        <Link to="/cursos" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-primary" />
        </Link>
        <h1 className="font-headline font-bold tracking-tight text-xl text-primary">Matemáticas Avanzadas</h1>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent -z-10"></div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-xs font-black tracking-[0.3em] text-primary uppercase">SEGUNDO SEMESTRE 2024</span>
            <h2 className="text-6xl lg:text-7xl font-headline font-extrabold text-secondary tracking-tighter leading-[0.9]">
              Domina el <br/><span className="text-primary">Cálculo</span> & Álgebra
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              Exploración profunda del razonamiento matemático de alto nivel, desde la elegancia del cálculo infinitesimal hasta la complejidad de las estructuras algebraicas modernas.
            </p>
          </div>
          <div className="relative w-48 h-48 hidden lg:flex items-center justify-center bg-white rounded-3xl shadow-2xl p-6 rotate-3">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmyj7fTGGtkgEADlp8zZ1Eum5QyXuocyHR8d1MId682DEH6Hdnu2PvXvesMNENRvOM4II8zSj6ba4mQWLrmJsCA3wvv1Zkz9ca_IOyBeZJ1zJ6AXxSwjYmNrRl1VfWnNUK9f4NmQgPlJf5gj3gN_WY0qFCW3BFyc_gKyizfxZM5I2G53B1W446fSS_MJfiv_Lo87voO83XRvjwulpDkr-RSpb_mpQ-o1xZKAT_61TDT6jXNmN5w1LYIaCN93jg6a2O8PlUy7GS-ZQR" 
              alt="Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Announcement Card */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 rounded-3xl shadow-editorial border-l-8 border-primary relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Megaphone size={120} />
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 rounded-2xl overflow-hidden bg-surface-container-high border-2 border-white shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOsiDtlsrEbCxNmR_GytQ70CIflO2j_8RauKSzOCScyTCEh-EsH2eDj75xDIgaa0x2OPKK9vfV-rjIRtKkjvvEW46g4L_jEUGN8CnMY6oDTVg81SqyLtSvPkPNCgI6CqKGul0HKlXOqjwrhfJ2XZ_fgyigpnWXO_e7W5We3uuc4BG4kqBDFj9gQ8ooc6H6ST2wnt99rYLVk3vlrrpoUXk-04vCQQlphOWGRm6NLiv1b3wzXeHs3mxZmVMxZGTS5OrP10jW4UBGBdL-" 
              alt="Prof" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-xs font-black text-secondary uppercase tracking-widest">Último Aviso</p>
            <p className="font-bold text-lg text-on-surface">Dra. Helena Ramirez</p>
          </div>
        </div>
        <p className="text-lg text-on-surface-variant leading-relaxed italic font-medium">
          "Recuerden que el proyecto de integración debe incluir la aplicación práctica en física. Los espero en la sesión de hoy para despejar dudas finales."
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Course Structure */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <div className="flex justify-between items-end mb-8">
              <h3 className="font-headline text-3xl font-bold tracking-tight">Contenido del Curso</h3>
              <span className="text-sm font-bold text-slate-400">65% Completado</span>
            </div>
            <div className="space-y-4">
              {[
                { id: "01", title: "Álgebra Lineal y Matrices", desc: "8 Lecciones • Finalizado", status: "completed", icon: CheckCircle2 },
                { id: "02", title: "Cálculo Diferencial e Integral", desc: "12 Lecciones • En curso", status: "active", icon: PlayCircle },
                { id: "03", title: "Estadística Inferencial", desc: "5 Lecciones • Próximamente", status: "locked", icon: Circle }
              ].map((module, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "p-8 rounded-3xl flex items-center justify-between transition-all duration-300",
                    module.status === "active" ? "bg-secondary text-white shadow-2xl scale-[1.02]" : "bg-white shadow-editorial hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-8">
                    <span className={cn("text-4xl font-black font-headline", module.status === "active" ? "text-white/20" : "text-slate-100")}>
                      {module.id}
                    </span>
                    <div>
                      <h4 className="font-bold text-xl tracking-tight">{module.title}</h4>
                      <p className={cn("text-sm font-medium", module.status === "active" ? "text-blue-100" : "text-slate-400")}>
                        {module.desc}
                      </p>
                    </div>
                  </div>
                  <module.icon className={cn("w-8 h-8", module.status === "active" ? "text-white" : "text-slate-200")} />
                </div>
              ))}
            </div>
          </section>

          {/* Assigned Readings */}
          <section>
            <h3 className="font-headline text-3xl font-bold tracking-tight mb-8">Lecturas Asignadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Stewart Calculus", meta: "8va Edición • Capítulos 4-7", icon: BookOpen, color: "bg-secondary", textColor: "text-white" },
                { title: "Advanced Matrix Theory", meta: "Guía de Aplicaciones Reales", icon: FileText, color: "bg-surface-container-high", textColor: "text-on-surface" }
              ].map((book, idx) => (
                <div key={idx} className={cn("p-6 rounded-3xl flex items-center gap-6 group cursor-pointer transition-all hover:scale-[1.02]", book.color, book.textColor)}>
                  <div className="w-16 h-20 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <book.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg leading-tight">{book.title}</h5>
                    <p className="text-xs opacity-70 mt-1 font-medium">{book.meta}</p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                    <Download size={20} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Tasks & Join */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Join Live Class */}
          <Link to="/aula" className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-6 rounded-3xl font-bold shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 hover:scale-105 transition-transform group">
            <Video size={28} className="group-hover:animate-pulse" />
            <span className="text-lg">Unirse a Clase en Vivo</span>
          </Link>

          {/* Upcoming Assignments */}
          <section className="bg-white p-8 rounded-3xl shadow-editorial space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Próximas Tareas</h3>
              <Link to="/notificaciones" className="text-xs bg-slate-100 px-3 py-1 rounded-full font-black hover:bg-slate-200 transition-colors">3 TASK</Link>
            </div>
            <div className="space-y-6">
              {[
                { title: "Derivatives Problem Set #4", deadline: "Entrega: 24 Oct, 23:59", status: "Pendiente", color: "text-primary" },
                { title: "Linear Algebra Quiz Prep", deadline: "Quiz en plataforma", status: "No Iniciado", color: "text-slate-400" },
                { title: "Integration Project Part 1", deadline: "Proyecto_Final_V1.pdf", status: "Entregado", color: "text-green-500" }
              ].map((task, idx) => (
                <div key={idx} className="border-l-4 border-slate-100 pl-6 py-1 relative">
                  <div className={cn("absolute -left-[4px] top-0 h-8 w-1 rounded-full", task.status === "Pendiente" ? "bg-primary" : task.status === "Entregado" ? "bg-green-500" : "bg-slate-300")} />
                  <p className={cn("text-[10px] font-black uppercase tracking-widest mb-1", task.color)}>{task.status}</p>
                  <h4 className="font-bold text-on-surface mb-1">{task.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Clock size={12} />
                    {task.deadline}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
