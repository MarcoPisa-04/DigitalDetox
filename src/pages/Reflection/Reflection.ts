import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Reflection.css';

export function createReflection(): HTMLElement {
  const section = el('section', 'reflection-page');
  section.id = 'riflessione';

  const prompts = [
    ['Tempo', 'In quali momenti della giornata controlli lo smartphone quasi automaticamente?'],
    ['Relazioni', 'Come cambia la qualità dei tuoi rapporti quando il telefono è lontano?'],
    ['Benessere', 'Quale piccola abitudine potresti mantenere per proteggere sonno e concentrazione?'],
  ];

  const list = el('div', 'reflection__list');
  for (const [label, prompt] of prompts) {
    const card = el('article', 'reflection__card');
    card.append(el('p', 'reflection__label', label), el('p', 'reflection__prompt', prompt));
    const textarea = document.createElement('textarea');
    textarea.className = 'reflection__answer';
    textarea.rows = 4;
    textarea.placeholder = 'Scrivi una breve riflessione personale...';
    card.append(textarea);
    list.append(card);
  }

  section.append(
    createSectionHeader({
      eyebrow: 'Riflessione',
      title: 'Portare il progetto nella quotidianità',
      titleId: 'riflessione-title',
      description: 'Osservare le proprie abitudini è il primo passo per decidere quali mantenere e quali modificare.',
    }),
    list,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
