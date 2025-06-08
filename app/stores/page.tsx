import StoresLanding from "@/components/Landing/StoresLanding";
import { NavigationBar } from "@/components/Navigation/NavigationBar";
import StoresList from "@/components/Stores/StoresList";
import React from "react";

const page = () => {
	return (
		<div>
			<NavigationBar />
			<StoresLanding />
			<StoresList />
		</div>
	);
};

export default page;
