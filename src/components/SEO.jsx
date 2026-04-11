// Organisation des imports
// React, hooks, librairies
import Head from "next/head";
// Bibliothèques tierces
// Composants parents
// Composants enfants
// Utilitaires et helpers
// Styles et assets

export default function SEO({ title,
	description,
	keywords,
	author,
	robots = "noindex, nofollow",
	canonical,
	ogImage,
	ogUrl,
	ogType = "website",
	twitterCard = "summary_large_image",
}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			{author && <meta name="author" content={author} />}
			<meta name="robots" content={robots} />

			{canonical && <link rel="canonical" href={canonical} />}

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={ogType} />
			{ogUrl && <meta property="og:url" content={ogUrl} />}
			{ogImage && <meta property="og:image" content={ogImage} />}

			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{ogImage && <meta name="twitter:image" content={ogImage} />}
		</Head>
	);
}
