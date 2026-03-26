import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  GraduationCap, 
  BookOpen, 
  Bell, 
  Settings, 
  User,
  LogOut,
  Menu,
  X,
  Search,
  Award,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import OfflineStatus, { useOnlineStatus } from './OfflineStatus';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
  key?: string;
}

const NavItem = ({ to, icon: Icon, label, active }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-6 py-3 mx-2 my-1 rounded-xl transition-all duration-300 group",
      active 
        ? "bg-secondary/10 text-secondary font-bold" 
        : "text-slate-500 hover:bg-slate-100"
    )}
  >
    <Icon size={20} className={cn("transition-transform group-hover:scale-110", active && "fill-secondary/20")} />
    <span className="text-sm tracking-tight">{label}</span>
    {active && (
      <motion.div 
        layoutId="activeNav"
        className="absolute right-0 w-1 h-6 bg-secondary rounded-l-full"
      />
    )}
  </Link>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isOnline = useOnlineStatus();

  const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Panel" },
    { to: "/horario", icon: Calendar, label: "Horario" },
    { to: "/cursos", icon: GraduationCap, label: "Cursos" },
    { to: "/calificaciones", icon: Award, label: "Notas" },
    { to: "/asistencia", icon: CheckCircle2, label: "Asistencia" },
    { to: "/recursos", icon: BookOpen, label: "Recursos" },
    { to: "/notificaciones", icon: Bell, label: "Notificaciones" },
    { to: "/perfil", icon: User, label: "Perfil" },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <OfflineStatus />
      {/* Top Bar - Mobile & Desktop */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm h-16 flex justify-between items-center px-6 lg:px-12 border-none">
        <div className="flex items-center gap-4 lg:gap-8">
          <button 
            className="lg:hidden p-2 hover:bg-slate-100 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeXDJtL1JrxakOYoRb7wuBSEayNl3dSIionxVdqjTeSpLZcP42WnBn8fVgltAdih7plAOy8nPJIHpIiU6e1KIRM5WPTelmako92u-Abq8J2wUPP4BKabu_qXI-t2r_uDoIF4UM-fuy3fyMfJkeMrGWETXRalJRT_dWpSBbELFWDp8fhM6-g5uBnlWVEk5oiq0XmltYubsFait68dyeqf6bis089yFXxnQI-8UNXvFEw-jLavJfhMjY1ly4sDpv2zUyTNvI_q8UOrtH" 
              alt="Logo" 
              className="w-8 h-8 rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-black tracking-tighter text-blue-900 font-headline">Aula Viva</span>
          </Link>
          
          {!isOnline && (
            <span className="hidden sm:inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
              Offline
            </span>
          )}
          
          <nav className="hidden md:flex gap-8 ml-8">
            <Link to="/" className="text-sm font-medium text-slate-500 hover:text-secondary cursor-pointer transition-colors">Dashboard</Link>
            <Link to="/cursos" className="text-sm font-medium text-slate-500 hover:text-secondary cursor-pointer transition-colors">Académico</Link>
            <Link to="/horario" className="text-sm font-medium text-slate-500 hover:text-secondary cursor-pointer transition-colors">Horario</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <div className="hidden sm:flex bg-surface-container-high rounded-full px-4 py-1.5 items-center gap-2">
            <Search size={16} className="text-slate-500" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-transparent border-none text-sm focus:outline-none w-32 lg:w-48"
            />
          </div>
          <Link to="/notificaciones" className="p-2 hover:bg-slate-50 rounded-full transition-all relative">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Link>
          <Link to="/configuracion" className="p-2 hover:bg-slate-50 rounded-full transition-all">
            <Settings size={20} className="text-slate-600" />
          </Link>
          <Link to="/perfil" className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-highest shadow-sm hover:scale-105 transition-transform">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYX7UnJrCQT8bXYhrWpFOfRUR_uh9qnU4HjpjlgjEjJ1XfbELV1lDh1DT5BlcdpXl6XIOkrOazFqB29jRfG2DGYHDAYCkBojLwR8YQ0KW1hRVzoxoOoR_0iAReBFPBhrZSBNpdTf_YK_CqulbToYSAVYO3Tgz2ocOGcpxG7PbStJkhxyzt76eWCwU7oaap25Xtytep_OjvkSPlXX53F-ggAMVz9x_ZaLVRnzg0lcl0VIVZF0C8RBMYQ5--KiJET-90ZSUQmXI_m_ur" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>
      </header>

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] w-72 fixed left-0 top-16 bg-slate-50 border-r border-slate-200/50 py-8 z-40">
        <div className="px-8 mb-8">
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl editorial-shadow">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-blue-900 font-bold leading-none text-sm">Aula Viva</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Visión 2026</p>
            </div>
          </div>
        </div>

        <nav className="flex-1">
          {navItems.map((item) => (
            <NavItem 
              key={item.to} 
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.to} 
            />
          ))}
        </nav>

        <div className="px-6 mt-auto space-y-4">
          <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-transform editorial-shadow flex items-center justify-center gap-2 text-sm">
            Cambiar Rol
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 text-slate-500 hover:text-primary transition-colors text-sm font-bold">
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black text-blue-900 font-headline">Aula Viva</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl text-xl font-bold transition-all",
                    location.pathname === item.to ? "bg-secondary text-white shadow-lg" : "text-slate-600"
                  )}
                >
                  <item.icon size={28} />
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 pt-16 min-h-screen bg-surface">
        <div className="p-6 lg:p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Bottom Nav - Mobile Only */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl flex justify-around items-center px-4 pb-8 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-[2.5rem]">
        {navItems.slice(0, 4).map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex flex-col items-center justify-center p-2 transition-all",
              location.pathname === item.to ? "text-secondary scale-110" : "text-slate-400"
            )}
          >
            <item.icon size={24} className={cn(location.pathname === item.to && "fill-secondary/20")} />
            <span className="text-[10px] font-bold uppercase tracking-widest mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
