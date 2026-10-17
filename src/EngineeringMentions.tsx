import './engineering-mentions.css';

// Verified in @mcgowen_media's Instagram Tagged tab on 2026-10-16.
// Captions establish the post topic, not an individual engineering contribution.
export const engineeringMentions = [
  { id: 'Dd9oM3DlK01', author: 'cometrocketry_utd', title: 'Rocket propulsion with Dr. Ken Overton', topic: 'Rocketry', summary: 'Propulsion hardware, control systems, and propellant chemistry. The post credits video to Krishna Shivran and Owen McGowan.' },
  { id: 'DdZ5La6AbpV', author: 'cometrocketry_utd', title: 'AIAA semester kickoff', topic: 'Rocketry', summary: 'Introducing new members to Comet Rocketry and the semester’s plans. Photography credited to @mcgowen_media.' },
  { id: 'Dc1Pmj2FBN8', author: 'cometrocketry_utd', title: 'Meet Comet Rocketry’s subteams', topic: 'Rocketry', summary: 'An introduction to the team’s subteams, goals, and work.' },
  { id: 'DQNMqdMDzUO', author: 'altf4_rocketry', title: 'ALT-F4 · Meeting 5', topic: 'Rocketry', summary: 'A tagged team meeting recap from ALT-F4 Rocketry.' },
  { id: 'DP7LgTiDzwI', author: 'altf4_rocketry', title: 'ALT-F4 · Meeting 4', topic: 'Rocketry', summary: 'A tagged team meeting recap from ALT-F4 Rocketry.' },
  { id: 'DPXG86YD4L9', author: 'altf4_rocketry', title: 'ALT-F4 · Meeting 3', topic: 'Rocketry', summary: 'A tagged team meeting recap from ALT-F4 Rocketry.' },
  { id: 'DKF7IeFvcUf', author: 'altf4_rocketry', title: 'CAD, simulations, and a first print', topic: 'Design & fabrication', summary: 'The team describes Onshape CAD, OpenRocket simulations, OrcaSlicer, bed leveling, and an XYZ calibration cube.' },
  { id: 'DPFGwt5D9gA', author: 'altf4_rocketry', title: 'ALT-F4 · Locked in', topic: 'Rocketry', summary: 'A tagged update from the rocketry team.' },
  { id: 'DOzHtWkD5ey', author: 'altf4_rocketry', title: 'ALT-F4 · First official meeting', topic: 'Rocketry', summary: 'The team’s first official meeting, with photography credited to @mcgowenphotography.' },
  { id: 'DLGVLaVoboQ', author: 'learnto.bot', kind: 'reel', title: 'Learn To Bot · Take-home project', topic: 'STEM education', summary: 'A tagged preview of a take-home summer camp project from Learn To Bot.' },
  { id: 'DH2VFTQswBd', author: 'twcp.rocketry', title: 'Space and engineering at Bush Elementary', topic: 'STEM outreach', summary: 'Rocket demonstrations, launches, and student questions at an elementary school outreach event.' },
  { id: 'DG23KLLp9sd', author: 'twcp.rocketry', title: 'College Park · March launch recap', topic: 'Rocketry', summary: 'Four teams share launch progress and preparation for the American Rocketry Challenge.' },
  { id: 'DGg8fGZsb_e', author: 'twcp.rocketry', kind: 'reel', title: 'Rank 35 · American Rocketry Challenge', topic: 'Rocketry', summary: 'A team introduction for the competition’s marketing challenge.' },
  { id: 'DFJYSOrMroz', author: 'twcp.rocketry', title: 'Rocketry at Collins Intermediate', topic: 'STEM outreach', summary: 'Introducing students to rocket design, engineering, teamwork, and launch demonstrations.' },
  { id: 'DEImrh8JkJ6', author: 'twcp.rocketry', title: 'Rocket history and launch safety', topic: 'STEM outreach', summary: 'College Park Rocketry’s return visit to Hailey Elementary for STEM education and launches.' },
];

const projectAuthors: Record<string, string[]> = {
  'comet-rocketry': ['cometrocketry_utd'],
  rocketry: ['altf4_rocketry', 'twcp.rocketry'],
  gameboy: ['learnto.bot'],
};

export default function EngineeringMentions({ projectId }: { projectId: string }) {
  const posts = engineeringMentions.filter(post => projectAuthors[projectId]?.includes(post.author));
  if (!posts.length) return null;
  const headingId = `tagged-${projectId}`;
  return <section className="engineering-mentions" aria-labelledby={headingId}>
    <p className="eyebrow">FROM THE TEAMS</p>
    <h3 id={headingId}>Tagged work</h3>
    <p>Engineering-related posts where I’m tagged, shared by the teams and organizations behind the work.</p>
    <div className="engineering-mentions-grid">{posts.map(post =>
      <a className="engineering-mention" key={post.id} href={`https://www.instagram.com/${post.kind || 'p'}/${post.id}/`} target="_blank" rel="noopener noreferrer">
        <span className="eyebrow">{post.topic}</span>
        <h4>{post.title}</h4><p>{post.summary}</p>
        <span className="engineering-mention-source">@{post.author} · Instagram ↗</span>
      </a>
    )}</div>
  </section>;
}
