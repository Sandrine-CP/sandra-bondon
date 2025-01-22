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
