import Link from "next/link";
import React from "react";
import { FeaturedListCard } from "./FeaturedListCard";
import { GroceryListDetails } from "@/lib/types/grocery_list";
import { NewListButton, NewListPopup } from "./ListPopup";

const GroceryLists = () => {
	const testLists: GroceryListDetails[] = [
		{
			id: "001",
			user_id: "001",
			name: "Weekly Shopping",
			description: "Weekly Shopping for basic needs",
			is_public: false,
			created_at: new Date(),
			items: [
				{
					id: "01",
					grocery_list_id: "001",
					item_id: "0",
					quantity: 2,
					name: "bananas",
					unit: "kg",
					category: "fruit",
					is_public: false,
					user_id: "001",
				},
			],
		},
		{
			id: "002",
			user_id: "001",
			name: "Weekly Shopping",
			description: "Weekly Shopping for basic needs",
			is_public: false,
			created_at: new Date(),
			items: [
				{
					id: "01",
					grocery_list_id: "001",
					item_id: "0",
					quantity: 2,
					name: "bananas",
					unit: "kg",
					category: "fruit",
					is_public: false,
					user_id: "001",
				},
			],
		},
		{
			id: "003",
			user_id: "001",
			name: "Weekly Shopping",
			description: "Weekly Shopping for basic needs",
			is_public: false,
			created_at: new Date(),
			items: [
				{
					id: "01",
					grocery_list_id: "001",
					item_id: "0",
					quantity: 2,
					name: "bananas",
					unit: "kg",
					category: "fruit",
					is_public: false,
					user_id: "001",
				},
			],
		},
		{
			id: "004",
			user_id: "001",
			name: "Weekly Shopping",
			description: "Weekly Shopping for basic needs",
			is_public: false,
			created_at: new Date(),
			items: [
				{
					id: "01",
					grocery_list_id: "001",
					item_id: "0",
					quantity: 2,
					name: "bananas",
					unit: "kg",
					category: "fruit",
					is_public: false,
					user_id: "001",
				},
			],
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
				<NewListButton />
			</div>
			<div className="grid md:grid-cols-2 gap-4 my-4">
				{(!testLists || !testLists.length) && (
					<div className="flex flex-col justify-center items-center gap-4">
						<h2 className="text-2xl font-bold">
							Create Your First Grocery List
						</h2>
						<Link
							href={"/lists"}
							className="font-semibold bg-fresh-olive text-creamy-white border-2 border-fresh-olive transition-colors hover:bg-creamy-white hover:text-fresh-olive rounded-lg py-2 px-8"
						>
							New Grocery List
						</Link>
					</div>
				)}
				{testLists &&
					testLists.length &&
					testLists.map((list) => (
						<FeaturedListCard key={list.id} list={list} />
					))}
			</div>
			<NewListPopup />
		</div>
	);
};

export default GroceryLists;
