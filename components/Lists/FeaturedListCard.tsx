import { GroceryListDetails } from "@/lib/types/grocery_list";
import Link from "next/link";
import React from "react";
import { CiCalendar } from "react-icons/ci";

export const FeaturedListCard = ({ list }: { list: GroceryListDetails }) => {
	return (
		<Link
			href={`/lists/${list.id}`}
			// key={list.id}
			className="flex flex-col gap-y-2 border-2 border-soft-brown rounded-lg cursor-pointer group"
		>
			<div className="px-4 pt-4 pb-2">
				<h2 className="font-bold text-2xl group-hover:underline">
					{list.name}
				</h2>
				<div className="text-soft-brown flex items-center gap-2">
					<CiCalendar />
					<p>{list.created_at.toLocaleDateString()}</p>
				</div>
			</div>
			<p className="px-4 text-lg font-semibold text-soft-brown">
				{list.description}
			</p>
			<div className="px-4 py-2 bg-fresh-olive text-creamy-white text-lg font-medium rounded-b-md">
				Total: {"$zdsd"}
			</div>
		</Link>
	);
};
