import { NextApiRequest, NextApiResponse } from "next";
import { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } from "http-status-codes";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getUserById } from "../../../services/user.service";
import {
  createCartItem,
  getCartItemByProdctAndUserId,
  getUserCartItemsById,
  updatedCartItemQunatityById,
} from "../../../services/cart-item.service";
import { createCartItemSchema, TCreateCartItem } from "../../../schema/create-cart-item";
import { validate } from "../../../middlewares/validate";
export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const session = await unstable_getServerSession(req, res, authOptions);
      if (!session) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ success: false, message: "User is not authenticated. Login and try again" });
      }
      const userId = session.user.id;
      if (!userId) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ success: false, message: "User is session is not present" });
      }
      const user = await getUserById(userId);
      if (!user) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ success: false, message: "User doesn't exist" });
      }
      const cartItems = await getUserCartItemsById(userId);
      return res.status(StatusCodes.OK).json({
        success: true,
        data: cartItems,
      });
    } catch (error) {
      // handle prisma error
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, error });
    }
  } else if (req.method === "POST") {
    const data = req.body as TCreateCartItem;
    try {
      const session = await unstable_getServerSession(req, res, authOptions);
      if (!session) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ success: false, message: "User is not authenticated. Login and try again" });
      }
      const userId = session.user.id;
      if (!userId) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ success: false, message: "User is session is not present" });
      }
      const user = await getUserById(userId);
      if (!user) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ success: false, message: "User doesn't exist" });
      }

      const cartItem = await getCartItemByProdctAndUserId(data.productId, userId);

      if (cartItem) {
        const updatedCartItem = updatedCartItemQunatityById(cartItem.id, data.quantity);
        return res.status(StatusCodes.OK).json({ success: true, updatedCartItem });
      }

      const createdCartItem = await createCartItem({ ...data, userId });
      return res.status(StatusCodes.OK).json({
        success: true,
        data: createdCartItem,
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, error });
    }
  }
}

export default validate(createCartItemSchema, handler, ["POST"]);
