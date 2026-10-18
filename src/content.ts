import type { InstagramMetrics } from './instagramMetrics';
export type SectionId = 'photography' | 'about' | 'favorites' | 'published' | 'engineering' | 'contact';
export type Photo = { id: string; src: string; width: number; height: number; alt: string; caption?: string; credit?: string; favorite?: boolean; note?: string; sourceUrl?: string; sourceLabel?: string; metrics?: InstagramMetrics };
export type Publication = { title: string; publication: string; date?: string; role: string; url: string; thumbnail?: string };
export type Project = { url?: string; id: string; title: string; overview: string; role?: string; process?: string; tools?: string[]; challenges?: string; outcomes?: string; images?: Photo[] };
export const destinations: { id: SectionId; title: string; subtitle: string; number: string }[] = [
  { id: 'photography', title: 'Photography', subtitle: '', number: '01' },
  { id: 'about', title: 'About Me', subtitle: '', number: '02' },
  { id: 'favorites', title: 'Personal Favorites', subtitle: '', number: '03' },
  { id: 'published', title: 'Published Work', subtitle: '', number: '04' },
  { id: 'engineering', title: 'Engineering Projects', subtitle: '', number: '05' },
  { id: 'contact', title: 'Contact', subtitle: '', number: '06' },
];
// Supplied personal content only. See CONTENT.md before adding assets.
export const owner = {
  brand: 'McGowen Media', email: 'owenmmcgowan@gmail.com', phone: '+19366475140', phoneDisplay: '(936) 647–5140',
  social: [{ label: 'LinkedIn', handle: 'Owen McGowan', url: 'https://www.linkedin.com/in/mcgowens/' }, { label: 'Instagram', handle: '@mcgowen_media', url: 'https://www.instagram.com/mcgowen_media/' }],
  biography: [
    { heading: 'Engineering and photography', text: 'I’m Owen McGowan, a mechanical engineering student at The University of Texas at Dallas, working toward my bachelor’s degree in 2030. I’m from The Woodlands, Texas, and attended the International School of Kuala Lumpur in Malaysia. My work connects hands-on engineering, photography, and software: building useful things and finding ways to show how they work.' },
    { heading: 'McGowen Media', text: 'I’ve worked as a freelance commercial photographer since January 2023, creating product photographs for more than 20 brands and building recurring client relationships. My photography also covers cars, live events, campus life, and the street. I handle the work from lighting and shooting to editing and delivery, using a Sony a7 III, Adobe Creative Suite, and Luminar Neo.' },
    { heading: 'LearnToBot', text: 'From June 2025 to August 2026, I worked at LearnToBot as an R&D / STEM instructor in The Woodlands and Katy. I taught learners ages 6–18 through hands-on robotics projects with Arduino, Raspberry Pi, Python, and sensors. One project was an Arduino-based Game Boy with a custom shell and bulk parts costing under $5 per unit.' },
    { heading: 'At UT Dallas', text: 'I photograph for The Mercury, UTD’s student newspaper, and lead marketing contributors for Comet Rocketry, an American Institute of Aeronautics and Astronautics (AIAA) organization. I was also selected as a freshman for its L3 Rockets technical team, continuing the rocketry work I started in high school.' },
    { heading: 'Building and running things', text: 'I founded CPRINTABL3S, a 3D-printing service that fulfilled more than 30 orders from 2023 to 2025, often making parts for science-fair projects. I maintained and tuned the printers as well as managing orders. I also ran a neighborhood pool-cleaning service throughout high school and contributed photography to the yearbook, Chemistry Club, and Magic: The Gathering Club, where I served as media lead.' },
    { heading: 'My STEM foundation', text: 'I attended the Academy of Science & Technology (AST), an application-only STEM academy within The Woodlands College Park High School, from 2022 to 2026. At Texas Torque, I designed and machined components for FIRST Robotics Competition robots. I later led our American Rocketry Challenge team, which achieved the highest performance score in College Park High School history.' },
    { heading: 'Achievements', text: 'My PET-bottle-to-3D-filament science-fair project placed first at District and second at Regionals. My Destination Imagination team placed first at State and second at Globals, with recognition for Instant Challenge and the Renaissance Award. Other team recognition includes FIRST Robotics Quality Awards, an Autonomous Award, Engineering Inspiration, Innovation in Control, Gracious Professionalism, a Chairman’s Award, and finalist finishes. At VEX International, my team received the Best Designed Robot award. I also received Students Achieving Excellence (SAE) awards.' },
    { heading: 'Tools and community', text: 'I work with CAD, 3D printing, electronics, hardware repair, Arduino, Raspberry Pi, Python, and web development. I’ve volunteered with Montgomery County Food Bank and taught children cooking skills at Oscar Johnson Community Center. As an AST Fish Camp counselor, I helped incoming students get to know the academy and one another.' },
    { heading: 'Outside work', text: 'I enjoy traveling, wildlife photography, and spending time with friends. Minecraft gives me another place to build and experiment, while Magic: The Gathering is a chance to think through a strategy and share a game. I’m usually curious about a new piece of technology or planning something to make next.' },
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
 { id: 'comet-rocketry', url: 'https://www.instagram.com/cometrocketry_utd/', title: 'Comet Rocketry', overview: 'UT Dallas rocketry club.', role: 'L3 Rockets technical team member and marketing lead.' },
 { id: 'gameboy', title: 'Gameboy Remake', overview: 'A microelectronic hardware reconstruction and hands-on robotics teaching project.', role: 'R&D / STEM Instructor at LearnToBot.', process: 'Guided students through an Arduino-based Game Boy build with custom shells and bulk-sourced parts.', tools: ['Arduino', '3D printing', 'Electronics'], outcomes: 'Bulk parts cost under $5 per unit.' },
 { id: 'rocketry', url: 'https://www.instagram.com/altf4_rocketry/', title: 'ALTF4 Rocketry', overview: 'Competitive rocketry through the American Rocketry Challenge at College Park High School.', role: 'Team lead, August 2025-May 2026; team member from August 2024.', outcomes: 'Achieved the highest all-time performance score in College Park High School history.' },
 { id: 'printing', title: 'CPRINTABL3S / 3D Printing Service', overview: 'An independent 3D-printing business producing custom parts, with demand driven primarily by science-fair projects.', role: 'Founder & Operations Lead, January 2023-May 2025.', process: 'Maintained and tuned 3D printers and fulfilled customer orders.', tools: ['CAD', '3D printing', 'Printer tuning'], outcomes: 'Fulfilled more than 30 orders and generated over $1,000 in revenue.' },
 { id: 'captured', url: 'https://bookcaptured.vercel.app/', title: 'Captured', overview: 'A web project listed on my LinkedIn portfolio.', tools: ['Web development'] },
 { id: 'automation', title: 'Giveaway Finder + Applier', overview: 'A software automation project combining custom web-scraping and API scripts.', tools: ['Python', 'Web scraping', 'APIs'], outcomes: 'Saved an estimated 24+ hours of manual work.' },
 { id: 'filament', title: 'Recycling PET Bottles into 3D Filament', overview: 'A science-fair project exploring the reuse of PET bottles as 3D-printing filament.', outcomes: '1st place at District and 2nd place at Regionals, 2022-2023.' },
 { id: 'frc', title: 'Texas Torque / Competitive Robotics', overview: 'Mechanical design and machining for FIRST Robotics Competition robots.', role: 'Mechanical Engineer & Machinist, August 2022-May 2024.', process: 'Designed and machined mechanical components for competitive robots.' },
];
