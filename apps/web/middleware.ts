import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REFERRAL_COOKIE_DAYS, REFERRAL_COOKIE_NAME } from "@/lib/config";

// When a visitor lands with ?ref=CODE, drop a cookie so the code follows them
// through the site and into the application form. The form reads the cookie
// client-side and includes it in the POST payload. See docs/PRD.md §12
// (referral) and lib/config.ts (REFERRAL_* constants).
export function middleware(req: NextRequest) {
  const ref = req.nextUrl.searchParams.get("ref");
  if (!ref) return NextResponse.next();

  const cleaned = ref.trim().slice(0, 64);
  if (!cleaned) return NextResponse.next();

  const res = NextResponse.next();
  res.cookies.set(REFERRAL_COOKIE_NAME, cleaned, {
    path: "/",
    maxAge: 60 * 60 * 24 * REFERRAL_COOKIE_DAYS,
    sameSite: "lax",
    httpOnly: false, // client-side ApplicationForm reads it
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}

export const config = {
  // Skip static assets, favicons, and internal Next.js paths.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
