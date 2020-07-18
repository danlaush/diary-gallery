import { h, render } from './lib/preact.js';
/** @jsx h */
import htm from './lib/htm.js';
import App from './components/App.js'
// Initialize htm with Preact
const html = htm.bind(h);

render(html`<${App} />`, document.body);
