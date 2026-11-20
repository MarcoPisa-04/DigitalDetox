import type { NavItemConfig } from '../types/navigation';

export const HOME_HASH = '#contenuto';

export const navigationItems: readonly NavItemConfig[] = [
  { id: 'home', label: 'Pagina iniziale', status: 'available', href: HOME_HASH },
  { id: 'discover', label: 'Abitudini digitali', status: 'available', href: '#abitudini' },
  { id: 'understand', label: 'Meccanismi delle piattaforme', status: 'available', href: '#meccanismi' },
  { id: 'data-lab', label: 'Laboratorio dati', status: 'available', href: '#dati' },
  { id: 'simulator', label: 'Simulatore', status: 'available', href: '#simulatore' },
  { id: 'experience', label: 'Esperienza', status: 'available', href: '#esperienza' },
  { id: 'wellness', label: 'Benessere digitale', status: 'available', href: '#benessere' },
  { id: 'reflection', label: 'Riflessione', status: 'available', href: '#riflessione' },
  { id: 'team', label: 'Gruppo di lavoro', status: 'available', href: '#gruppo' },
  { id: 'survey', label: 'Questionario', status: 'available', href: '#questionario' },
  { id: 'project', label: 'Progetto e fonti', status: 'available', href: '#progetto' },
];
