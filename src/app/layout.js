import Header from "@/components/Header";
import "../styles/globals.css";

export const metadata = {
	metadataBase: new URL("https://www.sandrabondon.fr"), // Remplace par ton domaine en production
	title: "Sandra Bondon - Psychopraticienne, Coach et Hypnothérapeute",
	description:
		"Découvrez les solutions proposées par Sandra Bondon pour surmonter vos difficultés relationnelles et émotionnelles.",
	keywords:
		"Psychopraticienne, Hypnothérapeute, Coaching, Business Coaching, Thérapie, Thérapie brève, Hypnose, MOSAIC®, Santé mentale, Sandra Bondon, Burn-Out, Phobies, Traumatismes, Addiction, Obsessions, Charge Mentale, Anxiété",
	openGraph: {
		title: "Sandra Bondon - Psychopraticienne Coach Hypnothérapeute",
		description:
			"Des solutions pour votre bien-être et votre équilibre mental.",
		url: "https://www.sandrabondon.fr",
		images: "/images/preview-image.webp",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sandra Bondon - Psychopraticienne Coach Hypnothérapeute",
		description:
			"Des solutions adaptées pour surmonter vos difficultés relationnelles et émotionnelles.",
		images: "/images/preview-image.webp",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<head>
				<meta
					name="google-site-verification"
					content="xpGDYjq2PEG7WEU8_zSf_F1Xwh3ThkDvQHce-zuNHxM"
				/>
			</head>

			<body className="font-body bg-background text-primary">
				<Header />
				{children}
			</body>
		</html>
	);
}
