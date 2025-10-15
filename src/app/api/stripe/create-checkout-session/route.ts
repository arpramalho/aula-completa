import { NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const { priceId, mode = "subscription" } = await req.json();
    if (!priceId) {
      return NextResponse.json(
        { error: "priceId é obrigatório" },
        { status: 400 }
      );
    }

    const stripe = getStripeServer();
    const successUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/?checkout=success`;
    const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/?checkout=cancel`;

    const session = await stripe.checkout.sessions.create({
      mode: mode as "payment" | "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      automatic_tax: { enabled: true },
      allow_promotion_codes: true,
    });

    return NextResponse.json({ id: session.id, url: session.url }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Erro ao criar sessão de checkout" },
      { status: 500 }
    );
  }
}