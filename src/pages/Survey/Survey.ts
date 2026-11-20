import QRCode from 'qrcode';
import { createContainer } from '../../components/Container/Container';
import { createSectionHeader } from '../../components/SectionHeader/SectionHeader';
import { createButton } from '../../components/Button/Button';
import { el } from '../../utils/dom';
import './Survey.css';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfT3VVu6LnpC4dbtYa_thgH2mk5s73pyUu7xM_rcQ4d9Wp5yg/viewform?usp=dialog';

export function createSurvey(): HTMLElement {
  const section = el('section', 'survey-page');
  section.id = 'questionario';

  const grid = el('div', 'survey__grid');
  const qrPanel = el('div', 'survey__qr-panel');
  const canvas = document.createElement('canvas');
  canvas.className = 'survey__qr';
  canvas.setAttribute('aria-label', 'Codice QR per aprire il questionario');

  void QRCode.toCanvas(canvas, FORM_URL, {
    width: 520,
    margin: 3,
    color: {
      dark: '#090d14',
      light: '#ffffff',
    },
  });

  qrPanel.append(canvas);

  const copy = el('div', 'survey__copy');
  copy.append(
    el('p', 'survey__kicker', 'Francesco Pappalardo'),
    el('h3', 'survey__title', 'Inquadra il QR code'),
    el(
      'p',
      'survey__text',
      'Usa la fotocamera del tuo smartphone per aprire il questionario anonimo su Google Moduli.',
    ),
    createButton({
      label: 'Apri il questionario',
      variant: 'primary',
      href: FORM_URL,
    }),
  );
  grid.append(qrPanel, copy);

  section.append(
    createSectionHeader({
      eyebrow: 'Questionario',
      title: 'Condividi le tue abitudini digitali',
      titleId: 'questionario-title',
      description:
        'Il questionario raccoglie informazioni sulle abitudini digitali degli studenti. Rispondere è anonimo e richiede pochi minuti.',
    }),
    grid,
  );

  const page = el('article');
  page.append(createContainer([section]));
  return page;
}
