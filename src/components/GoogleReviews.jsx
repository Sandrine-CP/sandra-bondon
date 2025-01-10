import { useEffect, useState } from "react";

export default function GoogleReviews() {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Appel à l'API backend
		const fetchReviews = async () => {
			try {
				const response = await fetch("/api/google-reviews");
				const data = await response.json();
				setReviews(data);
			} catch (error) {
				console.error("Erreur lors de la récupération des avis :", error);
			} finally {
				setLoading(false);
			}
		};

		fetchReviews();
	}, []);

	// Affiche un message de chargement pendant la récupération des données
	if (loading) {
		return <p>Chargement des avis...</p>;
	}

	// Ne pas afficher la section si le tableau des avis est vide
	if (!reviews || reviews.length === 0) {
		return null; // Retourne `null` pour ne rien afficher
	}

	return (
		<section className="py-16 px-4 bg-white">
			<h2 className="text-2xl font-bold mb-8 text-center">Avis Google</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{reviews.map((review) => (
					<div
						key={`${review.author_name}-${review.time}`} // Clé unique basée sur author_name et time
						className="p-4 border rounded-lg shadow-lg bg-gray-50"
					>
						<p className="font-semibold">{review.author_name}</p>
						<p className="text-yellow-500">
							{"★".repeat(review.rating)}{" "}
							<span className="text-gray-400">
								{"☆".repeat(5 - review.rating)}
							</span>
						</p>
						<p className="italic">"{review.text}"</p>
					</div>
				))}
			</div>
		</section>
	);
}
