import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Discover.css';

const PILLARS = [
  { index: '01', title: 'Scopri', text: 'Esplora il mondo digitale.' },
  { index: '02', title: 'Analizza', text: 'Comprendi dati e comportamenti.' },
  { index: '03', title: 'Rifletti', text: 'Riscopri un rapporto consapevole con la tecnologia.' },
] as const;

export function createDiscover(): HTMLElement {
  const section = el('section', 'discover-page');
  section.id = 'percorso';

  const list = el('ol', 'pillar-list');
  for (const pillar of PILLARS) {
    const item = el('li');
    const card = el('article', 'pillar');
    card.append(
      el('p', 'pillar__index', pillar.index),
      el('h3', 'pillar__title', pillar.title),
      el('p', 'pillar__text', pillar.text),
    );
    item.append(card);
    list.append(item);
  }

  section.append(
    createSectionHeader({
      eyebrow: 'Percorso',
      title: 'Comprendere le nostre abitudini digitali',
      titleId: 'percorso-title',
      description:
        'Digital Detox Lab esplora il rapporto tra giovani e tecnologia attraverso tre direzioni: scoperta, analisi e riflessione.',
    }),
    list,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
