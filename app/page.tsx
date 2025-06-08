import { Landing } from "@/components/Landing/Landing";
import { FeaturedLists } from "@/components/Lists/FeaturedLists";
import { NavigationBar } from "@/components/Navigation/NavigationBar";

export default function Home() {
	return (
		<div className="">
			<NavigationBar />
			<Landing />
			<FeaturedLists featured={true} />
		</div>
	);
}
