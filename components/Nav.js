import { h } from "../diary-gallery/lib/preact.js";
import { Link } from "../diary-gallery/lib/preact-router.js.js";
import htm from "../diary-gallery/lib/htm.js";
const html = htm.bind(h);

const Nav = () => html`
	<div className='container'>
		<ul className='nav'>
			<li>
				<${Link}
					exact
					activeClassName='active'
					href="/">
					Home
				</${Link}>
			</li>
			<li>
				<${Link}
					activeClassName='active'
					href="/diary">
					Diary
				</${Link}>
			</li>
			<li>
				<${Link}
					activeClassName='active'
					href="/5-year">
					5-year Diary
				</${Link}>
			</li>
		</ul>
	</div>
`;

export default Nav;
