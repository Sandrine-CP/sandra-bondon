import { useState, useEffect } from "react";
import Image from "next/image";

export default function GoogleMap({ addresses }) {
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_EMBED_KEY;
	const [selectedAddress, setSelectedAddress] = useState(0);
	const [showMap, setShowMap] = useState(false);
	const [staticMapUrl, setStaticMapUrl] = useState("");

	useEffect(() => {
		async function fetchMapUrl() {
			try {
				const response = await fetch("/api/google-maps");
				const data = await response.json();
				setStaticMapUrl(data.mapUrl);
			} catch (error) {
				console.error("Erreur lors du chargement de la carte :", error);
			}
		}
		fetchMapUrl();
	}, []);

	const handleSwitchAddress = (index) => {
		setSelectedAddress(index);
	};

	return (
		<div className="map-container">
			{!showMap ? (
				<button
					type="button"
					onClick={() => setShowMap(true)}
					aria-label="Afficher la carte de localisation du cabinet à Saint-Germain-en-Laye"
					className="relative w-full border-0 bg-transparent group"
				>
		<div className="relative w-full max-w-[400px] aspect-[4/3] mx-auto overflow-hidden rounded-lg">
		{/* Image */}
		{staticMapUrl ? (
			<Image
				src={staticMapUrl}
				alt="Carte de localisation du cabinet de Sandra Bondon à Saint-Germain-en-Laye"
				width={400}
				height={300}
				className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
		) : (
			<p>Chargement de la carte...</p>
		)}

		{/* Overlay */}
			<div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition duration-300">

				<div className="flex items-center gap-2 text-white text-sm font-medium">

				{/* Icône simple */}
				<span className="text-lg">📍</span>

				<span>Afficher la carte</span>
			</div>
		</div>
		</div>
			</button>
			) : (
				<iframe
					title="Localisation du cabinet de Sandra Bondon à Saint-Germain-en-Laye"
					src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(addresses[selectedAddress])}`}
					className="w-full h-64 rounded-lg border-0"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			)}
		<div className="mt-4 text-center">
			<p className="mb-2 text-gray-600">
				6 rue au Pain, 78100 Saint-Germain-en-Laye
			</p>

				<a
					href="https://www.google.com/maps?q=6+rue+au+Pain+78100+Saint-Germain-en-Laye"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline text-sm"
			>
					Ouvrir dans Google Maps
				</a>
		</div>
		</div>
	);
}
