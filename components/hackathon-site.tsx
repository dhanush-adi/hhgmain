'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, ExternalLink, Menu, Minus, Plus, X } from 'lucide-react'

const APPLICATION_URL = process.env.NEXT_PUBLIC_APPLICATION_URL || '#apply'

const navItems = [
  ['About', 'about'],
  ['Partners', 'partners'],
  ['Mentors & Judges', 'mentors'],
  ['FAQs', 'faqs'],
]

const partners = [
  ['Wispr Flow', 'https://wisprflow.ai'],
  ['Cake Wallet', 'https://cakewallet.com'],
  ['AI Grants', 'https://aigrants.in'],
  ['Dodo Payments', 'https://dodopayments.com'],
  ['Edge City', 'https://www.edgecity.live'],
  ['Socket', 'https://socket.dev'],
  ['TigerGraph', 'https://www.tigergraph.com'],
]

const people = [
  { name: 'Daavya', role: 'Speaker', company: 'Marketing India - Cake Wallet', initials: 'D', image: '/Daavya.png' },
  { name: 'Davin Dong', role: 'Judge', company: 'Founder of Cookiy Labs', initials: 'DD', image: '/Davin Dong .jpeg' },
  { name: 'Rohan Kochhar', role: 'Speaker', company: 'India Growth - Wispr Flow', initials: 'RK', image: '/Rohan.png' },
  { name: 'Devanshu', role: 'Speaker', company: 'Devrel - Tiger graph', initials: 'D', image: '/Devanshu.png' },
]

const faqs = [
  ['Who can participate?', 'Anyone interested in building and solving problems can apply, including developers, designers, product managers and people with strong ideas. The original HH GOA website encourages teams of one to three and also accepts solo participants.'],
  ['How does the selection process work?', 'The original process includes shortlisting tasks, a waitlist and a final selection of teams for in-person participation. Confirm the current selection process before publishing this answer.'],
  ['What should I bring?', 'Bring your laptop, charger and any hardware required for your project. The original event information lists workspace, power outlets, Wi-Fi, meals and caffeine among the provided amenities.'],
  ['Is participation free?', 'The original HH GOA website states that participation is free and that accommodation, meals and event amenities are provided for its four-day residency. Confirm that these conditions apply to the event you are publishing.'],
  ['How are teams formed?', 'Participants can arrive with an existing team or connect with potential teammates through team formation and networking activities.'],
  ['Can I start working on my project beforehand?', 'You can brainstorm and plan in advance. The original event rules state that code must be written during the hackathon, while existing libraries, APIs and frameworks may be used.'],
]

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`section-label ${dark ? 'section-label-dark' : ''}`}><span />{children}</p>
}

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Hacker House Goa home">
      <img src="/logo.png" alt="Hacker House Goa" />
      <img src="/247pm studio.png" alt="247pm Studio" />
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-nav">
    <div className="container nav-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="nav-apply" href={APPLICATION_URL}>Apply <ArrowUpRight aria-hidden="true" /></a>
      <button className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a href={APPLICATION_URL} className="mobile-nav-apply" onClick={() => setOpen(false)}>Apply <ArrowUpRight /></a></nav>}
  </header>
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-lines" aria-hidden="true" />
    <div className="hero-sun" aria-hidden="true"><span /></div>
    <div className="container hero-content">
      <SectionLabel dark>Hacker House Goa 2026 / Goa, India</SectionLabel>
      <h1>Hacker<br /><em>House Goa</em></h1>
      <p className="hero-copy">Four days in Goa for people who build. Work on meaningful technical challenges, collaborate with fellow builders, and turn ideas into working projects.</p>
      <div className="hero-actions"><a className="button button-pink" href={APPLICATION_URL}>Apply <ArrowUpRight /></a><a className="text-link light" href="#about">Discover the house <ArrowDown /></a></div>
      <div className="hero-meta"><span><b>Dates</b> 28–31 October 2026</span><span><b>Location</b> Goa, India</span><span><b>Format</b> In person</span></div>
    </div>
    <div className="hero-side-note">scroll to explore <ArrowDown /></div>
  </section>
}

function About() {
  return <section className="section about" id="about"><div className="container about-grid"><div><SectionLabel>01 / the why</SectionLabel><h2>A focused place<br /><span>to make things.</span></h2></div><div className="about-text"><p className="lead">Hacker House Goa brings developers, designers, product thinkers and technical creators together for an intensive, hands-on building experience.</p><p>The focus is simple: solve meaningful problems, experiment with technology, collaborate with other builders and turn ideas into working projects.</p><p>Come ready to build, learn and ship.</p></div></div></section>
}

function Partners() {
  return <section className="section partners" id="partners"><div className="container"><SectionLabel>02 / in good company</SectionLabel><div className="partners-head"><h2>Stronger<br /><span>together.</span></h2><p>Technology companies, open-source projects and builder communities supporting a more open ecosystem.</p></div><div className="partner-grid">{partners.map(([name, url]) => <a className="partner-card" href={url} target="_blank" rel="noopener noreferrer" key={name}><span className="partner-external"><ExternalLink aria-hidden="true" /></span><strong>{name}</strong><span className="partner-description">Official partner website</span></a>)}</div></div></section>
}

function PeopleSection() {
  return <section className="section people" id="mentors"><div className="container"><div className="section-head people-head"><div><SectionLabel>03 / the people</SectionLabel><h2>Mentors<br /><span>& judges.</span></h2></div><p>Profiles will be announced soon.</p></div><div className="people-grid">{people.map((person, i) => <article className="person-card" key={i}><div className={`portrait portrait-${i}`}>{person.image ? <img src={person.image} alt={person.name} /> : <span>{person.initials}</span>}</div><div className="person-info"><div><h3>{person.name}</h3><p>{person.role} · {person.company}</p></div><span className="person-placeholder" aria-label="Profile link to be confirmed"><ExternalLink /></span></div></article>)}</div></div></section>
}

function FAQs() {
  const [active, setActive] = useState<number | null>(0)
  return <section className="section faqs" id="faqs"><div className="container faq-grid"><div><SectionLabel>04 / good to know</SectionLabel><h2>Questions,<br /><span>answered.</span></h2><p>Some answers are adapted from the original HH GOA website and should be confirmed before publishing.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${active === i ? 'active' : ''}`} key={question}><button onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i}><span>{question}</span>{active === i ? <Minus /> : <Plus />}</button>{active === i && <p>{answer}</p>}</div>)}</div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><div><Brand /><p className="footer-copy">Hacker House Goa<br />A focused place to make things.</p><p className="footer-event">Goa, India · 28–31 October 2026</p></div><div className="footer-links"><div><span>Explore</span>{navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div><span>Apply</span><a href={APPLICATION_URL}>Apply to participate <ArrowUpRight /></a><span className="footer-config">Contact and social links to be confirmed.</span></div></div></div><div className="container footer-bottom"><span>© 2026 Hacker House Goa. All rights reserved.</span><span>Hacker House Goa <span className="footer-sun">●</span></span></div></footer>
}

export default function HackathonSite() {
  return <main><Navbar /><Hero /><About /><Partners /><PeopleSection /><FAQs /><Footer /></main>
}
