import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */

// 🔐 Headers de sécurité recommandés
const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		// 🔐  Explication des directives :
		// - default-src 'self' : n'autorise que les ressources venant du même domaine par défaut.
		// - script-src 'self' 'unsafe-inline' : permet les scripts locaux + scripts inline (ex : GSAP). À éviter si possible en prod stricte.
		// - style-src 'self' 'unsafe-inline' : permet les styles locaux + inline (utile avec Tailwind ou certaines animations).
		// - img-src 'self' data: : autorise les images locales + images en base64 (icônes, etc.).
		// - font-src 'self' https: : permet les polices locales + polices via CDN (Google Fonts, etc.).
		// - object-src 'none' : interdit les balises <object>, <embed>, <applet> (sécurité renforcée).
		// - frame-src https://www.google.com https://maps.googleapis.com : autorise les iframes pour Google Maps uniquement.
		// - frame-ancestors 'none' : empêche le site d’être inclus dans une iframe externe (protection anti clickjacking).
		value: `
		  default-src 'self';
		  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""};
		  style-src 'self' 'unsafe-inline';
		  img-src 'self' data:;
		  font-src 'self' https:;
		  object-src 'none';
		  frame-src https://www.google.com https://maps.googleapis.com;
		  frame-ancestors 'none';
		`
			.replace(/\s{2,}/g, " ")
			.trim(),
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},
	{
		key: "Permissions-Policy",
		value: "geolocation=(), microphone=(), camera=()",
	},
	{
		key: "Cross-Origin-Opener-Policy",
		value: "same-origin",
	},
];

const nextConfig = {
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "maps.googleapis.com",
			},
		],
	},
};

export default withNextVideo(nextConfig);
