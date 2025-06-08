export interface PriceSubmission {
	id: string;
	item_id: string;
	store_id: string;
	user_id: string;
	price_per_unit: number;
	timestamp: Date;
	is_public: boolean;
	trust_score: number;
	receipt_url: string;
}
