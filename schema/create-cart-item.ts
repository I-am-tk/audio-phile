import { z } from "zod";

export const createCartItemSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  shortName: z.string().min(1),
  category: z.string().min(1),
  new: z.boolean().default(false),
  price: z.number(),
  quantity: z.number().min(0),
  productId: z.number().min(1),
  cartImage: z.string().min(1),
  stripeId: z.string().min(1),
});

export type TCreateCartItem = z.infer<typeof createCartItemSchema>;
export type TUpdateCartItem = TCreateCartItem & { id: string };
