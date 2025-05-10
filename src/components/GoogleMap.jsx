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
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							setShowMap(true);
						}
					}}
					className="relative cursor-pointer w-full h-auto bg-transparent border-0"
				>
					<div className="relative w-[400px] h-[300px] mx-auto">
						{staticMapUrl ? (
							<Image
								src={staticMapUrl}
								alt="Carte statique de l'emplacement à Louveciennes"
								width={400}
								height={300}
								className="w-full h-full object-cover rounded-lg"
							/>
						) : (
							<p>Chargement de la carte...</p>
						)}
						<span className="absolute inset-0 flex justify-center items-start bg-gray-800 bg-opacity-90 text-black px-4 py-2 rounded-md">
							Cliquez pour afficher la carte interactive
						</span>
					</div>
				</button>
			) : (
				<iframe
					title="Carte-Google maps"
					src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(addresses[selectedAddress])}`}
					className="w-full h-64 rounded-lg border-0"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			)}

			<div className="address-list mt-4 text-center">
				{addresses.map((address, index) => (
					<div key={address} className="mb-2">
						<p className="mb-2 text-gray-600">{address}</p>
						<button
							type="button"
							onClick={() => handleSwitchAddress(index)}
							className="text-blue-500 hover:underline text-sm"
						>
							Voir sur la carte
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
