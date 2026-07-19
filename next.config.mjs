import { withNextVideo } from "next-video/process";

// Permet d'autoriser certaines fonctionnalités uniquement en développement
const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
	{
		key: "Content-Security-Policy",
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

/** @type {import("next").NextConfig} */
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