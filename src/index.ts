export type Disc = {
	id: string;
	name: string;
	brand: string;
	category: string;
	speed: string;
	glide: string;
	turn: string;
	fade: string;
	stability: string;
	link: string;
	pic: string;
	name_slug: string;
	brand_slug: string;
	category_slug: string;
	stability_slug: string;
	color: string;
	background_color: string;
};

export type Bag = {
	id: string;
	name: string;
	user_id: string;
	discs: string[];
};

export type ApiError = {
	error?: string;
};
