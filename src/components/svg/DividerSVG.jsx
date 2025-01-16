"use client";

export default function DividerSVG({
	width = "100%",
	height = "auto",
	color = "#2C254D",
}) {
	return (
		<div className="flex justify-center my-6">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				æ
				viewBox="0 0 100 10"
				width={width}
				height={height}
				fill={color}
				aria-hidden="true"
			>
				{/* Remplacez le contenu par le chemin exact de votre SVG */}
				<path
					d="M0 5 Q25 0 50 5 T100 5"
					stroke={color}
					strokeWidth="2"
					fill="none"
				/>
			</svg>
		</div>
	);
}
