import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Habits.css';

const FINDINGS = [
  {
    number: '01',
    title: 'Diffusione dei dispositivi',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Giovane davanti a uno smartphone',
    text: 'In Italia, tra i 6 e i 10 anni, lo smartphone viene usato quotidianamente dal 30,2% dei bambini. Nella fascia 11-13 anni, il 78,3% accede a Internet ogni giorno.',
  },
  {
    number: '02',
    title: 'Tempo trascorso online',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Studente mentre utilizza un dispositivo digitale',
    text: 'Il 27,4% degli studenti italiani tra i 15 e i 19 anni trascorre oltre 4 ore al giorno su chat e social nei giorni di scuola.',
  },
  {
    number: '03',
    title: 'Concentrazione',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Persona concentrata mentre studia',
    text: 'Il 32% degli adolescenti nel campione europeo segnala difficoltà di concentrazione, mentre il 34% affaticamento visivo.',
  },
  {
    number: '04',
    title: 'Relazioni digitali',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Giovani che comunicano tra loro',
    text: 'Circa l’80% degli 11-17enni usa i social quotidianamente. I contatti online giornalieri raggiungono l’85% dei 17enni.',
  },
  {
    number: '05',
    title: 'Sonno',
    image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Persona che dorme serenamente',
    text: 'Difficoltà ad addormentarsi interessano il 22% di chi usa i social meno di un’ora al giorno e il 39% di chi supera le cinque ore.',
  },
] as const;

export function createHabits(): HTMLElement {
  const section = el('section', 'habits-page');
  section.id = 'abitudini';

  const intro = el(
    'p',
    'habits__intro',
    'I giovani vivono una parte importante della propria quotidianità nei dispositivi connessi. Questa ricerca osserva diffusione degli smartphone, tempo online, attenzione, relazioni e sonno.',
  );

  const list = el('div', 'habits__list');
  for (const finding of FINDINGS) {
    const card = el('article', 'habits__card');
    const media = el('figure', 'habits__media');
    const image = document.createElement('img');
    image.src = finding.image;
    image.alt = finding.imageAlt;
    image.loading = 'lazy';
    image.decoding = 'async';
    media.append(image);

    const copy = el('div', 'habits__copy');
    card.append(
      media,
      copy,
    );
    copy.append(
      el('p', 'habits__number', finding.number),
      el('h3', 'habits__title', finding.title),
      el('p', 'habits__text', finding.text),
    );
    list.append(card);
  }

  const comment = el('aside', 'habits__comment');
  comment.append(
    el('p', 'habits__comment-label', 'Considerazione personale'),
    el(
      'p',
      'habits__comment-text',
      'Il digitale non è più uno strumento accessorio: è uno spazio quotidiano in cui i giovani costruiscono relazioni e identità. L’uso consapevole richiede tempi adeguati di disconnessione, soprattutto nelle ore serali e durante lo studio.',
    ),
  );

  const sources = el('div', 'habits__sources');
  sources.append(
    el('h3', 'habits__sources-title', 'Fonti consultate'),
    el('p', undefined, 'ISTAT / Save the Children — dati sull’infanzia e la preadolescenza'),
    el('p', undefined, 'CNR-IFC — ESPAD®Italia 2026'),
    el('p', undefined, 'Commissione Europea — indagine sull’uso digitale degli adolescenti'),
    el('p', undefined, 'ISS — Sorveglianza HBSC-Italia 2022'),
  );

  section.append(
    createSectionHeader({
      eyebrow: 'Ricerca · Simone Codetti',
      title: 'Abitudini digitali dei giovani',
      titleId: 'abitudini-title',
      description: 'Come smartphone, social network e comunicazione digitale influenzano studio, relazioni e riposo.',
    }),
    intro,
    list,
    comment,
    sources,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
