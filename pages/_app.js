import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="keywords"
					content="psychopraticienne, thérapie, MOSAÏC, gestion des émotions, hypnose, PNL, Louveciennes"
				/>
				<meta name="author" content="Sandra Bondon" />
			</Head>
			<Component {...pageProps} />;
		</>
	);
}
