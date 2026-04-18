
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
import ColorPanel from './components/ColorPanel';

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
          <div className="text-xl font-bold ac-gradient">
            LR
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="ac-hover transition-colors">About</a>
            <a href="#skills" className="ac-hover transition-colors">Skills</a>
            <a href="#experience" className="ac-hover transition-colors">Experience</a>
            <a href="#projects" className="ac-hover transition-colors">Projects</a>
          </div>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            target="_blank"
            rel="noopener noreferrer"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full ac-bg-light ac-text text-xs font-bold uppercase tracking-wider">
              <Terminal className="w-3 h-3" />
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              I build <span className="ac-text">scalable</span> frontend solutions.
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

                <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" title="Phone">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="relative group">
              <div className="absolute -inset-1 ac-glow rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{PERSONAL_INFO.name}</h2>
                    <p className="ac-text font-medium">{PERSONAL_INFO.title}</p>
                  </div>
                  <div className="w-12 h-12 ac-bg-light rounded-2xl flex items-center justify-center ac-text">
                    <Code2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Briefcase className="w-4 h-4 ac-text" style={{opacity:0.6}} />
                    <span>{PERSONAL_INFO.experience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4 ac-text" style={{opacity:0.6}} />
                    <span>India (Gurgaon)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Calendar className="w-4 h-4 ac-text" style={{opacity:0.6}} />
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
  className="ac-text text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
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
                <h3 className="text-sm font-bold ac-text uppercase tracking-wider mb-4">{group.category}</h3>
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
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full ac-bg border-4 border-white group-hover:scale-125 transition-transform" />
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="ac-text font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((item, iIdx) => (
                        <li key={iIdx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 ac-text shrink-0 mt-0.5" style={{opacity:0.6}} />
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
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 ac-text hover:opacity-80 font-medium transition-colors">
              See all code <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="group bg-slate-800/50 rounded-3xl p-8 border border-slate-800 ac-card-hover transition-all hover:bg-slate-800">
                <div className="w-12 h-12 ac-bg-muted rounded-2xl flex items-center justify-center ac-text mb-6 group-hover:scale-110 transition-transform">
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
                    <span key={tIdx} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 ac-tag rounded-md border">
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
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="ac-hover transition-colors">LinkedIn</a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="ac-hover transition-colors">GitHub</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="ac-hover transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Interactive AI Chat */}
      <AIChat />
      {/* Colour palette panel */}
      <ColorPanel />
    </div>
  );
};

export default App;
