import { z } from "zod";

import { bagSchema, discSchema, resMessageSchema } from "./schema";

export type TDisc = z.infer<typeof discSchema>;

export type TBag = z.infer<typeof bagSchema>;

export type TResMessage = z.infer<typeof resMessageSchema>;
