import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};


const cookieExpired = (cookie: RequestCookie | undefined) => {
  if (!cookie) {
    return false;
  }
  const [, payload] = cookie.value.split(".");
  const base = JSON.parse(Buffer.from(payload, "base64").toString("utf-8"));

  return base.exp * 1000 - new Date().valueOf() > 0;
}

export async function middleware(request: NextRequest) {

  const loggedInRoutes = ['/user'];
  const loggedOutRoutes = ['/cuenta'];

  const token = cookies().get("f_session");
  const notExpired = cookieExpired(token);

  if ((!token || !token.value) && loggedInRoutes.some(route => request.nextUrl.pathname.startsWith(route)) && !notExpired) {
    return NextResponse.redirect("http://localhost:3000/cuenta");
  }

  if ((token && token.value) && loggedOutRoutes.some(route => request.nextUrl.pathname.startsWith(route)) && notExpired) {
    return NextResponse.redirect("http://localhost:3000/user");
  }

  return NextResponse.next();
}

