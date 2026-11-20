export type NavId =
  | 'home'
  | 'discover'
  | 'understand'
  | 'data-lab'
  | 'simulator'
  | 'experience'
  | 'wellness'
  | 'reflection'
  | 'team'
  | 'survey'
  | 'project';

export type NavStatus = 'available' | 'in-development';

interface NavBase {
  id: NavId;
  label: string;
}

export type NavItemConfig =
  | (NavBase & { status: 'available'; href: string })
  | (NavBase & { status: 'in-development' });
