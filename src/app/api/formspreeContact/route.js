export async function POST(request) {
	try {
		const { FORMSPREE_URL_CONTACT } = process.env;

		if (!FORMSPREE_URL_CONTACT) {
			return new Response(
				JSON.stringify({
					ok: false,
					error: "URL Formspree Contact manquante",
				}),
				{
					status: 500,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		const contentType = request.headers.get("content-type") || "";
		const isForm =
			contentType.includes("multipart/form-data") ||
			contentType.includes("application/x-www-form-urlencoded");

		if (!isForm) {
			return new Response(
				JSON.stringify({
					ok: false,
					error: "Requête invalide : formulaire attendu.",
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		const formData = await request.formData();

		const response = await fetch(FORMSPREE_URL_CONTACT, {
			method: "POST",
			body: formData,
		});

		const text = await response.text();

		if (!response.ok) {
			return new Response(
				JSON.stringify({
					ok: false,
					error: "Erreur lors de l'envoi du formulaire de contact",
					details: text,
				}),
				{
					status: response.status,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		return new Response(
			JSON.stringify({
				ok: true,
				message: "Formulaire de contact envoyé avec succès",
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("Erreur dans l'API Formspree Contact :", error);

		return new Response(
			JSON.stringify({
				ok: false,
				error: "Erreur lors du traitement de la requête",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
}