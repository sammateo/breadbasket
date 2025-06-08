import { GroceryListDetails } from "@/lib/types/grocery_list";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FeaturedListCard } from "./FeaturedListCard";
export const FeaturedLists = () => {
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
			<div className="flex flex-col sm:flex-row items-center justify-between gap-y-2">
				<h2 className="text-3xl font-bold">Grocery Lists</h2>
				<Link
					href={"/lists"}
					className=" text-xl flex items-center gap-2"
				>
					See all
					<FaArrowRightLong className="relative" />
				</Link>
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
		</div>
	);
};
