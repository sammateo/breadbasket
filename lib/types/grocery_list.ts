import { GroceryListItemDetails } from "./grocery_list_item";

export interface GroceryList {
	id: string;
	user_id: string;
	name: string;
	description: string;
	is_public: boolean;
	created_at: Date;
}

export interface GroceryListDetails extends GroceryList {
	items: GroceryListItemDetails[];
}
