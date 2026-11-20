import { el } from '../../utils/dom';

export function createColophon(): HTMLElement {
  const footer = el('footer', 'colophon');
  footer.append(el('p', undefined, '© 5 C Inf Marco Pisapia'));
  return footer;
}
