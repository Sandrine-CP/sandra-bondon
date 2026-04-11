// Organisation des imports
// React, hooks, librairies
import { useEffect, useState } from "react";
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets

export default function GoogleReviews() {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		// Appel à l'API backend
		const fetchReviews = async () => {
			try {
				const response = await fetch("/api/google-reviews");
				const data = await response.json();
				const sorted = [...data].sort((a, b) => a.text.length - b.text.length);
				setReviews(sorted);
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
		return (
			<p className="bg-white text-center italic mb-10">
				Chargement des avis...
			</p>
		);
	}

	// Ne pas afficher la section si le tableau des avis est vide
	if (!reviews || reviews.length === 0) {
		return (
			<p className="bg-white text-center italic mb-10">
				Les avis sont temporairement indisponibles.
			</p>
		);
	}

	// Gestion du changement de carte
	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length,
		);
	};

	return (
		<section className="py-16 px-4 bg-white">
			<h2 className="text-2xl font-bold mb-8 text-center">Avis Google</h2>
			<div className="relative max-w-5xl mx-auto">
				{/* Carte d'avis */}
				<div className="p-6 md:p-8 border rounded-xl shadow-lg bg-gray-50 text-center min-h-[260px] flex flex-col justify-center"
					aria-live="polite">
					
					<p className="font-semibold">{reviews[currentIndex].author_name}</p>
					<p className="text-yellow-500">
						{"★".repeat(reviews[currentIndex].rating)}{" "}
						<span className="text-gray-400">
							{"☆".repeat(5 - reviews[currentIndex].rating)}
						</span>
					</p>
					<p className="italic text-gray-700 leading-relaxed mt-4">&quot;{reviews[currentIndex].text}&quot;</p>
				</div>

				{/* Flèches de navigation */}
				<div className="absolute inset-0 flex items-center justify-between">
					<button
						type="button"
						onClick={handlePrev}
						aria-label="Afficher l'avis Google précédent"
						className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
					>
						  <svg
   							 xmlns="http://www.w3.org/2000/svg"
    						fill="none"
   							viewBox="0 0 24 24"
    						strokeWidth={2}
    						stroke="currentColor"
    						className="w-5 h-5"
  							>
    				<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
   						</svg>
					</button>
					<button
						type="button"
						onClick={handleNext}
						aria-label="Afficher l'avis Google suivant"
						className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
					>
						  <svg
    						xmlns="http://www.w3.org/2000/svg"
    						fill="none"
    						viewBox="0 0 24 24"
    						strokeWidth={2}
    						stroke="currentColor"
    						className="w-5 h-5"
  							>
    						<path strokeLinecap="round" strokeLinejoin="round"  d="M9 5l7 7-7 7"  />
  						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
