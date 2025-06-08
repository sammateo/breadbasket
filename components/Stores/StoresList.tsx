import { Store } from "@/lib/types/store";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

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
		<div className="px-10">
			<div className="flex flex-col sm:flex-row gap-y-4 justify-between">
				<input
					className="border-2 py-1 px-2 outline-none text-soft-brown placeholder:text-soft-brown rounded-lg border-soft-brown"
					type="text"
					placeholder="Search..."
				/>
				<button className="flex gap-2 justify-center items-center cursor-pointer rounded-lg px-8 py-1 border-2 border-fresh-olive bg-fresh-olive text-creamy-white hover:bg-creamy-white hover:text-fresh-olive transition-colors">
					<FaPlus />
					Add Store
				</button>
			</div>
			<div className="grid md:grid-cols-2 gap-4 my-4">
				{testStores.map((store) => (
					<div
						key={store.id}
						className="flex flex-col gap-y-2 border-2 border-soft-brown rounded-lg group"
					>
						<div className="px-4 pt-4 pb-2">
							<h2 className="font-bold text-2xl group-hover:underline">
								{store.name}
							</h2>
							<div className="text-soft-brown flex items-center gap-2">
								<IoLocationOutline />
								<p>{store.city}</p>
							</div>
						</div>
						<p className="px-4 text-lg font-semibold text-soft-brown">
							N/A
						</p>
						<div className="flex justify-end gap-4 px-4 py-2 bg-fresh-olive text-creamy-white text-lg font-medium rounded-b-md">
							{/* Total: {"$zdsd"} */}
							<button className="bg-warm-wheat text-fresh-olive border-2 border-warm-wheat transition-colors hover:bg-fresh-olive hover:text-warm-wheat px-8 py-1 rounded-full cursor-pointer">
								Edit
							</button>
							<button className="bg-warm-wheat text-red-800 border-2 border-warm-wheat transition-colors hover:bg-red-800 hover:text-warm-wheat px-8 py-1 rounded-full cursor-pointer">
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StoresList;
