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
  MoreHorizontal,
  User
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight text-on-surface font-headline">Welcome in, Nixtio</h1>
          <div className="flex flex-wrap gap-8 pt-4">
            {[
              { label: "Interviews", value: "15%", color: "bg-on-surface" },
              { label: "Hired", value: "15%", color: "bg-tertiary" },
              { label: "Project time", value: "60%", color: "bg-slate-200" },
              { label: "Output", value: "10%", color: "bg-slate-100" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-xs font-bold text-slate-400">{stat.label}</p>
                <div className="flex items-center gap-3">
                  <div className={cn("h-8 px-4 flex items-center justify-center rounded-full text-[10px] font-bold text-white", stat.color)}>
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-12 pb-2">
          {[
            { label: "Employe", value: "78" },
            { label: "Hirings", value: "56" },
            { label: "Projects", value: "203" },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
                <User size={16} className="text-slate-400" />
              </div>
              <div>
                <p className="text-4xl font-bold tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Progress Widget */}
        <div className="crextio-card flex flex-col justify-between min-h-[300px]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">Progress</h3>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-bold tracking-tighter">6.1 h</span>
                <span className="text-xs text-slate-400 font-bold">Work Time this week</span>
              </div>
            </div>
            <button className="p-2 bg-slate-50 rounded-full">
              <ArrowRight size={16} className="-rotate-45" />
            </button>
          </div>
          
          <div className="flex items-end justify-between h-32 gap-2 mt-8">
            {[40, 60, 30, 80, 50, 90, 40].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className={cn(
                    "w-full rounded-full transition-all duration-500",
                    i === 5 ? "bg-on-surface" : "bg-slate-100"
                  )}
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] font-bold text-slate-400">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Tracker Widget */}
        <div className="crextio-card flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">
          <button className="absolute top-6 right-6 p-2 bg-slate-50 rounded-full">
            <ArrowRight size={16} className="-rotate-45" />
          </button>
          <h3 className="absolute top-6 left-6 text-xl font-bold">Time tracker</h3>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Simple SVG Circular Progress */}
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-100"
              />
              <circle
                cx="96"
                cy="96"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="502.4"
                strokeDashoffset="150"
                className="text-tertiary"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold tracking-tighter">02:35</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Work Time</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-4 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
              <PlayCircle size={24} />
            </button>
            <button className="p-4 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
              <Clock size={24} />
            </button>
          </div>
        </div>

        {/* Onboarding Widget */}
        <div className="crextio-card space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Onboarding</h3>
            <span className="text-2xl font-bold">18%</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="h-2 flex-[0.3] bg-tertiary rounded-full" />
              <div className="h-2 flex-[0.25] bg-on-surface rounded-full" />
              <div className="h-2 flex-[0.45] bg-slate-100 rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>30%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Onboarding Task</h4>
              <span className="text-sm font-bold text-slate-400">2/8</span>
            </div>
            <div className="space-y-3">
              {[
                { title: "Interview", time: "Sep 13, 08:30", done: true },
                { title: "Team Meeting", time: "Sep 13, 10:30", done: true },
                { title: "Project Update", time: "Sep 13, 13:00", done: false },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    task.done ? "bg-tertiary text-white" : "bg-white border border-black/5"
                  )}>
                    {task.done ? <CheckCircle2 size={14} /> : <div className="w-2 h-2 rounded-full bg-slate-200" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold">{task.title}</p>
                    <p className="text-[10px] text-slate-400">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Widget - Spans 2 columns on large screens */}
        <div className="crextio-card lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-400">August</span>
              <h3 className="text-xl font-bold">September 2024</h3>
              <span className="text-sm font-bold text-slate-400">October</span>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day}</p>
                <p className={cn(
                  "text-sm font-bold w-8 h-8 flex items-center justify-center mx-auto rounded-full",
                  i === 2 ? "bg-on-surface text-white" : ""
                )}>{22 + i}</p>
              </div>
            ))}
            
            {/* Timeline View */}
            <div className="col-span-7 mt-8 relative h-48 border-t border-black/5 pt-4">
              <div className="absolute left-0 top-4 bottom-0 w-16 space-y-8">
                <span className="text-[10px] font-bold text-slate-400 block">8:00 am</span>
                <span className="text-[10px] font-bold text-slate-400 block">9:00 am</span>
                <span className="text-[10px] font-bold text-slate-400 block">10:00 am</span>
              </div>
              
              <div className="ml-16 relative h-full">
                <div className="absolute left-1/4 top-4 w-1/2 p-4 bg-on-surface text-white rounded-2xl shadow-editorial">
                  <p className="text-xs font-bold">Weekly Team Sync</p>
                  <p className="text-[10px] opacity-70">Discuss progress on projects</p>
                </div>
                
                <div className="absolute left-1/2 top-24 w-1/3 p-4 bg-white border border-black/5 rounded-2xl shadow-editorial">
                  <p className="text-xs font-bold text-on-surface">Onboarding Session</p>
                  <p className="text-[10px] text-slate-400">Introduction for new hires</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Stats Widget */}
        <div className="crextio-card bg-on-surface text-white flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">Onboarding Task</h3>
            <span className="text-2xl font-bold">2/8</span>
          </div>
          
          <div className="space-y-4 mt-8">
            {[
              { title: "Interview", time: "Sep 13, 08:30", done: true },
              { title: "Team Meeting", time: "Sep 13, 10:30", done: true },
              { title: "Project Update", time: "Sep 13, 13:00", done: false },
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-white/10 rounded-2xl">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  task.done ? "bg-tertiary text-white" : "bg-white/20"
                )}>
                  {task.done ? <CheckCircle2 size={14} /> : <div className="w-2 h-2 rounded-full bg-white/20" />}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold">{task.title}</p>
                  <p className="text-[10px] opacity-50">{task.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
