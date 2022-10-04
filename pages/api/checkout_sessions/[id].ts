import { NextApiHandler } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-08-01",
});

const handler: NextApiHandler = async (req, res) => {
  const id = req.query.id as string;

  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect checkout session ID");
    }
    const checkoutSessoin = await stripe.checkout.sessions.retrieve(id);

    res.status(200).json(checkoutSessoin);
  } catch (error: any) {
    if ("message" in error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    } else {
      res.status(500).json({ statusCode: 500, message: "Something went wrong" });
    }
  }
};

export default handler;
