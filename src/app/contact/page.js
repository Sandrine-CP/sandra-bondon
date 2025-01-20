"use client";
import { useState, useEffect } from "react";

export default function ContactPage() {
	const formActionUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

	const [errors, setErrors] = useState({});

	const validateField = (name, value) => {
		let error = "";

		if (!value) {
			if (name === "name") error = "Veuillez entrer votre nom.";
			if (name === "email") error = "Veuillez indiquer votre adresse e-mail.";
			if (name === "text")
				error = "Veuillez me préciser votre situation ou votre besoin.";
		} else if (name === "email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				error = "L'adresse e-mail n'est pas valide.";
			}
		}

		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: error,
		}));
	};

	const handleValidation = (event) => {
		event.preventDefault();
		const form = event.target;
		const formErrors = {};

		const name = form.name.value.trim();
		const email = form.email.value.trim();
		const text = form.text.value.trim();

		if (!name) formErrors.name = "Veuillez entrer votre nom.";
		if (!email) formErrors.email = "Veuillez indiquer votre adresse e-mail.";
		else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				formErrors.email = "L'adresse e-mail n'est pas valide.";
			}
		}
		if (!text)
			formErrors.text = "Veuillez me préciser votre situation ou votre besoin.";

		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		// alert("Formulaire envoyé avec succès !");
		form.submit();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		validateField(name, value);
	};

	useEffect(() => {
		window.scrollTo(0, 0); // Définit la position de défilement tout en haut
	}, []);

	return (
		<>
			<main className="min-h-screen bg-white">
				<section className="py-6 px-4 text-center">
					<h1 className="text-2xl font-bold uppercase mb-4 p-5">
						Contactez-moi
					</h1>
					<div className="container mx-auto px-4">
						<p className="text-lg mb-4">
							Remplissez le formulaire ci-dessous ou envoyez un email à :{" "}
							<a
								href="mailto:s.cazenave@hotmail.fr"
								className="text-blue-500 underline"
							>
								s.cazenave@hotmail.fr
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
						<form
							method="post"
							action={formActionUrl}
							onSubmit={handleValidation}
						>
							<div className="mb-4">
								<label
									className="block text-sm font-medium text-gray-600"
									htmlFor="name"
								>
									Nom
								</label>
								<input
									className={`mt-1 p-2 w-full border rounded-md ${
										errors.name ? "border-red-500" : "border-gray-300"
									}`}
									type="text"
									name="name"
									id="name"
									onChange={handleChange}
									autoComplete="family-name"
								/>
								{errors.name && (
									<p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
									className="mt-1 p-2 w-full border rounded-md border-gray-300"
									type="text"
									name="prenom"
									id="prenom"
									onChange={handleChange}
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
									className={`mt-1 p-2 w-full border rounded-md ${
										errors.email ? "border-red-500" : "border-gray-300"
									}`}
									type="email"
									name="email"
									id="email"
									onChange={handleChange}
									autoComplete="email"
								/>
								{errors.email && (
									<p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
									className={`mt-1 p-2 w-full border rounded-md ${
										errors.text ? "border-red-500" : "border-gray-300"
									}`}
									rows="3"
									name="text"
									id="text"
									onChange={handleChange}
									autoComplete="off"
								/>
								{errors.text && (
									<p className="text-red-500 text-sm mt-1">{errors.text}</p>
								)}
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
			</main>
		</>
	);
}
