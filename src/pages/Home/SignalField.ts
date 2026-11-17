const SVG_NS = 'http://www.w3.org/2000/svg';

function svg<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string>,
): SVGElementTagNameMap[K] {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value);
  }
  return element;
}

function pauseIfNeeded(graphic: SVGSVGElement): void {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync = (): void => {
    if (motion.matches) {
      graphic.pauseAnimations();
      return;
    }
    graphic.unpauseAnimations();
  };
  sync();
  motion.addEventListener('change', sync);
}

export function createSignalField(): HTMLElement {
  const figure = document.createElement('figure');
  figure.className = 'signal';

  const graphic = svg('svg', { viewBox: '0 0 560 680' });
  graphic.setAttribute('aria-hidden', 'true');
  graphic.setAttribute('focusable', 'false');

  const grid = svg('g', { stroke: 'var(--color-border)', 'stroke-width': '1' });
  for (let index = 0; index < 5; index += 1) {
    const x = 56 + index * 112;
    grid.append(svg('line', { x1: String(x), y1: '36', x2: String(x), y2: '644' }));
  }
  for (const y of [80, 210, 340, 470, 600]) {
    grid.append(svg('line', { x1: '36', y1: String(y), x2: '524', y2: String(y) }));
  }

  const orbits = svg('g', { fill: 'none' });
  orbits.append(
    svg('circle', {
      cx: '280',
      cy: '320',
      r: '214',
      stroke: 'var(--color-border)',
      'stroke-width': '1',
    }),
    svg('circle', {
      cx: '280',
      cy: '320',
      r: '136',
      stroke: 'var(--color-accent-cyan)',
      'stroke-opacity': '0.45',
      'stroke-width': '1.25',
    }),
    svg('circle', {
      cx: '280',
      cy: '320',
      r: '62',
      stroke: 'var(--color-accent-purple)',
      'stroke-opacity': '0.8',
      'stroke-width': '1.25',
    }),
  );

  const links = svg('g', {
    fill: 'none',
    stroke: 'var(--color-border-strong)',
    'stroke-width': '1',
  });
  const anchors = [
    ['118', '246'],
    ['442', '246'],
    ['148', '468'],
    ['430', '430'],
    ['280', '92'],
  ];
  for (const [x, y] of anchors) {
    links.append(svg('line', { x1: '280', y1: '320', x2: x ?? '280', y2: y ?? '320' }));
  }

  const nodes = svg('g', {});
  nodes.append(
    svg('circle', { cx: '118', cy: '246', r: '4', fill: 'var(--color-accent-purple)' }),
    svg('circle', { cx: '442', cy: '246', r: '4', fill: 'var(--color-accent-cyan)' }),
    svg('circle', { cx: '148', cy: '468', r: '3.5', fill: 'var(--color-accent-cyan)' }),
    svg('circle', { cx: '430', cy: '430', r: '3.5', fill: 'var(--color-accent-purple)' }),
    svg('circle', { cx: '280', cy: '92', r: '4', fill: 'var(--color-text-primary)' }),
  );

  const screen = svg('g', {});
  screen.append(
    svg('rect', {
      x: '214',
      y: '198',
      width: '132',
      height: '208',
      rx: '10',
      fill: 'var(--color-bg-secondary)',
      stroke: 'var(--color-text-primary)',
      'stroke-width': '1.25',
    }),
    svg('line', {
      x1: '230',
      y1: '222',
      x2: '330',
      y2: '222',
      stroke: 'var(--color-accent-cyan)',
      'stroke-width': '1.5',
    }),
    svg('line', { x1: '230', y1: '248', x2: '318', y2: '248', stroke: 'var(--color-border)' }),
    svg('line', { x1: '230', y1: '268', x2: '300', y2: '268', stroke: 'var(--color-border)' }),
    svg('line', { x1: '230', y1: '288', x2: '326', y2: '288', stroke: 'var(--color-border)' }),
    svg('rect', {
      x: '230',
      y: '312',
      width: '46',
      height: '28',
      rx: '2',
      fill: 'var(--color-surface-elevated)',
    }),
    svg('rect', {
      x: '284',
      y: '312',
      width: '46',
      height: '28',
      rx: '2',
      fill: 'var(--color-surface-elevated)',
    }),
    svg('rect', {
      x: '230',
      y: '348',
      width: '100',
      height: '28',
      rx: '2',
      fill: 'var(--color-surface)',
    }),
  );

  const scan = svg('line', {
    x1: '226',
    y1: '236',
    x2: '334',
    y2: '236',
    stroke: 'var(--color-accent-cyan)',
    'stroke-opacity': '0.7',
    'stroke-width': '1',
  });
  const scanY1 = svg('animate', {
    attributeName: 'y1',
    values: '236;386;236',
    dur: '8s',
    repeatCount: 'indefinite',
  });
  const scanY2 = svg('animate', {
    attributeName: 'y2',
    values: '236;386;236',
    dur: '8s',
    repeatCount: 'indefinite',
  });
  scan.append(scanY1, scanY2);

  const person = svg('g', {});
  person.append(
    svg('line', {
      x1: '280',
      y1: '406',
      x2: '280',
      y2: '478',
      stroke: 'var(--color-accent-cyan)',
      'stroke-opacity': '0.85',
      'stroke-width': '1.25',
    }),
    svg('circle', {
      cx: '280',
      cy: '500',
      r: '18',
      fill: 'none',
      stroke: 'var(--color-accent-cyan)',
      'stroke-width': '1.4',
    }),
    svg('circle', { cx: '280', cy: '500', r: '4', fill: 'var(--color-accent-cyan)' }),
  );

  const traveler = svg('g', {});
  traveler.append(
    svg('circle', { cx: '280', cy: '106', r: '4', fill: 'var(--color-accent-cyan)' }),
  );
  traveler.append(
    svg('animateTransform', {
      attributeName: 'transform',
      type: 'rotate',
      from: '0 280 320',
      to: '360 280 320',
      dur: '42s',
      repeatCount: 'indefinite',
    }),
  );

  const captionMark = svg('text', {
    x: '40',
    y: '48',
    fill: 'var(--color-text-muted)',
    'font-family': 'JetBrains Mono, monospace',
    'font-size': '12',
    'letter-spacing': '1.5',
  });
  captionMark.textContent = 'FIG. 01  /  SCREEN — SELF';

  graphic.append(grid, orbits, links, nodes, screen, scan, person, traveler, captionMark);

  const caption = document.createElement('figcaption');
  caption.className = 'sr-only';
  caption.textContent =
    'Composizione astratta: uno schermo, un punto che rappresenta la persona e linee di connessione.';

  figure.append(graphic, caption);
  pauseIfNeeded(graphic);
  return figure;
}
