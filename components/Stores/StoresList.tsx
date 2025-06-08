import { Store } from "@/lib/types/store";
import React from "react";
import NewStorePopup, { NewStoreButton } from "./NewStorePopup";
import StoreCard from "./StoreCard";

const StoresList = () => {
	const testStores: Store[] = [
		{
			id: "09",
			name: "Popular Discounts",
			country_id: "3434",
			country_name: "Barbados",
			country_code: "BB",
			city: "Kendal Hill",
			user_id: "01",
		},
		{
			id: "10",
			name: "Massy Stores",
			country_id: "3434",
			country_name: "Barbados",
			country_code: "BB",
			city: "Sky Mall",
			user_id: "01",
		},
		{
			id: "11",
			name: "Popular",
			country_id: "3434",
			country_name: "Barbados",
			country_code: "BB",
			city: "Kendal Hill",
			user_id: "01",
		},
	];
	return (
		<div className="px-10 bg-creamy-white">
			<div className="flex flex-col sm:flex-row gap-y-4 justify-between">
				<input
					className="border-2 py-1 px-2 outline-none text-soft-brown placeholder:text-soft-brown rounded-lg border-soft-brown"
					type="text"
					placeholder="Search..."
				/>
				<NewStoreButton />
			</div>
			<div className="grid md:grid-cols-2 gap-4 my-4">
				{testStores.map((store) => (
					<StoreCard key={store.id} store={store} />
				))}
			</div>
			<NewStorePopup />
		</div>
	);
};

export default StoresList;
