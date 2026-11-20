import { NextRequest, NextResponse } from "next/server";
import { whatsappLink } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const message = (request.nextUrl.searchParams.get("message") || "Hello SPC International, I would like to get in touch.").slice(0, 400);
  return NextResponse.redirect(whatsappLink(message));
}
