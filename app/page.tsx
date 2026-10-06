'use client'

import { ArrowDownRight, ArrowUpRight, Code2, Cpu, Database, ExternalLink, Factory, Github, Layers3, Mail, Menu, Smartphone, X } from 'lucide-react'
import { useState } from 'react'

const engineeringSkills = ['Production Engineering','Production Management','Machining','Engineering Drawing','Computer-Aided Engineering (CAE)','Design Optimization','Product Development','3D Printing','Statistical Analysis']
const softwareSkills = ['Full-Stack Web Development','Android Mobile App Development (Kotlin)','Data Science Fundamentals','Artificial Intelligence Fundamentals','Programming Foundations']

const projects = [
  { id:'production', number:'01', title:'Production Line Optimization Platform', type:'Industrial Engineering + Data Science', year:'—', badges:['Data Science','Production Engineering','Next.js'], meta:'Systems-oriented portfolio project', icon:Factory },
  { id:'android', number:'02', title:'Native Android Management Suite', type:'Kotlin, Android Development, Mobile UX', year:'—', badges:['Kotlin','Android','Mobile UX'], meta:'Native mobile systems concept', icon:Smartphone },
  { id:'cae', number:'03', title:'Computer-Aided Engineering Engine', type:'Design Optimization & 3D Printing', year:'—', badges:['CAE','Python','3D Printing'], meta:'Engineering computation concept', icon:Cpu },
]

function Tag({children}:{children:React.ReactNode}) { return <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-blue-700">{children}</span> }

export default function Home() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-b hairline bg-[#F9FAFB]/90 py-4 backdrop-blur-md">
          <a href="#top" onClick={close} className="text-sm font-black tracking-tight">Khalil Etana</a>
          <nav aria-label="Primary navigation" className="hidden gap-7 text-xs font-bold uppercase tracking-[.12em] md:flex">
            {['Work','About','Journal','Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-blue-600">{item}</a>)}
          </nav>
          <button className="md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={21}/>:<Menu size={21}/>}</button>
        </div>
        {open && <nav aria-label="Mobile navigation" className="border-b hairline bg-[#F9FAFB] py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-bold">{['Work','About','Journal','Contact'].map(item=><a onClick={close} key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div></nav>}
      </header>

      <section id="top" className="mx-auto max-w-7xl px-4 pb-28 pt-44 sm:px-6 lg:px-10 lg:pb-40 lg:pt-56">
        <div className="max-w-[1200px]">
          <p className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-blue-700"><span className="h-px w-10 bg-blue-600"/>Industrial Engineering × Software</p>
          <h1 className="display text-balance">Industrial Engineer by design. Full-Stack Developer by execution.</h1>
          <div className="mt-12 grid gap-10 border-t hairline pt-8 md:grid-cols-[1fr_360px]">
            <p className="max-w-3xl text-xl leading-relaxed text-gray-700 sm:text-2xl">Building data-driven, innovative tech to solve complex physical and digital challenges.</p>
            <p className="text-sm leading-7 text-gray-600">Wollega University College of Engineering and Technology<br/>Nekemte, Oromia, Ethiopia<br/><span className="text-gray-400">Originated from Metu</span></p>
          </div>
        </div>
        <a href="#work" className="mt-16 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[.16em] hover:text-blue-600"><ArrowDownRight size={18}/>Explore selected work</a>
      </section>

      <section id="work" className="border-y hairline">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-blue-700">Selected work</p><h2 className="section-title">Work that connects systems.</h2></div><p className="max-w-sm text-sm leading-7 text-gray-600">A portfolio direction that treats engineering and software as one connected problem-solving practice.</p></div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((p, i) => { const Icon=p.icon; return <a href={`#${p.id}`} key={p.id} className="project-card group min-h-[520px] border hairline p-5 sm:p-7 flex flex-col">
              <div className="grid-lines relative flex h-64 items-center justify-center overflow-hidden border hairline bg-white"><div className="absolute left-5 top-5 text-[10px] font-black tracking-[.2em] text-gray-400">PROJECT / {p.number}</div><Icon size={82} strokeWidth={1} className="text-blue-600"/><div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] font-bold uppercase tracking-[.14em] text-gray-400"><span>{p.type}</span><span>{p.year}</span></div></div>
              <div className="flex flex-1 flex-col pt-7"><div className="flex items-start justify-between gap-4"><h3 className="max-w-sm text-2xl font-extrabold leading-tight tracking-[-.035em]">{p.title}</h3><ArrowUpRight className="project-arrow shrink-0" size={21}/></div><p className="mt-4 text-sm leading-6 text-gray-500">{p.meta}</p><div className="mt-auto flex flex-wrap gap-2 pt-8">{p.badges.map(b=><Tag key={b}>{b}</Tag>)}</div></div>
            </a>})}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
        <div className="mb-14"><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-blue-700">Case study structure</p><h2 className="section-title max-w-5xl">From bottleneck to integrated system.</h2></div>
        <div className="border-t hairline">
          <CaseStudy id="production" title="Production Line Optimization Platform" subtitle="Industrial Engineering + Data Science" />
          <CaseStudy id="android" title="Native Android Management Suite" subtitle="Kotlin, Android Development, Mobile UX" />
          <CaseStudy id="cae" title="Computer-Aided Engineering Engine" subtitle="Design Optimization & 3D Printing" />
        </div>
      </section>

      <section id="about" className="border-y hairline bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-28"><h2 className="section-title">From Metu to Nekemte: Engineering Impact</h2><div><p className="text-2xl font-semibold leading-snug tracking-tight">Industrial engineering gave me a systems lens. Software development gives that lens another medium for action.</p><div className="mt-9 space-y-6 text-base leading-8 text-gray-600"><p>My academic path is grounded at Wollega University College of Engineering and Technology in Nekemte, Oromia, Ethiopia, with an origin from Metu.</p><p>The portfolio brings together core industrial production disciplines and full-stack programming systems: production, machining, engineering drawing, computer-aided engineering, design optimization and product development alongside web, Android/Kotlin, data science, artificial intelligence and programming foundations.</p><p>The aim is a practical bridge between physical systems and digital systems—using research, development and technology to create regional digital impact.</p></div></div></div>
          <div className="mt-24 grid gap-12 border-t hairline pt-10 md:grid-cols-2"><SkillMatrix title="Engineering / Industrial" icon={<Factory size={20}/>} skills={engineeringSkills}/><SkillMatrix title="Software Development" icon={<Code2 size={20}/>} skills={softwareSkills}/></div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-36"><div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]"><div><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-blue-700">Journal</p><h2 className="section-title">Ideas in progress.</h2></div><div className="border-t hairline">{[['Unraveling Complexities in Production Flows','Date not specified'],['Modern Mobile Ecosystems with Android Kotlin','Date not specified']].map(([title,date],i)=><article key={title} className="group border-b hairline py-8"><a href="#contact" className="grid gap-5 md:grid-cols-[150px_1fr_auto] md:items-start"><span className="text-xs font-bold uppercase tracking-[.14em] text-gray-400">{date}</span><div><h3 className="text-2xl font-extrabold tracking-tight group-hover:text-blue-600">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">Journal entry — summary to be supplied.</p></div><ArrowUpRight className="project-arrow" size={20}/></a></article>)}</div></div></section>

      <section id="contact" className="border-t hairline bg-[#111827] text-white"><div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="mb-5 text-xs font-black uppercase tracking-[.18em] text-blue-400">Contact</p><h2 className="section-title max-w-4xl">Let’s connect engineering thinking with digital execution.</h2></div><div className="space-y-5 text-sm text-gray-300"><a className="flex items-center gap-3 hover:text-white" href="https://www.linkedin.com/in/khaliletanamohd" target="_blank" rel="noreferrer"><ExternalLink size={17}/>LinkedIn</a><a className="flex items-center gap-3 hover:text-white" href="https://www.researchgate.net/profile/Khalil-Etana" target="_blank" rel="noreferrer"><ExternalLink size={17}/>ResearchGate</a><a className="flex items-center gap-3 hover:text-white" href="https://www.facebook.com/khaliletanamoh" target="_blank" rel="noreferrer"><ExternalLink size={17}/>Facebook</a><a className="flex items-center gap-3 hover:text-white" href="mailto:" aria-label="Contact via Email"><Mail size={17}/>Contact via Email</a><p className="pt-3 text-xs leading-5 text-gray-500">Email destination is intentionally left blank because no email address was supplied.</p></div></div><div className="mt-24 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Khalil Etana</span><span>Designed and Programmed by Khalil Etana</span></div></div></section>
    </main>
  )
}

function CaseStudy({id,title,subtitle}:{id:string,title:string,subtitle:string}) { return <article id={id} className="scroll-mt-28 border-b hairline py-14 lg:py-20"><div className="grid gap-10 lg:grid-cols-[1fr_280px]"><div><p className="text-xs font-black uppercase tracking-[.16em] text-blue-700">Case study / {subtitle}</p><h3 className="mt-4 text-4xl font-extrabold tracking-[-.045em] sm:text-6xl">{title}</h3><div className="mt-12 grid gap-10 md:grid-cols-2"><div><h4 className="text-xs font-black uppercase tracking-[.16em]">The Challenge</h4><p className="mt-4 text-base leading-7 text-gray-600">Identifying complex hardware/software system bottlenecks and making the relationships between physical processes, information and decisions easier to reason about.</p></div><div><h4 className="text-xs font-black uppercase tracking-[.16em]">The Solution</h4><p className="mt-4 text-base leading-7 text-gray-600">A data-driven systems approach that connects engineering decision-making with software integration, turning complex inputs into a clearer, more actionable workflow.</p></div></div></div><aside className="border-t hairline pt-5 lg:border-l lg:border-t-0 lg:pl-7"><dl className="space-y-5 text-sm"><Meta label="Collaborators" value="Wollega Engineering Research Group"/><Meta label="Timeline" value="3 Months"/><Meta label="Tools used" value="Figma, Kotlin, Android Studio, Python, Rhino 3D"/><Meta label="Role" value="Engineering Lead / Systems Architect"/></dl></aside></div></article> }
function Meta({label,value}:{label:string,value:string}) { return <div><dt className="text-[10px] font-black uppercase tracking-[.15em] text-gray-400">{label}</dt><dd className="mt-1 leading-6 text-gray-700">{value}</dd></div> }
function SkillMatrix({title,icon,skills}:{title:string,icon:React.ReactNode,skills:string[]}) { return <div><div className="flex items-center gap-3"><span className="text-blue-600">{icon}</span><h3 className="text-xs font-black uppercase tracking-[.16em]">{title}</h3></div><div className="mt-6 grid gap-0 border-t hairline sm:grid-cols-2">{skills.map((skill,i)=><div key={skill} className="border-b hairline py-4 text-sm font-semibold">{String(i+1).padStart(2,'0')} <span className="ml-3 text-gray-700">{skill}</span></div>)}</div></div> }
