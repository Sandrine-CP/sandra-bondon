import APropos from "@/app/a-propos/page";
import Seances from "@/app/seances/page";
import SolutionsPourVosCollaborateurs from "@/app/solutions-pour-vos-collaborateurs/page";
import SolutionsPourVous from "@/app/solutions-pour-vous/page";
import Link from "next/link";

export default function NavBar() {
	return (
		<header>
			<Link href="/solutions-pour-vous">Solutions pour vous</Link>
		</header>
	);
}
