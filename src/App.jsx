
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Terminal,
  Code2,
  Calendar,
  MapPin,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_GROUPS, EXPERIENCES, PROJECTS, getIcon } from './constants';
import AIChat from './components/AIChat';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-['Inter'] selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            LR
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </div>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <Terminal className="w-3 h-3" />
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              I build <span className="text-blue-600">scalable</span> frontend solutions.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <div className="flex gap-4">
               <a
  href={PERSONAL_INFO.github}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
  title="GitHub"
>
  <Github className="w-5 h-5" />
</a>

              <a
  href={PERSONAL_INFO.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
  title="LinkedIn"
>
  <Linkedin className="w-5 h-5" />
</a>

                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" title="Phone">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{PERSONAL_INFO.name}</h2>
                    <p className="text-blue-600 font-medium">{PERSONAL_INFO.title}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <Code2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <span>{PERSONAL_INFO.experience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>India (Gurgaon)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>B.Tech Graduate 2021</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  {/* <span className="text-xs font-semibold text-slate-400">RESUME.PDF</span> */}
                  {/* <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    View Full Resume <ExternalLink className="w-3 h-3" />
                    
                  </button> */}
                 <a
  href="https://drive.google.com/file/d/1xuhknzOsde4Zma8ynlZC8_tpBBuomNer/preview"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
>
  View Full Resume <ExternalLink className="w-3 h-3" />
</a>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-100/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Technical Arsenal</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Modern tools for building high-performance digital experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Professional Journey</h2>
              <p className="text-slate-500">A track record of delivering enterprise-grade solutions in fast-paced environments.</p>
            </div>
            <div className="md:w-2/3 space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100 group">
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white group-hover:scale-125 transition-transform" />
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((item, iIdx) => (
                        <li key={iIdx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
              <p className="text-slate-400 max-w-xl">Deep dives into architecture, performance, and user-centric design.</p>
            </div>
            <a href={PERSONAL_INFO.github} className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              See all code <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="group bg-slate-800/50 rounded-3xl p-8 border border-slate-800 hover:border-blue-500/30 transition-all hover:bg-slate-800">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(proj.icon)}
                </div>
                <h3 className="text-xl font-bold mb-4">{proj.title}</h3>
                <div className="space-y-3 mb-6">
                  {proj.description.map((desc, dIdx) => (
                    <p key={dIdx} className="text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-bold text-slate-900 text-lg">Lav Rai</span>
            <span className="hidden md:block">|</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" className="hover:text-blue-600 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Interactive AI Chat */}
      <AIChat />
    </div>
  );
};

export default App;
