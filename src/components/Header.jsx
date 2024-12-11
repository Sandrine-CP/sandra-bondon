import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<Link to="/" aria-label="Retour à l'accueil">
					{" "}
					S | B
				</Link>
			</div>
			<p className="header__tagline">
				Psychopraticienne - Coach - Hypnothérapeute
			</p>
		</header>
	);
}

export default Header;
