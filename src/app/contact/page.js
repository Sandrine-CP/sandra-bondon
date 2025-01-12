export default function ContactPage() {
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
				<div
					/* From Uiverse.io by Javierrocadev */
					className="max-w-md mx-auto relative overflow-hidden z-10 bg-secondary p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-orange before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-blue after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
				>
					<h2 className="text-2xl text-primary font-bold mb-6">Contact</h2>
					<form method="post" action="#">
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
								htmlFor="bio"
							>
								Décrivez votre besoin
							</label>
							<textarea
								className="mt-1 p-2 w-full border rounded-md"
								rows="3"
								name="bio"
								id="bio"
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
			</section>{" "}
		</main>
	);
}
