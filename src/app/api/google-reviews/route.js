import axios from "axios";
import NodeCache from "node-cache";

// Configuration du cache (durée de vie : 24h)
const cache = new NodeCache({ stdTTL: 86400 }); // 24 heures

export async function GET(request) {
	try {
		// Vérifie si les avis sont déjà en cache
		const cachedReviews = cache.get("googleReviews");
		if (cachedReviews) {
			return new Response(JSON.stringify(cachedReviews), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Si non en cache, fais une requête à l'API Google
		const { GOOGLE_API_KEY, PLACE_ID } = process.env;
		const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;

		const response = await axios.get(url);

		console.log("Données retournées par l'API Google :", response.data);

		// Vérifie si des avis existent dans la réponse
		const reviews = response.data?.result?.reviews || [];

		// Met en cache les avis
		cache.set("googleReviews", reviews);

		// Renvoie les avis au frontend
		return new Response(JSON.stringify(reviews), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Erreur lors de la récupération des avis Google :", error);
		return new Response(
			JSON.stringify({ error: "Impossible de récupérer les avis Google" }),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}
}
