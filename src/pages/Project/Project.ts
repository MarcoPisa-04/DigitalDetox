import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Project.css';

export function createProject(): HTMLElement {
  const section = el('section', 'project-page');
  section.id = 'progetto';

  const cards = el('div', 'project__grid');
  cards.append(
    el('article', 'project__card', 'Analizziamo abitudini, meccanismi delle piattaforme e dati raccolti tra i giovani.'),
    el('article', 'project__card', 'Promuoviamo un rapporto più consapevole con la tecnologia, senza demonizzare gli strumenti digitali.'),
    el('article', 'project__card', 'Un laboratorio scolastico dedicato alla ricerca, alla riflessione e a strategie di benessere digitale.'),
  );

  section.append(
    createSectionHeader({
      eyebrow: 'Il progetto',
      title: 'Riconnettersi alla vita. Disconnettersi dallo schermo.',
      titleId: 'progetto-title',
      description: 'La tecnologia è importante nella vita quotidiana. Digital Detox Lab invita a usarla in modo equilibrato, responsabile e consapevole.',
    }),
    cards,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
