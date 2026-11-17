const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function isReachable(element: HTMLElement): boolean {
  if (element.closest('[hidden]')) {
    return false;
  }
  return element.getClientRects().length > 0;
}

export function getFocusable(container: ParentNode): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    isReachable,
  );
}

export function trapTabKey(elements: readonly HTMLElement[], event: KeyboardEvent): void {
  if (event.key !== 'Tab' || elements.length === 0) {
    return;
  }

  const first = elements[0];
  const last = elements[elements.length - 1];
  if (!first || !last) {
    return;
  }

  const active = document.activeElement;

  if (event.shiftKey && (active === first || !elements.includes(active as HTMLElement))) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}
