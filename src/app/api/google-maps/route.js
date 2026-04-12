import { NextResponse } from "next/server";

export async function GET() {
	try {
		const { GOOGLE_MAPS_API_KEY } = process.env;

		if (!GOOGLE_MAPS_API_KEY) {
			return NextResponse.json(
				{ error: "Clé API Google Maps manquante" },
				{ status: 500 },
			);
		}

		const location = "6 rue Saint Léger, 78100 Saint-Germain-en-Laye, France";
		const encodedLocation = encodeURIComponent(location);
		const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedLocation}&zoom=15&size=400x300&maptype=roadmap&markers=color:red|${encodedLocation}&key=${GOOGLE_MAPS_API_KEY}`;

		return NextResponse.json({ mapUrl });
	} catch (error) {
		console.error("Erreur dans l'API Google Maps :", error);
		return NextResponse.json(
			{ error: "Erreur lors de la génération de la carte" },
			{ status: 500 },
		);
	}
}
