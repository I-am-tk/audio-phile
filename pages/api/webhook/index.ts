import Stripe from "stripe";
import { buffer } from "micro";
import { NextApiHandler } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-08-01",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  let event;
  if (req.method === "post") {
    try {
      const rawBody = await buffer(req);
      const signature = req.headers["stripe-signature"] as string;

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_KEY as string
      );

      if (event.type === "checkout.session.completed") {
      }
    } catch (error: any) {
      if ("message" in error) {
        res.status(400).json({ statusCode: 400, message: error.message });
      } else {
        res.status(400).json({ statusCode: 400, message: "Something went wrong" });
      }
    }
  } else {
    res.status(405).end("Method not allowed");
  }
};

export default handler;
