import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Wellness.css';

const STRATEGIES = [
  {
    number: '01',
    title: 'Silenziamento selettivo',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Smartphone e gestione delle notifiche',
    text: 'Disattiva le notifiche non urgenti e i badge numerici sulle app social e di messaggistica. Controlla i messaggi in momenti decisi in anticipo invece di reagire a ogni avviso.',
  },
  {
    number: '02',
    title: 'Blocchi di studio',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Postazione ordinata per lo studio',
    text: 'Suddividi lo studio in sessioni focalizzate da 25-50 minuti con brevi pause. Allontana lo smartphone dalla postazione e chiudi schede non necessarie.',
  },
  {
    number: '03',
    title: 'Pause digitali',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Momento di pausa immerso nella natura',
    text: 'Inserisci momenti lontani dagli schermi per camminare, fare stretching, bere qualcosa o rilassarti. Le pause aiutano a ridurre affaticamento visivo e mentale.',
  },
  {
    number: '04',
    title: 'Modalità concentrazione e riposo',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Ambiente sereno dedicato alla concentrazione',
    text: 'Attiva profili che limitano app e notifiche nelle fasce dedicate allo studio o al sonno. Usa la luce blu ridotta nelle ore serali.',
  },
  {
    number: '05',
    title: 'Intenzione e pulizia digitale',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Organizzazione consapevole delle attività',
    text: 'Prima di aprire un’app chiediti quale sia lo scopo. Rimuovi app inutilizzate e riduci i contenuti non rilevanti per contrastare lo scorrimento automatico.',
  },
] as const;

const TOOLS = [
  {
    title: 'Benessere digitale e Tempo di utilizzo',
    text: 'Monitorare il tempo sulle app, impostare limiti giornalieri e attivare profili di concentrazione o riposo sui sistemi Android, iOS e Windows.',
  },
  {
    title: 'Timer Pomodoro e blocchi delle distrazioni',
    text: 'Scandire le sessioni di studio e bloccare temporaneamente siti o applicazioni che distraggono durante le ore produttive.',
  },
] as const;

export function createWellness(): HTMLElement {
  const section = el('section', 'wellness-page');
  section.id = 'benessere';

  const strategyList = el('div', 'strategy-list');
  for (const strategy of STRATEGIES) {
    const card = el('article', 'strategy');
    const media = el('figure', 'strategy__media');
    const image = document.createElement('img');
    image.src = strategy.image;
    image.alt = strategy.imageAlt;
    image.loading = 'lazy';
    image.decoding = 'async';
    media.append(image);

    const copy = el('div', 'strategy__copy');
    card.append(
      media,
      copy,
    );
    copy.append(
      el('p', 'strategy__number', strategy.number),
      el('h3', 'strategy__title', strategy.title),
      el('p', 'strategy__text', strategy.text),
    );
    strategyList.append(card);
  }

  const tools = el('div', 'wellness-tools');
  for (const tool of TOOLS) {
    const card = el('article', 'wellness-tool');
    card.append(
      el('h3', 'wellness-tool__title', tool.title),
      el('p', 'wellness-tool__text', tool.text),
    );
    tools.append(card);
  }

  const sources = el('div', 'wellness-sources');
  sources.append(
    el('h3', 'wellness-sources__title', 'Fonti consultate'),
    el('p', undefined, 'Google — Benessere digitale'),
    el('p', undefined, 'Apple — Supporto Tempo di utilizzo'),
    el('p', undefined, 'Microsoft — Assistente di concentrazione, Sessioni di messa a fuoco e Luce notturna'),
    el('p', undefined, 'OMS e ISS — Igiene del sonno e uso equilibrato dei dispositivi'),
  );

  const conclusion = el(
    'aside',
    'wellness-conclusion',
    'Adottare poche regole realistiche è spesso più efficace che cambiare tutto in un giorno. L’obiettivo non è eliminare la tecnologia, ma renderla uno strumento utile e gestibile nella routine quotidiana.',
  );

  section.append(
    createSectionHeader({
      eyebrow: 'Ricerca · Marco Pio D’Amico',
      title: 'Strategie di benessere digitale',
      titleId: 'benessere-title',
      description: 'Cinque abitudini concrete e due strumenti per gestire notifiche, studio, riposo e distrazioni.',
    }),
    strategyList,
    el('h2', 'wellness-subtitle', 'Strumenti utili'),
    tools,
    conclusion,
    sources,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
