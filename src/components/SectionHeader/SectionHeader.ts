import './SectionHeader.css';

export interface SectionHeaderOptions {
  eyebrow?: string;
  title: string;
  description?: string;
  titleId: string;
  titleLang?: string;
}

export function createSectionHeader(options: SectionHeaderOptions): HTMLElement {
  const header = document.createElement('header');
  header.className = 'section-header';

  if (options.eyebrow) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = options.eyebrow;
    header.append(eyebrow);
  }

  const title = document.createElement('h2');
  title.className = 'section-header__title';
  title.id = options.titleId;
  title.textContent = options.title;
  if (options.titleLang) {
    title.lang = options.titleLang;
  }
  header.append(title);

  if (options.description) {
    const description = document.createElement('p');
    description.className = 'section-header__text';
    description.textContent = options.description;
    header.append(description);
  }

  return header;
}
