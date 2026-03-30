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
    { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/horario", icon: Calendar, label: "People" },
    { to: "/cursos", icon: GraduationCap, label: "Hiring" },
    { to: "/calificaciones", icon: Award, label: "Devices" },
    { to: "/asistencia", icon: CheckCircle2, label: "Apps" },
    { to: "/recursos", icon: BookOpen, label: "Salary" },
    { to: "/notificaciones", icon: Bell, label: "Calendar" },
    { to: "/perfil", icon: User, label: "Reviews" },
  ];

  return (
    <div className="min-h-screen bg-surface p-4 lg:p-8 font-body">
      <OfflineStatus />
      
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-4rem)]">
        {/* Sidebar - Integrated into the layout like the image */}
        <aside className="hidden lg:flex flex-col w-80 shrink-0 space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3 px-4">
            <div className="w-10 h-10 bg-on-surface rounded-xl flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-on-surface font-headline">Crextio</span>
          </div>

          {/* Profile Card - Left Column in image */}
          <div className="relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-editorial">
            <img 
              src="https://picsum.photos/seed/profile/600/800" 
              alt="Lora Piterson" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold">Alejandro Ortiz</h3>
              <p className="text-sm opacity-70">Estudiante de Ingeniería</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">$1,200</span>
              </div>
            </div>
          </div>

          {/* Accordion Menu - Left Column in image */}
          <div className="space-y-2">
            {[
              { label: "Pension contributions", icon: Award },
              { label: "Devices", icon: Settings, active: true },
              { label: "Compensation Summary", icon: Award },
              { label: "Employee Benefits", icon: Award },
            ].map((item, idx) => (
              <div 
                key={idx}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer",
                  item.active ? "bg-white shadow-editorial" : "hover:bg-black/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={item.active ? "text-secondary" : "text-slate-400"} />
                  <span className={cn("text-sm font-bold", item.active ? "text-on-surface" : "text-slate-500")}>{item.label}</span>
                </div>
                <Menu size={14} className="text-slate-300" />
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Top Navigation Bar - Integrated */}
          <header className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap gap-1 bg-black/5 p-1 rounded-full">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                    location.pathname === item.to 
                      ? "bg-on-surface text-white shadow-lg" 
                      : "text-slate-500 hover:text-on-surface"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-3 bg-white rounded-full shadow-editorial hover:scale-105 transition-transform">
                <Settings size={20} />
              </button>
              <button className="p-3 bg-white rounded-full shadow-editorial hover:scale-105 transition-transform relative">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
              </button>
              <Link to="/perfil" className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-editorial">
                <img 
                  src="https://picsum.photos/seed/profile/100/100" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>

      {/* Mobile Menu Overlay - Simplified for this design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden bg-surface p-8"
          >
            {/* Mobile menu content... simplified for now */}
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 p-3 bg-white rounded-full">
              <X size={24} />
            </button>
            <div className="flex flex-col gap-4 mt-16">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black text-on-surface"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
