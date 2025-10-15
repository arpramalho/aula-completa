import { loadStripe, Stripe as StripeJs } from "@stripe/stripe-js";
import Stripe from "stripe";

let stripePromise: Promise<StripeJs | null> | null = null;
export const getStripeJs = () => {
  if (!stripePromise) {
    const pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
    stripePromise = loadStripe(pk);
  }
  return stripePromise;
};

export const getStripeServer = () => {
  const sk = process.env.STRIPE_SECRET_KEY;
  if (!sk) throw new Error("STRIPE_SECRET_KEY não configurada");
  return new Stripe(sk, { apiVersion: "2023-10-16" });
};