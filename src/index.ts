import { z } from "zod";

export const resMessageSchema = z.object({ message: z.string() });

export const discSchema = z.object({
	id: z.string(),
	name: z.string(),
	brand: z.string(),
	category: z.string(),
	speed: z.string(),
	glide: z.string(),
	turn: z.string(),
	fade: z.string(),
	stability: z.string(),
	link: z.string().optional(),
	pic: z.string().optional(),
	name_slug: z.string(),
	brand_slug: z.string(),
	category_slug: z.string(),
	stability_slug: z.string(),
	color: z.string().optional(),
	background_color: z.string().optional()
});

export const bagSchema = z.object({
	id: z.string(),
	name: z.string(),
	user_id: z.string(),
	discs: z.array(z.string())
});

export type TDisc = z.infer<typeof discSchema>;

export type TBag = z.infer<typeof bagSchema>;

export type TResMessage = z.infer<typeof resMessageSchema>;
