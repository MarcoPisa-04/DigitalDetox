import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { el } from '../../utils/dom';
import './Simulator.css';

export function createSimulator(): HTMLElement {
  const section = el('section', 'simulator-page');
  section.id = 'simulatore';

  const controls = el('div', 'simulator__controls');
  const input = document.createElement('input');
  input.type = 'range';
  input.min = '0';
  input.max = '8';
  input.step = '0.5';
  input.value = '3';
  input.className = 'simulator__range';

  const value = el('output', 'simulator__value', '3 ore');
  const meter = el('div', 'simulator__meter');
  const fill = el('div', 'simulator__fill');
  meter.append(fill);
  const description = el(
    'p',
    'simulator__description',
    'Uso moderato: lascia spazio a studio, sonno e attività offline.',
  );

  const update = (): void => {
    const hours = Number(input.value);
    value.textContent = `${hours.toString().replace('.', ',')} ore`;
    fill.style.width = `${Math.min((hours / 8) * 100, 100)}%`;
    if (hours < 2) {
      description.textContent = 'Uso contenuto: hai ampi spazi liberi per attività offline.';
    } else if (hours < 4) {
      description.textContent = 'Uso moderato: lascia spazio a studio, sonno e attività offline.';
    } else if (hours < 6) {
      description.textContent = 'Uso elevato: valuta pause frequenti e momenti serali senza schermi.';
    } else {
      description.textContent = 'Uso molto elevato: potresti avere meno tempo per sonno, studio e relazioni offline.';
    }
  };
  input.addEventListener('input', update);
  update();

  controls.append(
    el('label', 'simulator__label', 'Tempo stimato davanti agli schermi al giorno'),
    input,
    value,
    meter,
    description,
  );

  section.append(
    createSectionHeader({
      eyebrow: 'Simulatore',
      title: 'Quanto tempo resta alle attività offline?',
      titleId: 'simulatore-title',
      description: 'Sposta il valore per osservare una stima generale. Il simulatore non effettua diagnosi.',
    }),
    controls,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
