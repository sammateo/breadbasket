import ListsLanding from "@/components/Landing/ListsLanding";
import GroceryLists from "@/components/Lists/GroceryLists";
import { NavigationBar } from "@/components/Navigation/NavigationBar";
import React from "react";

const page = () => {
	return (
		<div>
			<NavigationBar />
			<ListsLanding />
			<GroceryLists />
			{/* <FeaturedLists featured={false} /> */}
		</div>
	);
};

export default page;
