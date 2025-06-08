import { Item } from "@/lib/types/item";
import React from "react";
import { NewItemButton, NewItemPopup } from "./ItemPopup";
import { MdOutlineCategory } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";

const ItemList = () => {
	const testItems: Item[] = [
		{
			id: "09",
			name: "Yogurt",
			unit: "cup",
			category: "Dairy",
			is_public: false,
			user_id: "01",
		},
		{
			id: "10",
			name: "Cheese",
			unit: "kg",
			category: "Dairy",
			is_public: false,
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
				<NewItemButton />
			</div>
			<div className="grid md:grid-cols-2 gap-4 my-4">
				{testItems.map((store) => (
					<div
						key={store.id}
						className="flex flex-col gap-y-2 border-2 border-soft-brown rounded-lg group"
					>
						<div className="px-4 pt-4 pb-2">
							<h2 className="font-bold text-2xl group-hover:underline">
								{store.name}
							</h2>
							<div className="text-soft-brown my-2">
								{/* <IoLocationOutline /> */}
								<p className="flex items-center gap-2">
									<TbRulerMeasure />
									{store.unit}
								</p>
								<p className="flex items-center gap-2">
									<MdOutlineCategory />
									{store.category}
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
				))}
			</div>
			<NewItemPopup />
		</div>
	);
};

export default ItemList;
