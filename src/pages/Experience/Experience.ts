import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Experience.css';

const CHALLENGES = [
  ['Notifiche', 'Disattiva per 60 minuti un’app non essenziale.'],
  ['Tempo libero', 'Dedica 20 minuti a una attività offline senza dispositivi.'],
  ['Studio', 'Studia per 25 minuti tenendo lo smartphone fuori dalla postazione.'],
] as const;

export function createExperience(): HTMLElement {
  const section = el('section', 'experience-page');
  section.id = 'esperienza';

  const list = el('div', 'experience__list');
  for (const [title, text] of CHALLENGES) {
    const card = el('label', 'experience__card');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'experience__check';
    const copy = el('span', 'experience__copy');
    copy.append(
      el('strong', 'experience__title', title),
      el('span', 'experience__text', text),
    );
    card.append(
      checkbox,
      el('span', 'experience__checkmark', ''),
      copy,
    );
    list.append(card);
  }

  const progress = el('p', 'experience__progress', '0 attività completate');
  list.addEventListener('change', () => {
    const completed = list.querySelectorAll<HTMLInputElement>('input:checked').length;
    progress.textContent =
      completed === 0
        ? '0 attività completate'
        : `${completed} di ${CHALLENGES.length} attività completate`;
  });

  section.append(
    createSectionHeader({
      eyebrow: 'Esperienza',
      title: 'Prova piccoli digital detox',
      titleId: 'esperienza-title',
      description: 'Tre sfide brevi per osservare quanto sia facile creare momenti di disconnessione consapevole.',
    }),
    list,
    progress,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
