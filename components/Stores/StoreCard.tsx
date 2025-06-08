import { Store } from "@/lib/types/store";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const StoreCard = ({ store }: { store: Store }) => {
	return (
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
					<p>
						{store.city}, {store.country_name}
					</p>
				</div>
			</div>
			{/* <p className="px-4 text-lg font-semibold text-soft-brown">
							N/A
						</p> */}
			<div className="flex flex-col sm:flex-row justify-end gap-x-4 gap-y-2 px-4 py-2 bg-fresh-olive text-creamy-white text-lg font-medium rounded-b-md">
				{/* Total: {"$zdsd"} */}
				<button className="bg-warm-wheat text-fresh-olive border-2 border-warm-wheat transition-colors hover:bg-fresh-olive hover:text-warm-wheat px-8 py-1 rounded-full cursor-pointer">
					Edit
				</button>
				<button className="bg-warm-wheat text-red-800 border-2 border-warm-wheat transition-colors hover:bg-red-800 hover:text-warm-wheat px-8 py-1 rounded-full cursor-pointer">
					Delete
				</button>
			</div>
		</div>
	);
};

export default StoreCard;
