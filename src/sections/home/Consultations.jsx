export default function Consultations() {
	return (
		<section className="py-16 px-4">
			<h2 className="text-2xl font-bold mb-4 text-center">Consultations</h2>
			<p className="max-w-2xl mx-auto mb-4 text-center font-semibold">
				Horaires : 9h00 - 20h00
			</p>
			<div className="grid grid-cols-3 gap-4 text-center">
				{/* Bloc Cabinet */}
				<div>
					<div className="bg-primary text-secondary rounded-full py-2 px-4">
						Cabinet
					</div>
					<p className="text-gray-500 mt-2 text-sm">3 emplacements</p>
				</div>
				{/* Bloc Téléphone */}
				<div>
					<div className="bg-primary text-secondary rounded-full py-2 px-4">
						Téléphone
					</div>
					<p className="text-gray-500 mt-2 text-sm">06 01 02 03 04</p>
				</div>
				{/* Bloc En Ligne */}
				<div>
					<div className="bg-primary text-secondary rounded-full py-2 px-4">
						En Ligne
					</div>
					<p className="text-gray-500 mt-2 text-sm">via WhatsApp</p>
				</div>
			</div>
			{/* Section des Tarifs */}
			<div className="text-center mt-8">
				<p className="text-gray-500 text-sm">Tarifs</p>
				<p className="text-gray-500 text-sm">Prix moyen à titre indicatif</p>
				<p className="text-gray-500 text-sm">80 à 110 euros</p>
			</div>
		</section>
	);
}
