import { useState } from "react";

export default function GoogleMap({ addresses }) {
	const [selectedAddress, setSelectedAddress] = useState(0);

	const handleSwitchAddress = (index) => {
		setSelectedAddress(index);
	};

	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

	return (
		<div className="map-container">
			{/* Carte */}
			<iframe
				title="Carte-Google maps"
				src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
					addresses[selectedAddress],
				)}`}
				className="w-full h-64 rounded-lg border-0"
				allowFullScreen
				loading="lazy"
			/>

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
