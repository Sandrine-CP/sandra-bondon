import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="google-site-verification"
					content="xpGDYjq2PEG7WEU8_zSf_F1Xwh3ThkDvQHce-zuNHxM"
				/>
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
