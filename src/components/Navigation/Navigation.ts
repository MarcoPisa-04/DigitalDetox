import type { NavItemConfig } from '../../types/navigation';
import { createIcon, iconForNav } from '../../utils/icons';
import './Navigation.css';

export interface NavigationOptions {
  items: readonly NavItemConfig[];
  activeId: NavItemConfig['id'];
}

function createAvailableItem(item: Extract<NavItemConfig, { status: 'available' }>, active: boolean): HTMLAnchorElement {
  const link = document.createElement('a');
  link.className = 'nav-item';
  link.href = item.href;
  link.lang = 'en';
  link.dataset.nav = 'available';
  if (active) {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  }

  const label = document.createElement('span');
  label.className = 'nav-item__label';
  label.textContent = item.label;

  link.append(createIcon(iconForNav(item.id)), label);
  return link;
}

function createUpcomingItem(
  item: Extract<NavItemConfig, { status: 'in-development' }>,
  announce: (message: string) => void,
): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nav-item is-upcoming';
  button.lang = 'en';
  button.dataset.nav = 'upcoming';
  button.setAttribute('aria-disabled', 'true');
  button.setAttribute('aria-label', `${item.label}, sezione in sviluppo`);

  const copy = document.createElement('span');
  copy.className = 'nav-item__copy';

  const label = document.createElement('span');
  label.className = 'nav-item__label';
  label.textContent = item.label;

  const status = document.createElement('span');
  status.className = 'nav-item__status';
  status.textContent = 'In sviluppo';

  const dot = document.createElement('span');
  dot.className = 'nav-item__dot';
  dot.setAttribute('aria-hidden', 'true');

  copy.append(label, status);
  button.append(createIcon(iconForNav(item.id)), copy, dot);
  button.addEventListener('click', () => {
    announce(`${item.label}: sezione in sviluppo.`);
  });
  return button;
}

export function createNavigation(options: NavigationOptions): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.id = 'site-nav';
  nav.setAttribute('aria-label', 'Navigazione principale');

  const live = document.createElement('p');
  live.className = 'sr-only';
  live.setAttribute('aria-live', 'polite');

  const list = document.createElement('ul');
  list.className = 'site-nav__list';

  const announce = (message: string): void => {
    live.textContent = '';
    window.setTimeout(() => {
      live.textContent = message;
    }, 40);
  };

  for (const item of options.items) {
    const listItem = document.createElement('li');
    if (item.status === 'available') {
      listItem.append(createAvailableItem(item, item.id === options.activeId));
    } else {
      listItem.append(createUpcomingItem(item, announce));
    }
    list.append(listItem);
  }

  nav.append(live, list);
  return nav;
}
