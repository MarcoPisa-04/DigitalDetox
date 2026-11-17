import './Button.css';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonBase {
  label: string;
  variant: ButtonVariant;
  lang?: string;
}

type ButtonLinkOptions = ButtonBase & { href: string };
type ButtonActionOptions = ButtonBase & { onClick: () => void };

export function createButton(options: ButtonLinkOptions): HTMLAnchorElement;
export function createButton(options: ButtonActionOptions): HTMLButtonElement;
export function createButton(
  options: ButtonLinkOptions | ButtonActionOptions,
): HTMLAnchorElement | HTMLButtonElement {
  const className = `btn btn--${options.variant}`;

  if ('href' in options) {
    const link = document.createElement('a');
    link.className = className;
    link.href = options.href;
    link.textContent = options.label;
    if (options.lang) {
      link.lang = options.lang;
    }
    return link;
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.textContent = options.label;
  if (options.lang) {
    button.lang = options.lang;
  }
  button.addEventListener('click', options.onClick);
  return button;
}
