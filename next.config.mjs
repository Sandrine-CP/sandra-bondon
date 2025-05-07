import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */

// 🔐 Headers de sécurité recommandés
const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data:;
      font-src 'self' https:;
      object-src 'none';
      frame-ancestors 'none';
    `
			.replace(/\s{2,}/g, " ")
			.trim(), // nettoyage des sauts de ligne
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
	{
		key: "Cross-Origin-Embedder-Policy",
		value: "require-corp",
	},
];

const nextConfig = {
	async headers() {
		return [
			{
				source: "/(.*)", // Appliqué à toutes les routes
				headers: securityHeaders,
			},
		];
	},
};

export default withNextVideo(nextConfig);
