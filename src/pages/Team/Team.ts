import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Team.css';

const TEAM = [
  ['Marco Pisapia', 'Coordinamento, gestione del progetto e sviluppo tecnico'],
  ['Simone Codetti', 'Abitudini digitali dei giovani — contributo completato'],
  ['Andrea Pacella', 'Meccanismi delle piattaforme — contributo completato'],
  ['Francesco Pappalardo', 'Questionario e raccolta dati — questionario disponibile'],
  ["Marco Pio D'Amico", 'Strategie di benessere digitale — contributo completato'],
] as const;

export function createTeam(): HTMLElement {
  const section = el('section', 'team-page');
  section.id = 'gruppo';

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
      description: 'I contributi vengono integrati nella piattaforma man mano che gli autori completano le relative ricerche.',
    }),
    list,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
