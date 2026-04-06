"use client";

import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

export default function ContactPage() {
	const formActionUrl = "/api/formspreeContact";

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [errors, setErrors] = useState({});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const validateForm = (formData) => {
		const newErrors = {};

		const name = formData.get("name")?.trim() || "";
		const email = formData.get("email")?.trim() || "";
		const telephone = formData.get("telephone")?.trim() || "";
		const text = formData.get("text")?.trim() || "";

		if (!name) {
			newErrors.name = "Veuillez entrer votre nom.";
		}

		if (!email) {
			newErrors.email = "Veuillez indiquer votre adresse e-mail.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newErrors.email = "L'adresse e-mail n'est pas valide.";
		}

		const normalizedPhone = telephone.replace(/[\s.-]/g, "");
		if (!telephone) {
			newErrors.telephone = "Veuillez entrer votre numéro de téléphone.";
		} else if (!/^\+?[0-9]{8,15}$/.test(normalizedPhone)) {
			newErrors.telephone = "Le numéro de téléphone n'est pas valide.";
		}

		if (!text) {
			newErrors.text = "Veuillez me préciser votre situation ou votre besoin.";
		}

		return newErrors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		setIsSubmitting(true);
		setSuccessMessage("");
		setErrorMessage("");
		setErrors({});

		const form = event.target;
		const formData = new FormData(form);

		const newErrors = validateForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length > 0) {
			setIsSubmitting(false);
			return;
		}

		try {
			const response = await fetch(formActionUrl, {
				method: "POST",
				body: formData,
			});

			const contentType = response.headers.get("Content-Type") || "";

			if (!contentType.includes("application/json")) {
				throw new Error(
					"Une erreur inattendue est survenue. Merci de réessayer.",
				);
			}

			const data = await response.json();

			if (!response.ok || !data.ok) {
				throw new Error(
					data.error || "Une erreur est survenue lors de l’envoi.",
				);
			}

			setSuccessMessage(
				"Votre message a bien été envoyé. Sandra Bondon vous recontactera rapidement.",
			);
			form.reset();
		} catch (error) {
			setErrorMessage(
				error.message ||
					"Une erreur est survenue lors de l’envoi du formulaire.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputBaseClass =
		"mt-1 p-2 w-full border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary";
	const errorClass = "border-red-500";
	const normalClass = "border-gray-300";

	return (
		<>
			<SEO
				title="Contact - Sandra Bondon"
				description="Contactez Sandra Bondon, psychopraticienne solutionniste à Saint-Germain-en-Laye, pour échanger sur votre situation et vos besoins."
				keywords="contact Sandra Bondon, psychopraticienne, accompagnement, hypnose, MOSAIC, Saint-Germain-en-Laye"
				author="Sandra Bondon"
			/>

			<main className="min-h-screen bg-white">
				<section className="py-4 px-4 text-center">
					<h1 className="text-2xl font-bold uppercase mb-2 p-4">
						Contactez-moi
					</h1>
					<div className="container mx-auto px-4">
						<p className="text-lg mb-4">
							Remplissez le formulaire ci-dessous ou envoyez un email à :{" "}
							<a
								href="mailto:sandrabondon@gmail.com"
								className="text-blue-500 underline"
							>
								sandrabondon@gmail.com
							</a>
						</p>
					</div>
				</section>

				<section className="py-4">
					<div
						className="max-w-md mx-auto relative overflow-hidden z-10 bg-secondary p-8 rounded-lg shadow-md
						before:w-24 before:h-24 before:absolute before:bg-orange before:rounded-full before:-z-10 before:blur-2xl
						after:w-32 after:h-32 after:absolute after:bg-blue after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
					>
						<h2 className="text-2xl text-primary font-bold mb-6">Contact</h2>

						{successMessage ? (
							<div
								className="rounded-md border border-green-200 bg-green-50 p-4"
								role="status"
							>
								<h3 className="text-lg font-semibold text-green-700 mb-2">
									Merci pour votre message
								</h3>
								<p className="text-sm text-green-700">{successMessage}</p>
							</div>
						) : (
							<>
								{errorMessage && (
									<p className="mb-4 text-sm text-red-600" role="alert">
										{errorMessage}
									</p>
								)}

								<form onSubmit={handleSubmit} noValidate>
									<div className="mb-4">
										<label
											className="block text-sm font-medium text-gray-600"
											htmlFor="name"
										>
											Nom
										</label>
										<input
											className={`${inputBaseClass} ${
												errors.name ? errorClass : normalClass
											}`}
											type="text"
											name="name"
											id="name"
											autoComplete="family-name"
											aria-invalid={Boolean(errors.name)}
											aria-describedby={errors.name ? "name-error" : undefined}
										/>
										{errors.name && (
											<p id="name-error" className="text-red-500 text-sm mt-1">
												{errors.name}
											</p>
										)}
									</div>

									<div className="mb-4">
										<label
											className="block text-sm font-medium text-gray-600"
											htmlFor="prenom"
										>
											Prénom
										</label>
										<input
											className={`${inputBaseClass} ${normalClass}`}
											type="text"
											name="prenom"
											id="prenom"
											autoComplete="given-name"
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
											className={`${inputBaseClass} ${
												errors.email ? errorClass : normalClass
											}`}
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											aria-invalid={Boolean(errors.email)}
											aria-describedby={
												errors.email ? "email-error" : undefined
											}
										/>
										{errors.email && (
											<p id="email-error" className="text-red-500 text-sm mt-1">
												{errors.email}
											</p>
										)}
									</div>

									<div className="mb-4">
										<label
											className="block text-sm font-medium text-gray-600"
											htmlFor="telephone"
										>
											Téléphone
										</label>
										<input
											className={`${inputBaseClass} ${
												errors.telephone ? errorClass : normalClass
											}`}
											type="tel"
											name="telephone"
											id="telephone"
											autoComplete="tel"
											placeholder="06 12 34 56 78"
											aria-invalid={Boolean(errors.telephone)}
											aria-describedby={
												errors.telephone ? "telephone-error" : undefined
											}
										/>
										{errors.telephone && (
											<p
												id="telephone-error"
												className="text-red-500 text-sm mt-1"
											>
												{errors.telephone}
											</p>
										)}
									</div>

									<div className="mb-4">
										<label
											className="block text-sm font-medium text-gray-600"
											htmlFor="text"
										>
											Décrivez votre besoin
										</label>
										<textarea
											className={`${inputBaseClass} ${
												errors.text ? errorClass : normalClass
											}`}
											rows="3"
											name="text"
											id="text"
											autoComplete="off"
											aria-invalid={Boolean(errors.text)}
											aria-describedby={errors.text ? "text-error" : undefined}
										/>
										{errors.text && (
											<p id="text-error" className="text-red-500 text-sm mt-1">
												{errors.text}
											</p>
										)}
									</div>

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
							</>
						)}
					</div>
				</section>
			</main>
		</>
	);
}