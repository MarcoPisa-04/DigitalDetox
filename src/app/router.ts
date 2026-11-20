import { HOME_HASH, navigationItems } from './navigation';

const PAGE_ANCHORS = new Set([
  'contenuto',
  'abitudini',
  'percorso',
  'meccanismi',
  'questionario',
  'benessere',
  'dati',
  'simulatore',
  'esperienza',
  'riflessione',
  'progetto',
  'gruppo',
]);

function normalizeHash(hash: string): string {
  return hash.replace(/^#/, '');
}

function enforceKnownDestination(): void {
  const hash = normalizeHash(window.location.hash);

  if (hash.length === 0 || PAGE_ANCHORS.has(hash)) {
    return;
  }

  if (hash === 'home') {
    if (window.location.hash !== HOME_HASH) {
      history.replaceState(null, '', HOME_HASH);
    }
    return;
  }

  const item = navigationItems.find((entry) => entry.id === hash);
  if (item?.status === 'available') {
    return;
  }

  if (window.location.hash !== HOME_HASH) {
    history.replaceState(null, '', HOME_HASH);
  }
}

export function initRouter(): void {
  window.addEventListener('hashchange', enforceKnownDestination);
  enforceKnownDestination();
}
