import { createButton } from '../../components/Button/Button';
import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import { createSignalField } from './SignalField';
import './Home.css';

const PILLARS = [
  { index: '01', title: 'Discover', text: 'Esplorare il mondo digitale.' },
  { index: '02', title: 'Analyze', text: 'Comprendere dati e comportamenti.' },
  { index: '03', title: 'Reflect', text: 'Riscoprire un rapporto consapevole con la tecnologia.' },
] as const;

const TEAM = [
  ['Marco Pisapia', 'Coordinamento, Project Manager e sviluppo tecnico'],
  ['Simone Codetti', 'Abitudini digitali dei giovani'],
  ['Andrea Pacella', 'Meccanismi delle piattaforme'],
  ['Francesco Pappalardo', 'Questionario e raccolta dati'],
  ["Marco Pio D'Amico", 'Strategie di benessere digitale'],
] as const;

function createHero(): HTMLElement {
  const section = el('section', 'hero');
  section.setAttribute('aria-labelledby', 'hero-title');

  const copy = el('div', 'hero__copy');
  const eyebrow = el('p', 'eyebrow reveal', 'Digital wellbeing');
  eyebrow.lang = 'en';

  const title = el('h1', 'hero__title reveal reveal-delay-1');
  title.id = 'hero-title';
  title.append(el('span', 'hero__line', 'Digital'), el('span', 'hero__line', 'Detox Lab'));

  const slogan = el('p', 'hero__slogan reveal reveal-delay-2', 'Reconnect with what matters.');
  slogan.lang = 'en';

  const lead = el(
    'p',
    'hero__lead reveal reveal-delay-3',
    'Viviamo costantemente connessi. Ma quanto siamo realmente consapevoli del tempo che trascorriamo online?',
  );

  const actions = el('div', 'hero__actions reveal reveal-delay-4');
  actions.append(
    createButton({
      label: 'Explore the experience',
      variant: 'primary',
      href: '#percorso',
      lang: 'en',
    }),
    createButton({
      label: 'Discover the project',
      variant: 'secondary',
      href: '#progetto',
      lang: 'en',
    }),
  );

  copy.append(eyebrow, title, slogan, lead, actions);

  const grid = el('div', 'hero__grid');
  grid.append(copy, createSignalField());
  section.append(grid);
  return section;
}

function createPath(): HTMLElement {
  const section = el('section', 'band');
  section.id = 'percorso';
  section.setAttribute('aria-labelledby', 'percorso-title');

  const list = el('ol', 'pillar-list');
  for (const pillar of PILLARS) {
    const item = el('li');
    const card = el('article', 'pillar');
    const index = el('p', 'pillar__index', pillar.index);
    const title = el('h3', 'pillar__title', pillar.title);
    title.lang = 'en';
    card.append(index, title, el('p', 'pillar__text', pillar.text));
    item.append(card);
    list.append(item);
  }

  section.append(
    createSectionHeader({
      eyebrow: 'Percorso',
      title: 'Understanding our digital habits.',
      titleLang: 'en',
      titleId: 'percorso-title',
      description:
        'Digital Detox Lab nasce con l’obiettivo di esplorare il rapporto tra giovani e tecnologia, analizzando abitudini, meccanismi digitali e possibilità di costruire un equilibrio più consapevole.',
    }),
    list,
    el(
      'p',
      'band__note',
      'Queste tre direzioni introducono il laboratorio. Le sezioni dedicate arriveranno negli sprint successivi.',
    ),
  );
  return section;
}

function createProject(): HTMLElement {
  const section = el('section', 'band band--project');
  section.id = 'progetto';
  section.setAttribute('aria-labelledby', 'progetto-title');
  section.append(
    createSectionHeader({
      eyebrow: 'Il progetto',
      title: 'Riconnettersi alla vita. Disconnettersi dallo schermo.',
      titleId: 'progetto-title',
      description:
        'La tecnologia è uno strumento importante nella vita quotidiana. Digital Detox Lab non la mette sotto accusa: invita a usarla in modo equilibrato, responsabile e consapevole.',
    }),
  );
  return section;
}

function createTeam(): HTMLElement {
  const section = el('section', 'band');
  section.id = 'gruppo';
  section.setAttribute('aria-labelledby', 'gruppo-title');

  const list = el('ul', 'team');
  for (const [name, role] of TEAM) {
    const item = el('li', 'team__item');
    item.append(el('p', 'team__name', name), el('p', 'team__role', role));
    list.append(item);
  }

  section.append(
    createSectionHeader({
      eyebrow: 'Gruppo di lavoro',
      title: 'Cinque contributi, una piattaforma.',
      titleId: 'gruppo-title',
      description:
        'Le schede di ricerca sono pronte per essere compilate dagli autori. In questo sprint nessun contributo individuale è stato anticipato o dichiarato concluso.',
    }),
    list,
  );
  return section;
}

function createColophon(): HTMLElement {
  const footer = el('footer', 'colophon');
  footer.append(
    el('p', undefined, 'Digital Detox Lab · Sprint 01 · Foundation'),
    el('p', undefined, 'Interfaccia in italiano, con elementi editoriali in inglese.'),
  );
  return footer;
}

export function createHome(): HTMLElement {
  const page = el('article', 'home');
  page.append(createContainer([createHero(), createPath(), createProject(), createTeam(), createColophon()]));
  return page;
}
