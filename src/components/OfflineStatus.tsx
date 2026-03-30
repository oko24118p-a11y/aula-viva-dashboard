import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export default function OfflineStatus() {
  const isOnline = useOnlineStatus();
  const [showNotification, setShowNotification] = useState(false);
  const [lastStatus, setLastStatus] = useState(navigator.onLine);

  useEffect(() => {
    if (isOnline !== lastStatus) {
      setShowNotification(true);
      setLastStatus(isOnline);
      
      // Auto-hide "Back online" notification after 5 seconds
      if (isOnline) {
        const timer = setTimeout(() => setShowNotification(false), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isOnline, lastStatus]);

  return (
    <>
      {/* Persistent Top Bar when Offline */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-16 left-0 w-full z-[100] bg-primary text-white py-2 px-4 flex items-center justify-center gap-3 shadow-lg overflow-hidden"
          >
            <WifiOff size={16} className="animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest">Modo Offline Activado • Usando datos en caché</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Notification for Status Changes */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className={cn(
              "fixed bottom-24 right-6 z-[100] p-6 rounded-3xl shadow-editorial flex items-center gap-4 border-l-8",
              isOnline ? "bg-white border-green-500" : "bg-white border-primary"
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center",
              isOnline ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary"
            )}>
              {isOnline ? <Wifi size={24} /> : <WifiOff size={24} />}
            </div>
            <div className="flex-1 pr-4">
              <h4 className="font-bold text-on-surface">
                {isOnline ? "Conexión Restablecida" : "Sin Conexión"}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {isOnline 
                  ? "Vuelves a estar en línea. Sincronizando datos..." 
                  : "Estás trabajando en modo offline. Algunas funciones pueden estar limitadas."}
              </p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={16} className="text-slate-400" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
