// Organisation des imports
// React, hooks, librairies
// Bibliothèques tierces
// Composants parents
import SEO from "@/components/SEO";
// Composants enfants
import UnderConstruction from "@/components/UnderConstruction";
// Utilitaires et helpers
// Styles et assets

export default function SolutionsPourVosCollaborateurs() {
	return (
		<>
			<SEO
				title="Accueil - Sandra Bondon"
				description="Site vitrine de Sandra Bondon, psychopraticienne spécialisée en hypnose, PNL et méthode MOSAIC®."
				keywords="thérapie, hypnose, MOSAIC, burn out, anxiété, Sandra Bondon"
				author="Sandrine Cazenave"
			/>
			<main>
				<section>
					<h1 className="text-2xl font-bold uppercase text-center m-6 p-5">
						Solutions pour vos collaborateurs
					</h1>
					<h2 className="text-xl font-bold text-center">
						Page en cours de construction
					</h2>
				</section>
				<UnderConstruction />
			</main>
		</>
	);
}
