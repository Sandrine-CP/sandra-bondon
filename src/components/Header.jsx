import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="Header">
			<h2>
				<Link to="/"> S | B</Link>
			</h2>
			<h2>Psychopraticienne - Coach - Hypnothérapeute</h2>
		</div>
	);
}

export default Header;
