// Organisation des imports
// React, hooks, librairies
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets
import "../components/styles/pageConstruction.css";

export default function UnderConstruction() {
	return (
		<section className="relative h-screen flex items-center justify-center">
			<div className="container">
				<div className="loader" />
				<div className="loader" />
				<div className="loader" />
			</div>
		</section>
	);
}
