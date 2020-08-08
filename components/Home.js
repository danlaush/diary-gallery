import { h } from "../lib/preact.js";
import { Link } from "../lib/preact-router.js";
import htm from "../lib/htm.js";
const html = htm.bind(h);

const Home = () => html`
	<div className='five-year container'>
		<div className='five-year__image'>
			<a href='/diary'>
				<img src='assets/jpg/02/title.jpg' />
			</a>
		</div>
		<div className='five-year__text'>
			<div>
				<h1>Gram Betts' Diary</h1>
				<p>Read the diaries of Betsy Laush</p>
				<${Link} className='button' href='/diary'>
					Read
				</${Link}>
			</div>
		</div>
	</div>
`;

export default Home;
