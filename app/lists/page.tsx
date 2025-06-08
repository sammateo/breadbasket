import ListsLanding from "@/components/Landing/ListsLanding";
import { FeaturedLists } from "@/components/Lists/FeaturedLists";
import { NavigationBar } from "@/components/Navigation/NavigationBar";
import React from "react";

const page = () => {
	return (
		<div>
			<NavigationBar />
			<ListsLanding />
			<FeaturedLists featured={false} />
		</div>
	);
};

export default page;
