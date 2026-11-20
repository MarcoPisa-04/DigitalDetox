import { createButton } from '../../components/Button/Button';
import { createContainer } from '../../components/Container/Container';
import { el } from '../../utils/dom';
import { createSignalField } from './SignalField';
import './Home.css';

function createHero(): HTMLElement {
  const section = el('section', 'hero');
  section.setAttribute('aria-labelledby', 'hero-title');

  const copy = el('div', 'hero__copy');
  const eyebrow = el('p', 'eyebrow reveal', 'Benessere digitale');

  const title = el('h1', 'hero__title reveal reveal-delay-1');
  title.id = 'hero-title';
  title.append(el('span', 'hero__line', 'Digital'), el('span', 'hero__line', 'Detox Lab'));

  const slogan = el('p', 'hero__slogan reveal reveal-delay-2', 'Riconnettiti con ciò che conta.');

  const lead = el(
    'p',
    'hero__lead reveal reveal-delay-3',
    'Viviamo costantemente connessi. Ma quanto siamo realmente consapevoli del tempo che trascorriamo online?',
  );

  const actions = el('div', 'hero__actions reveal reveal-delay-4');
  actions.append(
    createButton({
      label: 'Esplora il percorso',
      variant: 'primary',
      href: '#percorso',
    }),
    createButton({
      label: 'Scopri il progetto',
      variant: 'secondary',
      href: '#progetto',
    }),
  );

  copy.append(eyebrow, title, slogan, lead, actions);

  const grid = el('div', 'hero__grid');
  grid.append(copy, createSignalField());
  section.append(grid);
  return section;
}

export function createHome(): HTMLElement {
  const page = el('article', 'home');
  page.append(createContainer([createHero()]));
  return page;
}
