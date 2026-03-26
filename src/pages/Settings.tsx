import { motion } from 'motion/react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Smartphone,
  ChevronRight,
  LogOut,
  HelpCircle,
  Mail
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Settings() {
  const sections = [
    {
      title: "Cuenta y Perfil",
      items: [
        { label: "Información Personal", desc: "Nombre, correo y datos de contacto", icon: User },
        { label: "Seguridad", desc: "Contraseña y autenticación de dos factores", icon: Shield },
        { label: "Preferencias de Correo", desc: "Gestiona qué correos recibes", icon: Mail },
      ]
    },
    {
      title: "Aplicación",
      items: [
        { label: "Notificaciones", desc: "Alertas push y sonidos", icon: Bell },
        { label: "Idioma", desc: "Español (Latinoamérica)", icon: Globe },
        { label: "Modo Oscuro", desc: "Ajusta la apariencia visual", icon: Moon, toggle: true },
        { label: "Dispositivos", desc: "Sesiones activas en otros equipos", icon: Smartphone },
      ]
    },
    {
      title: "Soporte",
      items: [
        { label: "Centro de Ayuda", desc: "Preguntas frecuentes y guías", icon: HelpCircle },
        { label: "Términos y Privacidad", desc: "Aspectos legales del portal", icon: Shield },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <section>
        <span className="font-bold text-[10px] tracking-[0.3em] text-primary uppercase block mb-2">CONFIGURACIÓN</span>
        <h1 className="font-headline text-5xl lg:text-6xl font-extrabold tracking-tighter text-on-surface mb-6">Ajustes</h1>
        <p className="text-slate-500 font-medium">Personaliza tu experiencia en Aula Viva y gestiona la seguridad de tu cuenta.</p>
      </section>

      {/* Settings List */}
      <div className="space-y-12">
        {sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-6">
            <h3 className="text-xs font-black text-slate-300 uppercase tracking-[0.3em] pl-4">{section.title}</h3>
            <div className="bg-white rounded-[2.5rem] editorial-shadow overflow-hidden border border-slate-50">
              <div className="divide-y divide-slate-50">
                {section.items.map((item, iIdx) => (
                  <button 
                    key={iIdx}
                    className="w-full p-8 flex items-center justify-between group hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-slate-500 group-hover:text-secondary transition-colors">
                        <item.icon size={22} />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-on-surface">{item.label}</p>
                        <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                      </div>
                    </div>
                    {item.toggle ? (
                      <div className="w-12 h-6 bg-slate-200 rounded-full relative p-1 transition-colors">
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                      </div>
                    ) : (
                      <ChevronRight size={20} className="text-slate-200 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <section className="pt-8">
        <button className="w-full p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 flex items-center justify-between group hover:bg-primary/10 transition-colors">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
              <LogOut size={22} />
            </div>
            <div className="text-left">
              <p className="font-bold text-primary">Cerrar Sesión</p>
              <p className="text-xs text-primary/60 font-medium">Salir de tu cuenta en este dispositivo</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-primary/40 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-widest mt-12">
          Aula Viva v2.4.0 • Colegio Corazón de Jesús
        </p>
      </section>
    </div>
  );
}
