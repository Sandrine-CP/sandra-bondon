import { useState } from "react";

export default function GoogleMap({ addresses }) {
	const [selectedAddress, setSelectedAddress] = useState(0);
	const [showMap, setShowMap] = useState(false); // État pour afficher la carte interactive

	const handleSwitchAddress = (index) => {
		setSelectedAddress(index);
	};

	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
	// URL de l'image statique de la carte
	const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=32+Bis+rue+de+Montbuisson,Louveciennes,Yvelines&zoom=15&size=400x300&maptype=roadmap&markers=color:red|32+Bis+rue+de+Montbuisson,Louveciennes,Yvelines&key=${apiKey}`;
	if (!apiKey) {
		console.error("Clé d'API Google Maps manquante !");
		return <p>Erreur : La clé d'API Google Maps est manquante.</p>;
	}

	return (
		<div className="map-container">
			{/* Facade avec une image statique ou un bouton */}
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
						<img
							src={staticMapUrl}
							alt="Carte statique de l'emplacement à Louveciennes"
							className="w-full h-full object-cover rounded-lg"
						/>
						<span className="absolute inset-0 flex justify-center items-start bg-gray-800 bg-opacity-90 text-black px-4 py-2 rounded-md">
							Cliquez pour afficher la carte interactive
						</span>
					</div>{" "}
				</button>
			) : (
				/* Carte interactive */
				<iframe
					title="Carte-Google maps"
					src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
						addresses[selectedAddress],
					)}`}
					className="w-full h-64 rounded-lg border-0"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			)}

			{/* Liste des adresses */}
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
