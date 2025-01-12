"use client";
import { useState } from "react";

export default function ContactPage() {
	const [errorMessage, setErrorMessage] = useState(""); // État pour les erreurs
	const [showError, setShowError] = useState(false); // État pour afficher ou cacher la modal

	// Fonction pour valider le formulaire
	const handleValidation = (event) => {
		event.preventDefault(); // Empêche la soumission par défaut
		const form = event.target;

		// Récupérer les champs
		const name = form.name.value.trim();
		const email = form.email.value.trim();
		const text = form.text.value.trim();

		// Vérifier les champs et afficher des messages personnalisés
		if (!name) {
			setErrorMessage("Veuillez entrer votre nom.");
			setShowError(true);
			return;
		}

		if (!email) {
			setErrorMessage("Veuillez indiquer votre adresse e-mail.");
			setShowError(true);
			return;
		}

		if (!text) {
			setErrorMessage("Veuillez me préciser votre situation, votre besoin.");
			setShowError(true);
			return;
		}

		// Si tout est bon, on soumet le formulaire
		alert("Formulaire envoyé avec succès !");
		form.submit();
	};

	return (
		<main className="min-h-screen bg-white">
			<section className="py-6 px-4 text-center">
				<h1 className="text-2xl font-bold mb-4">Contactez-moi</h1>
				<p className="text-lg mb-4">
					Remplissez le formulaire ci-dessous ou envoyez un email à :{" "}
					<a
						href="mailto:s.cazenave@hotmail.fr"
						className="text-blue-500 underline"
					>
						s.cazenave@shotmail.fr
					</a>
					.
				</p>
			</section>
			<section className="py-4">
				<div className="max-w-md mx-auto relative overflow-hidden z-10 bg-secondary p-8 rounded-lg shadow-md">
					<h2 className="text-2xl text-primary font-bold mb-6">Contact</h2>
					<form method="post" action="#" onSubmit={handleValidation}>
						<div className="mb-4">
							<label
								className="block text-sm font-medium text-gray-600"
								htmlFor="name"
							>
								Nom
							</label>
							<input
								className="mt-1 p-2 w-full border rounded-md"
								type="text"
								name="name"
								id="name"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-sm font-medium text-gray-600"
								htmlFor="prenom"
							>
								Prénom
							</label>
							<input
								className="mt-1 p-2 w-full border rounded-md"
								type="text"
								name="prenom"
								id="prenom"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-sm font-medium text-gray-600"
								htmlFor="email"
							>
								Adresse e-mail
							</label>
							<input
								className="mt-1 p-2 w-full border rounded-md"
								name="email"
								id="email"
								type="email"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-sm font-medium text-gray-600"
								htmlFor="text"
							>
								Décrivez votre besoin
							</label>
							<textarea
								className="mt-1 p-2 w-full border rounded-md"
								rows="3"
								name="text"
								id="text"
							/>
						</div>
						<div className="flex justify-end">
							<button
								className="bg-primary text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
								type="submit"
							>
								Envoyer
							</button>
						</div>
					</form>
				</div>
			</section>

			{/* Pop-up pour afficher les erreurs */}
			{showError && (
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white  p-6 rounded-lg shadow-lg max-w-sm text-center">
						<p className="text-primary font-bold mb-4">{errorMessage}</p>
						<button
							type="button"
							className="bg-red-500 text-white px-4 py-2 rounded hover:bg-primary"
							onClick={() => setShowError(false)}
						>
							Fermer
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
