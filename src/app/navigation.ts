import type { NavItemConfig } from '../types/navigation';

export const HOME_HASH = '#contenuto';

export const navigationItems: readonly NavItemConfig[] = [
  { id: 'home', label: 'Home', status: 'available', href: HOME_HASH },
  { id: 'discover', label: 'Discover', status: 'in-development' },
  { id: 'understand', label: 'Understand', status: 'in-development' },
  { id: 'data-lab', label: 'Data Lab', status: 'in-development' },
  { id: 'simulator', label: 'Simulator', status: 'in-development' },
  { id: 'experience', label: 'Experience', status: 'in-development' },
  { id: 'wellness', label: 'Digital Wellness', status: 'in-development' },
  { id: 'reflection', label: 'Reflection', status: 'in-development' },
  { id: 'project', label: 'Project & Sources', status: 'in-development' },
];
