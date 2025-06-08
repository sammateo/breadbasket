export interface GroceryListItem {
	id: string;
	grocery_list_id: string;
	item_id: string;
	quantity: number;
}

export interface GroceryListItemDetails extends GroceryListItem {
	name: string;
	unit: string;
	category: string;
	is_public: boolean;
	user_id: string;
}
