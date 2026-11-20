import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Mechanisms.css';

const MECHANISMS = [
  {
    number: '01',
    title: 'Scorrimento infinito',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Persona intenta a usare uno smartphone',
    definition: 'Un modello di interfaccia in cui nuovi contenuti vengono caricati automaticamente mentre l’utente scorre.',
    operation: 'Il sistema rileva la posizione dello scorrimento e carica altri elementi. Il rinforzo a intervallo variabile mantiene attiva l’attesa del contenuto successivo.',
    influence: 'Può ridurre la percezione del tempo trascorso online e indebolire i meccanismi di autoregolazione.',
    example: 'Il feed «Per te» di TikTok e i Reels di Instagram uniscono scorrimento infinito, autoplay e selezione algoritmica.',
    sources: 'Raskin (2006) · Alter (2017) · Wansink, Painter e North (2005)',
  },
  {
    number: '02',
    title: 'FOMO',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Smartphone connesso alle notifiche',
    definition: 'Ansia legata al timore che altri stiano vivendo esperienze o accedendo a informazioni gratificanti senza di noi.',
    operation: 'Confronto sociale, contenuti temporanei e segnali di urgenza stimolano controlli ripetuti dello smartphone.',
    influence: 'Può generare iper-connessione, affaticamento cognitivo e una qualità inferiore del sonno.',
    example: 'Instagram Stories e Snapchat mostrano contenuti temporanei che svaniscono dopo breve tempo.',
    sources: 'Przybylski, Murayama, DeHaan e Gladwell (2013) · McGinnis (2004)',
  },
  {
    number: '03',
    title: 'Economia dell’attenzione',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Persone davanti a dispositivi digitali',
    definition: 'Un modello economico in cui l’attenzione umana viene considerata una risorsa scarsa da catturare e monetizzare.',
    operation: 'Le piattaforme raccolgono dati su tempo di permanenza, clic e interazioni per proporre contenuti e pubblicità mirati.',
    influence: 'Può favorire una fruizione frammentata e premiare stimoli ad alta attivazione rispetto alla riflessione.',
    example: 'YouTube e i social gratuiti estendono il tempo di permanenza con suggerimenti e pubblicità personalizzate.',
    sources: 'Simon (1971) · Goldhaber (1997) · Wu (2016) · Zuboff (2019)',
  },
] as const;

export function createMechanisms(): HTMLElement {
  const section = el('section', 'mechanisms-page');
  section.id = 'meccanismi';

  const list = el('div', 'mechanism-list');
  for (const mechanism of MECHANISMS) {
    const card = el('article', 'mechanism');
    const heading = el('header', 'mechanism__header');
    heading.append(el('p', 'mechanism__number', mechanism.number), el('h3', 'mechanism__title', mechanism.title));

    const media = el('figure', 'mechanism__media');
    const image = document.createElement('img');
    image.src = mechanism.image;
    image.alt = mechanism.imageAlt;
    image.loading = 'lazy';
    image.decoding = 'async';
    media.append(image, el('figcaption', 'mechanism__caption', 'Immagine illustrativa'));

    const details = el('dl', 'mechanism__details');
    for (const [term, description] of [
      ['Definizione', mechanism.definition],
      ['Funzionamento', mechanism.operation],
      ['Influenza sulle abitudini', mechanism.influence],
      ['Esempio concreto', mechanism.example],
    ] as const) {
      details.append(el('dt', 'mechanism__term', term), el('dd', 'mechanism__description', description));
    }

    card.append(heading, media, details, el('p', 'mechanism__sources', `Fonti: ${mechanism.sources}`));
    list.append(card);
  }

  section.append(
    createSectionHeader({
      eyebrow: 'Ricerca · Andrea Pacella',
      title: 'Meccanismi delle piattaforme digitali',
      titleId: 'meccanismi-title',
      description: 'Comprendere come piattaforme e interfacce catturano e orientano l’attenzione.',
    }),
    list,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
