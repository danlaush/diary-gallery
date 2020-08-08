import { h, render } from './lib/preact.js';
import htm from './lib/htm.js';
import App from './components/App.js'
// Initialize htm with Preact
const html = htm.bind(h);

// No process.env in the browser but I want
// a way to quickly toggle prod functionality
const isProd = true;

window.config = {
  path: isProd ? '/diary-gallery' : ''
};

render(html`<${App} />`, document.body);
