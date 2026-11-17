import { mountApp } from './app/App';
import { initRouter } from './app/router';

const root = document.querySelector<HTMLElement>('#app');

if (!root) {
  throw new Error('Elemento #app non trovato.');
}

initRouter();
mountApp(root);
