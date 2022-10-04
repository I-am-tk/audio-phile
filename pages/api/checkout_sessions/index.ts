import { NextApiHandler } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-08-01",
});

const handler: NextApiHandler = async (req, res) => {
  console.log("Here", req.method);
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        currency: "inr",
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req.body.items ?? [],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      });
      res.status(200).json(session);
    } catch (error: any) {
      if ("message" in error) {
        res.status(500).json({ statusCode: 500, message: error.message });
      } else {
        res.status(500).json({ statusCode: 500, message: "Something went wrong" });
      }
    }
  } else {
    res.status(405).end("Method not allowed");
  }
};

export default handler;
