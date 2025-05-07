// Organisation des imports
// React, hooks, librairies
import Head from "next/head";
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets

export default function SEO({ title, description, keywords, author }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content={author} />
		</Head>
	);
}
