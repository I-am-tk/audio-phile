import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { TRequestMethod } from "types";

export const validate = (schema: any, handler: NextApiHandler, methods: TRequestMethod[]) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // need to add
    if (methods.includes(req.method! as TRequestMethod)) {
      try {
        await schema.parse(req.body);
        return await handler(req, res);
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, error, message: "All types are not correct" });
      }
    } else {
      try {
        return await handler(req, res);
      } catch (error) {
        return res.status(500).json({ success: false, error, message: "Some thing went wrong" });
      }
    }
  };
};
