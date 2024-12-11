import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
	return (
		<div className="header">
			<h1 className="header__logo">
				<Link to="/" aria-label="Retour à l'accueil">
					{" "}
					S | B
				</Link>
			</h1>
			<p className="header__tgaline">
				Psychopraticienne - Coach - Hypnothérapeute
			</p>
		</div>
	);
}

export default Header;
