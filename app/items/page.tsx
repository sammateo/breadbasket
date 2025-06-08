import ItemList from "@/components/Items/ItemList";
import ItemsLanding from "@/components/Landing/ItemsLanding";
import { NavigationBar } from "@/components/Navigation/NavigationBar";
import React from "react";

const page = () => {
	return (
		<div>
			<NavigationBar />
			<ItemsLanding />
			<ItemList />
		</div>
	);
};

export default page;
