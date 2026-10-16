import type { InstagramMetrics } from './instagramMetrics';
export type SectionId = 'photography' | 'about' | 'favorites' | 'published' | 'engineering' | 'contact';
export type Photo = { id: string; src: string; width: number; height: number; alt: string; caption?: string; credit?: string; favorite?: boolean; note?: string; sourceUrl?: string; sourceLabel?: string; metrics?: InstagramMetrics };
export type Publication = { title: string; publication: string; date?: string; role: string; url: string; thumbnail?: string };
export type Project = { url?: string; id: string; title: string; overview: string; role?: string; process?: string; tools?: string[]; challenges?: string; outcomes?: string; images?: Photo[] };
export const destinations: { id: SectionId; title: string; subtitle: string; number: string }[] = [
  { id: 'photography', title: 'Photography', subtitle: 'Through the viewfinder', number: '01' },
  { id: 'about', title: 'About Me', subtitle: 'A few pages of my story', number: '02' },
  { id: 'favorites', title: 'Personal Favorites', subtitle: 'The ones I keep close', number: '03' },
  { id: 'published', title: 'Published Work', subtitle: 'Photography for The Mercury', number: '04' },
  { id: 'engineering', title: 'Engineering Projects', subtitle: 'Curiosity, made tangible', number: '05' },
  { id: 'contact', title: 'Contact', subtitle: 'A little correspondence', number: '06' },
];
// Supplied personal content only. See CONTENT.md before adding assets.
export const owner = {
  brand: 'McGowen Media', email: 'owenmmcgowan@gmail.com', phone: '+19366475140', phoneDisplay: '(936) 647–5140',
  social: [{ label: 'LinkedIn', handle: 'Owen McGowan', url: 'https://www.linkedin.com/in/mcgowens/' }, { label: 'Instagram', handle: '@mcgowen_media', url: 'https://www.instagram.com/mcgowen_media/' }],
  biography: [
    { heading: 'A little about me', text: 'I’m Owen McGowan, a mechanical engineering student at UT Dallas, class of 2030. I’m from The Woodlands, Texas, and I’ve also lived in Malaysia. I like making things: robots, physical projects, 3D models, websites, and media.' },
    { heading: 'Where it started', text: 'In high school at College Park, I worked on the yearbook, designed and machined robot components with Texas Torque, and led our American Rocketry Challenge team. I also started CPRINTABL3S, my own 3D-printing service, and taught hands-on robotics at LearnToBot.' },
    { heading: 'Life at UTD', text: 'At college, I’m continuing that mix of engineering and creativity. I’m part of Comet Rocketry’s L3 Rockets technical team and lead the club’s marketing. I also photograph for The Mercury, UTD’s student newspaper.' },
    { heading: 'Away from the projects', text: 'I like traveling, trying new technology, photographing wildlife, and spending time with friends. You can also find me playing Minecraft or Magic: The Gathering. Robotics and building things are a big part of my life, but so is having fun with the people around me.' },
  ] as { heading?: string; text: string }[],
};
export const photos: Photo[] = [];
// Mercury placements verified live; photo authorship includes direct owner confirmation.
export const publications: Publication[] = [
  { title: 'Students frustrated over dining hall swipe restrictions', publication: 'The UTD Mercury · Instagram', role: 'Photography · Owen McGowan', url: 'https://www.instagram.com/p/Dd4d-NoiT64/' },
  { title: 'Screw calculus, study the blade', publication: 'The UTD Mercury · Instagram', date: 'September 16, 2026', role: 'Photography · Owen McGowan', url: 'https://www.instagram.com/p/DdW3SIPEbj9/' },
  { title: 'Avride has arrived at UTD!', publication: 'The UTD Mercury · Instagram', date: 'August 18, 2026', role: 'Photography · Owen McGowan', url: 'https://www.instagram.com/p/DcMq3kukeql/' },
  { title: 'Who is the Peanut Butter Guy? — interview photo feature', publication: 'The UTD Mercury · Instagram', date: 'September 12, 2026', role: 'Photography · accompanying the credited Mercury interview', url: 'https://www.instagram.com/p/DdMrTSckZCQ/' },
  { title: 'Mercury exclusive: The man underneath the peanut butter', publication: 'The UTD Mercury', date: 'September 12, 2026', role: 'Photography · Owen McGowan', url: 'https://utdmercury.com/35535/life-arts/the-man-underneath-the-peanut-butter/' },
  { title: 'Peanut Butter Guy — exclusive interview preview', publication: 'The UTD Mercury · Instagram', date: 'September 10, 2026', role: 'Photography · tagged @mcgowen_media', url: 'https://www.instagram.com/p/DdIJSDnRUbj/' },
];
// LinkedIn project names with descriptions and outcomes from the supplied resume.
export const projects: Project[] = [
 { id: 'gameboy', title: 'Gameboy Remake', overview: 'A microelectronic hardware reconstruction and hands-on robotics teaching project.', role: 'R&D / STEM Instructor at LearnToBot.', process: 'Guided students through an Arduino-based Game Boy build with custom shells and bulk-sourced parts.', tools: ['Arduino', '3D printing', 'Electronics'], outcomes: 'Bulk parts cost under $5 per unit.' },
 { id: 'rocketry', url: 'https://www.instagram.com/altf4_rocketry/', title: 'ALTF4 Rocketry', overview: 'Competitive rocketry through the American Rocketry Challenge at College Park High School.', role: 'Team lead, August 2025-May 2026; team member from August 2024.', outcomes: 'Achieved the highest all-time performance score in College Park High School history.' },
 { id: 'printing', title: 'CPRINTABL3S / 3D Printing Service', overview: 'An independent 3D-printing business producing custom parts, with demand driven primarily by science-fair projects.', role: 'Founder & Operations Lead, January 2023-May 2025.', process: 'Maintained and tuned 3D printers and fulfilled customer orders.', tools: ['CAD', '3D printing', 'Printer tuning'], outcomes: 'Fulfilled more than 30 orders and generated over $1,000 in revenue.' },
 { id: 'captured', url: 'https://bookcaptured.vercel.app/', title: 'Captured', overview: 'A web project listed on my LinkedIn portfolio.', tools: ['Web development'] },
 { id: 'automation', title: 'Giveaway Finder + Applier', overview: 'A software automation project combining custom web-scraping and API scripts.', tools: ['Python', 'Web scraping', 'APIs'], outcomes: 'Saved an estimated 24+ hours of manual work.' },
 { id: 'filament', title: 'Recycling PET Bottles into 3D Filament', overview: 'A science-fair project exploring the reuse of PET bottles as 3D-printing filament.', outcomes: '1st place at District and 2nd place at Regionals, 2022-2023.' },
 { id: 'frc', title: 'Texas Torque / Competitive Robotics', overview: 'Mechanical design and machining for FIRST Robotics Competition robots.', role: 'Mechanical Engineer & Machinist, August 2022-May 2024.', process: 'Designed and machined mechanical components for competitive robots.' },
];
