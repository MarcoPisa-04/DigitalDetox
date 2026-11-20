import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './DataLab.css';

const DATA = [
  { label: '30,2%', text: 'dei bambini 6-10 anni usa lo smartphone ogni giorno', width: '30%' },
  { label: '78,3%', text: 'degli 11-13enni accede a Internet ogni giorno', width: '78%' },
  { label: '27,4%', text: 'degli studenti 15-19 anni supera 4 ore sui social', width: '27%' },
  { label: '39%', text: 'difficoltà ad addormentarsi oltre 5 ore sui social', width: '39%' },
] as const;

export function createDataLab(): HTMLElement {
  const section = el('section', 'data-lab-page');
  section.id = 'dati';

  const chart = el('div', 'data-chart');
  for (const item of DATA) {
    const row = el('div', 'data-chart__row');
    row.append(
      el('p', 'data-chart__label', item.label),
      el('div', 'data-chart__track').appendChild(el('span', 'data-chart__bar')).parentElement!,
      el('p', 'data-chart__text', item.text),
    );
    const bar = row.querySelector<HTMLElement>('.data-chart__bar');
    if (bar) bar.style.width = item.width;
    chart.append(row);
  }

  const note = el(
    'p',
    'data-lab__note',
    'Dati descrittivi provenienti dalle ricerche presenti nelle pagine del progetto. Sono riportati come indicatori e non come risultato di un’indagine condotta da questa piattaforma.',
  );

  section.append(
    createSectionHeader({
      eyebrow: 'Laboratorio dati',
      title: 'Leggere i dati sulle abitudini digitali',
      titleId: 'dati-title',
      description: 'Una sintesi visuale delle principali percentuali raccolte dalle fonti del progetto.',
    }),
    chart,
    note,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
