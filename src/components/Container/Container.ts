import './Container.css';

export function createContainer(children: readonly Node[] = []): HTMLDivElement {
  const container = document.createElement('div');
  container.className = 'container';
  container.append(...children);
  return container;
}
