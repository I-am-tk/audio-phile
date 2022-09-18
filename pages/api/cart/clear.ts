import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getUserById } from "services/user.service";
import { removeUserCartItemsById } from "services/cart-item.service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
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
      // The main thing will be over here

      await removeUserCartItemsById(userId);
      res.status(StatusCodes.OK).json({
        success: true,
      });
    } catch (error) {
      // handle prisma error
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, error });
    }
  }
}
