export default function Consultations() {
	return (
		<section className="py-16 px-4">
			<h2 className="text-2xl font-bold mb-4 text-center p-4">Consultations</h2>
			<p className="max-w-2xl mx-auto mb-8 text-center font-semibold p-4">
				Horaires : 9h00 - 20h00
			</p>
			<p className="max-w-2xl mx-auto mb-8 text-center p-4">Modalités</p>
			<div className="flex justify-around items-center">
				<div className="bg-primary text-secondary rounded-40px p-3">
					Cabinet
				</div>
				<div className="bg-primary text-secondary rounded-40px p-3">
					Téléphone
				</div>
				<div className="bg-primary text-secondary rounded-40px p-3">
					En Ligne
				</div>
			</div>
			<div className="flex justify-around items-center">
				<div className="bg-white text-primary text-sm text-gray-500 mt-2">
					3 emplacements
				</div>
				<div className="bg-white text-primary text-sm text-gray-500 mt-2">
					06 01 02 03 04
				</div>
				<div className="bg-white text-primary text-sm text-gray-500 mt-2">
					via WhatsApp
				</div>
			</div>
		</section>
	);
}
