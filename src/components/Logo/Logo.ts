import { APP_KICKER, APP_NAME } from '../../app/config';
import { HOME_HASH } from '../../app/navigation';
import './Logo.css';

function createMark(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 32 32');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('logo__mark');

  const screen = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  screen.setAttribute('x', '4');
  screen.setAttribute('y', '6');
  screen.setAttribute('width', '18');
  screen.setAttribute('height', '20');
  screen.setAttribute('rx', '2');

  const person = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  person.setAttribute('cx', '23');
  person.setAttribute('cy', '22');
  person.setAttribute('r', '3.2');

  const link = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  link.setAttribute('d', 'M16 16h5');

  svg.append(screen, link, person);
  return svg;
}

export function createLogo(): HTMLAnchorElement {
  const logo = document.createElement('a');
  logo.className = 'logo';
  logo.href = HOME_HASH;
  logo.setAttribute('aria-label', `${APP_NAME}, torna all'inizio`);

  const text = document.createElement('span');
  text.className = 'logo__text';

  const name = document.createElement('span');
  name.className = 'logo__name';
  name.textContent = APP_NAME;

  const kicker = document.createElement('span');
  kicker.className = 'logo__kicker';
  kicker.textContent = APP_KICKER;

  text.append(name, kicker);
  logo.append(createMark(), text);
  return logo;
}
