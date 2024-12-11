import { Link } from "react-router-dom";
import "./styles/NavBar.css";

function NavBar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<Link to="/about" aria-label="Aller à la page A Propos">
						A propos
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/therapies" aria-label="Aller à la page Thérapies">
						Thérapies
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/consultations" aria-label="Aller à la page Consultations">
						Consultations
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/professionals" aria-label="Aller à la page Professionnels">
						Professionnels
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/contact" aria-label="Aller à la page Contact">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
