import "../lib/preact-debug.js";
import { h, Fragment } from '../lib/preact.js';
/** @jsx h */
import htm from '../lib/htm.js';
import Router from '../lib/preact-router.js';
import AsyncRoute from '../lib/preact-async-route.js';
import Nav from './Nav.js'
import Home from './Home.js'
// Initialize htm with Preact
const html = htm.bind(h);

const importHome = () => import('./Home.js').then(m => m.default)
const importFiveYear = () => import('./FiveYear.js').then(m => m.default)
const importDiary = () => import('./Diary.js').then(m => m.default)
const loading = () => html`<div className="container">loading</div>`

// <${}></${}> <${} />
const App = () => {
	return html`
		<${Fragment}>
			<${Nav} />
			<${Router}>
				<${AsyncRoute}
					path="/"
					getComponent="${importHome}"
					loading="${loading}" />
				<${AsyncRoute}
					path="/5-year"
					getComponent="${importFiveYear}"
					loading="${loading}" />
				<${AsyncRoute}
					path="/diary"
					getComponent="${importDiary}"
					loading="${loading}" />
			</${Router}>
		</${Fragment}>
	`
}

export default App
