import { h } from "../lib/preact.js";
import { Link } from "../lib/preact-router.js";
import htm from "../lib/htm.js";
const html = htm.bind(h);

const Nav = () => {
  const { path } = window.config;
  return html`
		<div className='container'>
			<ul className='nav'>
				<li>
					<${Link}
						exact
						activeClassName='active'
						href='${path + "/"}'>
						Home
					</${Link}>
				</li>
				<li>
					<${Link}
						activeClassName='active'
						href='${path + "/diary"}'>
						Diary
					</${Link}>
				</li>
				<li>
					<${Link}
						activeClassName='active'
						href='${path + "/5-year"}'>
						5-year Diary
					</${Link}>
				</li>
			</ul>
		</div>
	`;
};

export default Nav;
