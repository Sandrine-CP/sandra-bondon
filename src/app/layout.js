import "../styles/globals.css";

export const metadata = {
	title: "Sandra Bondon - Psychopraticienne, Coach et Hypnothérapeute",
	description:
		"Découvrez les solutions proposées par Sandra Bondon pour surmonter vos difficultés relationnelles et émotionnelles.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className="font-body bg-background text-primary">{children}</body>
		</html>
	);
}
