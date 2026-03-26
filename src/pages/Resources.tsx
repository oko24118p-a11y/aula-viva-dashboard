import { motion } from 'motion/react';
import { 
  Book, 
  Search, 
  Download, 
  ExternalLink, 
  FileText, 
  Video, 
  Globe, 
  Bookmark,
  Filter,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Resources() {
  const categories = ["Todos", "Libros Digitales", "Video Clases", "Guías de Estudio", "Software"];
  
  const resources = [
    { title: "Cálculo de Stewart 8va Edición", type: "Libro Digital", size: "45 MB", icon: Book, color: "text-secondary", bg: "bg-secondary/10" },
    { title: "Física para Científicos e Ingenieros", type: "Libro Digital", size: "120 MB", icon: Book, color: "text-primary", bg: "bg-primary/10" },
    { title: "Tutorial: Derivadas Parciales", type: "Video Clase", size: "15 min", icon: Video, color: "text-tertiary", bg: "bg-tertiary/10" },
    { title: "Guía de Literatura Contemporánea", type: "Guía de Estudio", size: "2.4 MB", icon: FileText, color: "text-secondary", bg: "bg-secondary/10" },
    { title: "Simulador de Circuitos Logisim", type: "Software", size: "12 MB", icon: Globe, color: "text-primary", bg: "bg-primary/10" },
    { title: "Diccionario de la RAE (Acceso)", type: "Enlace Externo", size: "Web", icon: ExternalLink, color: "text-slate-500", bg: "bg-slate-100" },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <span className="font-bold text-[10px] tracking-[0.3em] text-primary uppercase block">BIBLIOTECA DIGITAL</span>
          <h1 className="text-6xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-none">
            Recursos <span className="text-secondary">Académicos</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl">
            Accede a todo el material de apoyo, libros de texto y herramientas digitales seleccionadas para tu grado.
          </p>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Buscar recursos..." 
            className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl editorial-shadow border-none focus:ring-2 focus:ring-secondary/20 transition-all text-sm font-medium"
          />
        </div>
      </section>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-2 px-2">
        {categories.map((cat, idx) => (
          <button 
            key={idx}
            className={cn(
              "px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap",
              idx === 0 ? "bg-secondary text-white shadow-lg" : "bg-white text-slate-500 hover:bg-slate-50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-8 rounded-[2.5rem] editorial-shadow group hover:scale-[1.02] transition-all cursor-pointer border border-slate-50"
          >
            <div className="flex justify-between items-start mb-8">
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", res.bg, res.color)}>
                <res.icon size={32} />
              </div>
              <button className="p-2 text-slate-300 hover:text-secondary transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
            
            <div className="space-y-2 mb-8">
              <p className={cn("text-[10px] font-black uppercase tracking-widest", res.color)}>{res.type}</p>
              <h3 className="text-xl font-bold text-on-surface leading-tight group-hover:text-secondary transition-colors">
                {res.title}
              </h3>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{res.size}</span>
              <button className="flex items-center gap-2 text-sm font-black text-on-surface uppercase tracking-widest group/btn">
                Descargar
                <Download size={16} className="group-hover/btn:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <section className="bg-surface-container-low rounded-[3rem] p-12 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">
              Plataformas Externas <br/> Recomendadas
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Hemos seleccionado las mejores herramientas digitales para potenciar tu aprendizaje autónomo fuera del aula.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Khan Academy", "Coursera", "WolframAlpha"].map(tool => (
                <div key={tool} className="px-6 py-3 bg-white rounded-xl font-bold text-sm editorial-shadow flex items-center gap-2">
                  <Globe size={16} className="text-secondary" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl editorial-shadow space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Filter size={24} />
              </div>
              <h4 className="font-bold text-lg">Filtros Inteligentes</h4>
              <p className="text-xs text-slate-400 font-medium">Encuentra material específico por grado y materia.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl editorial-shadow space-y-4 translate-y-8">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                <Bookmark size={24} />
              </div>
              <h4 className="font-bold text-lg">Favoritos</h4>
              <p className="text-xs text-slate-400 font-medium">Guarda tus recursos más usados para acceso rápido.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
