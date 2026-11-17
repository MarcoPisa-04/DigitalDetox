import { APP_SPRINT, APP_VERSION } from '../../app/config';
import type { NavItemConfig } from '../../types/navigation';
import { createLogo } from '../Logo/Logo';
import { createNavigation } from '../Navigation/Navigation';
import './Sidebar.css';

export interface SidebarOptions {
  items: readonly NavItemConfig[];
  activeId: NavItemConfig['id'];
}

export function createSidebar(options: SidebarOptions): HTMLElement {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'site-sidebar';
  sidebar.setAttribute('aria-label', 'Barra laterale');

  const brand = document.createElement('div');
  brand.className = 'sidebar__brand';
  brand.append(createLogo());

  const scroll = document.createElement('div');
  scroll.className = 'sidebar__scroll';
  scroll.append(createNavigation(options));

  const footer = document.createElement('footer');
  footer.className = 'sidebar__footer';

  const version = document.createElement('p');
  version.className = 'sidebar__footer-text';
  version.textContent = `v${APP_VERSION} · ${APP_SPRINT}`;

  footer.append(version);
  sidebar.append(brand, scroll, footer);
  return sidebar;
}
