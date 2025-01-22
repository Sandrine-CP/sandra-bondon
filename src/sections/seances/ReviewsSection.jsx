// Organisation des imports
// Imports de base : React, hooks, libraries essentielles
// Bibliothèques tierces
// Composants parents
// Composants enfants
import GoogleReviews from "@/components/GoogleReviews";

// Utilitaires et helpers
// Styles et assets

export default function ReviewsSection() {
	return (
		<>
			<section className="py-6 px-4 text-center">
				<h2 className="text-xl font-bold">Ce que disent mes clients</h2>
				<p className="pt-5">
					La satisfaction de mes clients est au cœur de ma pratique. <br />
					Découvrez leurs témoignages ci-dessous :
				</p>
			</section>
			<GoogleReviews />
		</>
	);
}
