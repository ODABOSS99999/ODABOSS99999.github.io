export type SectionId = 'photography' | 'about' | 'favorites' | 'published' | 'engineering' | 'contact';
export type Photo = { id: string; src: string; width: number; height: number; alt: string; caption?: string; credit?: string; favorite?: boolean; note?: string; sourceUrl?: string; sourceLabel?: string };
export type Publication = { title: string; publication: string; date?: string; role: string; url: string; thumbnail?: string };
export type Project = { id: string; title: string; overview: string; role?: string; process?: string; tools?: string[]; challenges?: string; outcomes?: string; images?: Photo[] };
export const destinations: { id: SectionId; title: string; subtitle: string; number: string }[] = [
  { id: 'photography', title: 'Photography', subtitle: 'Through the viewfinder', number: '01' },
  { id: 'about', title: 'About Me', subtitle: 'A few pages of my story', number: '02' },
  { id: 'favorites', title: 'Personal Favorites', subtitle: 'The ones I keep close', number: '03' },
  { id: 'published', title: 'Published Work', subtitle: 'Out in the world', number: '04' },
  { id: 'engineering', title: 'Engineering Projects', subtitle: 'Curiosity, made tangible', number: '05' },
  { id: 'contact', title: 'Contact', subtitle: 'A little correspondence', number: '06' },
];
// Supplied personal content only. See CONTENT.md before adding assets.
export const owner = {
  brand: 'McGowen Media', email: 'owenmmcgowan@gmail.com', phone: '+19366475140', phoneDisplay: '(936) 647–5140',
  social: [{ label: 'Instagram', handle: '@mcgowen_media', url: 'https://www.instagram.com/mcgowen_media/' }],
  biography: [] as { heading?: string; text: string }[],
};
export const photos: Photo[] = [];
export const publications: Publication[] = [];
export const projects: Project[] = [];
