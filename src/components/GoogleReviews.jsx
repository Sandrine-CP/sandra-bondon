import { useEffect, useState } from "react";

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
				Aucun avis disponible pour le moment : soyez le premier à laisser un
				témoignage
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
			<div className="relative max-w-3xl mx-auto">
				{/* Carte d'avis */}
				<div className="p-4 border rounded-lg shadow-lg bg-gray-50 text-center">
					<p className="font-semibold">{reviews[currentIndex].author_name}</p>
					<p className="text-yellow-500">
						{"★".repeat(reviews[currentIndex].rating)}{" "}
						<span className="text-gray-400">
							{"☆".repeat(5 - reviews[currentIndex].rating)}
						</span>
					</p>
					<p className="italic">"{reviews[currentIndex].text}"</p>
				</div>

				{/* Flèches de navigation */}
				<div className="absolute inset-0 flex items-center justify-between">
					<button
						type="button"
						onClick={handlePrev}
						className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
					>
						←
					</button>
					<button
						type="button"
						onClick={handleNext}
						className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
					>
						→
					</button>
				</div>
			</div>
		</section>
	);
}
