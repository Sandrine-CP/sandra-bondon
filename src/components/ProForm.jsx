"use client";

import { useState } from "react";

export default function ProForm() {
	const formActionUrl = "/api/formspreePro";

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [errors, setErrors] = useState({});

	const validateForm = (formData) => {
		const newErrors = {};

		const companyName = formData.get("companyName")?.trim() || "";
		const name = formData.get("name")?.trim() || "";
		const email = formData.get("email")?.trim() || "";
		const telephone = formData.get("telephone")?.trim() || "";
		const messageProblems = formData.get("messageProblems")?.trim() || "";

		if (!companyName) {
			newErrors.companyName = "Le nom de l'entreprise est requis.";
		}

		if (!name) {
			newErrors.name = "Votre nom est requis.";
		}

		if (!email) {
			newErrors.email = "Votre e-mail professionnel est requis.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newErrors.email = "Veuillez renseigner une adresse e-mail valide.";
		}

		const normalizedPhone = telephone.replace(/[\s.-]/g, "");
		if (!telephone) {
			newErrors.telephone = "Votre numéro de téléphone est requis.";
		} else if (!/^\+?[0-9]{8,15}$/.test(normalizedPhone)) {
			newErrors.telephone = "Veuillez renseigner un numéro de téléphone valide.";
		}

		if (!messageProblems) {
			newErrors.messageProblems =
				"Merci de décrire les problématiques rencontrées et les objectifs visés.";
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
					"Une erreur inattendue est survenue. Merci de réessayer."
				);
			}

			const data = await response.json();

			if (!response.ok || !data.ok) {
				throw new Error(
					data.error || "Une erreur est survenue lors de l’envoi."
				);
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

	const inputBaseClass =
		"mt-1 p-2 w-full border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary";
	const errorClass = "border-red-500";
	const normalClass = "border-gray-300";

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

				{successMessage ? (
					<div
						className="rounded-md border border-green-200 bg-green-50 p-4"
						role="status"
					>
						<h3 className="text-lg font-semibold text-green-700 mb-2">
							Merci pour votre demande
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
									htmlFor="companyName"
								>
									Nom de votre entreprise
								</label>
								<input
									className={`${inputBaseClass} ${
										errors.companyName ? errorClass : normalClass
									}`}
									type="text"
									name="companyName"
									id="companyName"
									autoComplete="organization"
									aria-invalid={Boolean(errors.companyName)}
									aria-describedby={
										errors.companyName ? "companyName-error" : undefined
									}
								/>
								{errors.companyName && (
									<p
										id="companyName-error"
										className="mt-1 text-sm text-red-600"
									>
										{errors.companyName}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label
									className="block text-sm font-medium text-gray-600"
									htmlFor="name"
								>
									Votre nom
								</label>
								<input
									className={`${inputBaseClass} ${
										errors.name ? errorClass : normalClass
									}`}
									type="text"
									name="name"
									id="name"
									autoComplete="name"
									aria-invalid={Boolean(errors.name)}
									aria-describedby={errors.name ? "name-error" : undefined}
								/>
								{errors.name && (
									<p id="name-error" className="mt-1 text-sm text-red-600">
										{errors.name}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label
									className="block text-sm font-medium text-gray-600"
									htmlFor="position"
								>
									Votre fonction au sein de l’entreprise
								</label>
								<input
									className={`${inputBaseClass} ${normalClass}`}
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
									className={`${inputBaseClass} ${normalClass}`}
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
									className={`${inputBaseClass} ${
										errors.email ? errorClass : normalClass
									}`}
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									aria-invalid={Boolean(errors.email)}
									aria-describedby={errors.email ? "email-error" : undefined}
								/>
								{errors.email && (
									<p id="email-error" className="mt-1 text-sm text-red-600">
										{errors.email}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label
									className="block text-sm font-medium text-gray-600"
									htmlFor="telephone"
								>
									Votre numéro de téléphone
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
										className="mt-1 text-sm text-red-600"
									>
										{errors.telephone}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label
									className="block text-sm font-medium text-gray-600"
									htmlFor="messageProblems"
								>
									Description des problématiques rencontrées et objectifs visés
								</label>
								<textarea
									className={`${inputBaseClass} ${
										errors.messageProblems ? errorClass : normalClass
									}`}
									name="messageProblems"
									id="messageProblems"
									rows="5"
									aria-invalid={Boolean(errors.messageProblems)}
									aria-describedby={
										errors.messageProblems
											? "messageProblems-error"
											: undefined
									}
								/>
								{errors.messageProblems && (
									<p
										id="messageProblems-error"
										className="mt-1 text-sm text-red-600"
									>
										{errors.messageProblems}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label
									className="block text-sm font-medium text-gray-600"
									htmlFor="messageSolutions"
								>
									Solutions déjà envisagées, si applicable
								</label>
								<textarea
									className={`${inputBaseClass} ${normalClass}`}
									name="messageSolutions"
									id="messageSolutions"
									rows="5"
								/>
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
	);
}