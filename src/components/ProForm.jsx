"use client";

import { useState } from "react";

export default function ProForm() {
	const formActionUrl = "/api/formspreePro";

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		setIsSubmitting(true);
		setSuccessMessage("");
		setErrorMessage("");

		const form = event.target;
		const formData = new FormData(form);

		try {
			const response = await fetch(formActionUrl, {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (!response.ok || !data.ok) {
				throw new Error(data.error || "Une erreur est survenue lors de l’envoi.");
			}

			setSuccessMessage(
				"Votre demande a bien été envoyée. Sandra Bondon vous recontactera rapidement."
			);
			form.reset();
		} catch (error) {
			setErrorMessage(
				error.message ||
					"Une erreur est survenue lors de l’envoi du formulaire."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="py-4">
			<div
				className="max-w-md mx-auto relative overflow-hidden z-10 bg-secondary p-8 rounded-lg shadow-md
				before:w-24 before:h-24 before:absolute before:bg-orange before:rounded-full before:-z-10 before:blur-2xl
				after:w-32 after:h-32 after:absolute after:bg-blue after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
			>
				<h2 className="text-2xl text-primary font-bold mb-6">
					Formulaire pour les entreprises
				</h2>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="companyName"
						>
							Nom de votre entreprise
						</label>
						<input
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							type="text"
							name="companyName"
							id="companyName"
							required
							autoComplete="organization"
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="name"
						>
							Votre nom
						</label>
						<input
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							type="text"
							name="name"
							id="name"
							required
							autoComplete="name"
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="position"
						>
							Votre fonction au sein de l’entreprise
						</label>
						<input
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							type="text"
							name="position"
							id="position"
							autoComplete="organization-title"
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="coachedPosition"
						>
							Fonction de la personne à accompagner
						</label>
						<input
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							type="text"
							name="coachedPosition"
							id="coachedPosition"
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="email"
						>
							Votre e-mail professionnel
						</label>
						<input
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							type="email"
							name="email"
							id="email"
							required
							autoComplete="email"
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="telephone"
						>
							Votre numéro de téléphone
						</label>
						<input
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							type="tel"
							name="telephone"
							id="telephone"
							required
							autoComplete="tel"
							placeholder="06 12 34 56 78"
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="messageProblems"
						>
							Description des problématiques rencontrées et objectifs visés
						</label>
						<textarea
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							name="messageProblems"
							id="messageProblems"
							rows="5"
							required
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium text-gray-600"
							htmlFor="messageSolutions"
						>
							Solutions déjà envisagées, si applicable
						</label>
						<textarea
							className="mt-1 p-2 w-full border rounded-md border-gray-300"
							name="messageSolutions"
							id="messageSolutions"
							rows="5"
						/>
					</div>

					{successMessage && (
						<p className="mb-4 text-sm text-green-600">{successMessage}</p>
					)}

					{errorMessage && (
						<p className="mb-4 text-sm text-red-500">{errorMessage}</p>
					)}

					<div className="flex justify-end">
						<button
							className="bg-primary text-white px-4 py-2 font-bold rounded-md hover:opacity-80 disabled:opacity-50"
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Envoi en cours..." : "Envoyer"}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}