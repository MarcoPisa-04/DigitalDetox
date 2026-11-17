import { Menu, X } from 'lucide';
import { createHome } from '../pages/Home/Home';
import { createLogo } from '../components/Logo/Logo';
import { createSidebar } from '../components/Sidebar/Sidebar';
import { getFocusable, trapTabKey } from '../utils/focus';
import { createIcon } from '../utils/icons';
import { el } from '../utils/dom';
import { navigationItems } from './navigation';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/global.css';
import '../styles/layout.css';
import '../styles/responsive.css';

const MOBILE_QUERY = '(max-width: 767px)';

function isElementTarget(target: EventTarget | null): target is Element {
  return target instanceof Element;
}

export function mountApp(root: HTMLElement): void {
  const mobileQuery = window.matchMedia(MOBILE_QUERY);
  let isOpen = false;

  const topbar = el('header', 'topbar');
  const toggle = el('button', 'menu-toggle');
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', 'site-sidebar');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Apri il menu di navigazione');

  const setToggleState = (open: boolean): void => {
    toggle.replaceChildren(createIcon(open ? X : Menu, 20));
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute(
      'aria-label',
      open ? 'Chiudi il menu di navigazione' : 'Apri il menu di navigazione',
    );
  };
  setToggleState(false);

  topbar.append(createLogo(), toggle);

  const sidebar = createSidebar({ items: navigationItems, activeId: 'home' });
  const backdrop = el('div', 'nav-backdrop');
  backdrop.hidden = true;
  backdrop.setAttribute('aria-hidden', 'true');

  const main = el('main', 'main-content');
  main.id = 'contenuto';
  main.tabIndex = -1;
  main.append(createHome());

  const brand = sidebar.querySelector<HTMLElement>('.sidebar__brand');

  const syncDrawer = (): void => {
    const mobile = mobileQuery.matches;
    if (brand) {
      brand.hidden = mobile;
    }

    if (!mobile) {
      isOpen = false;
      sidebar.classList.remove('is-open');
      sidebar.inert = false;
      sidebar.removeAttribute('aria-hidden');
      backdrop.hidden = true;
      document.body.classList.remove('nav-open');
      setToggleState(false);
      return;
    }

    sidebar.classList.toggle('is-open', isOpen);
    sidebar.inert = !isOpen;
    sidebar.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    backdrop.hidden = !isOpen;
    document.body.classList.toggle('nav-open', isOpen);
    setToggleState(isOpen);
  };

  const closeMenu = (restoreFocus: boolean): void => {
    isOpen = false;
    syncDrawer();
    if (restoreFocus) {
      toggle.focus();
    }
  };

  const openMenu = (): void => {
    isOpen = true;
    syncDrawer();
    const firstItem = getFocusable(sidebar)[0];
    firstItem?.focus();
  };

  const menuCycle = (): HTMLElement[] => [toggle, ...getFocusable(sidebar)];

  toggle.addEventListener('click', () => {
    if (isOpen) {
      closeMenu(true);
      return;
    }
    openMenu();
  });

  backdrop.addEventListener('click', () => {
    closeMenu(true);
  });

  sidebar.addEventListener('click', (event) => {
    if (!isElementTarget(event.target)) {
      return;
    }
    if (!event.target.closest('[data-nav="available"]')) {
      return;
    }
    if (mobileQuery.matches) {
      closeMenu(false);
      main.focus();
    }
  });

  topbar.addEventListener('click', (event) => {
    if (!isElementTarget(event.target) || !mobileQuery.matches || !isOpen) {
      return;
    }
    if (event.target.closest('a[href]')) {
      closeMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!isOpen || !mobileQuery.matches) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
      return;
    }
    trapTabKey(menuCycle(), event);
  });

  mobileQuery.addEventListener('change', syncDrawer);

  const shell = el('div', 'app-shell');
  shell.append(topbar, backdrop, sidebar, main);
  root.append(shell);
  syncDrawer();
}
