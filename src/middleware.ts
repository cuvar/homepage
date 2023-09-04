import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (!isLinkType(path)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(mapLinks(path));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/a/:path*",
};

type LinkType = "/a/github" | "/a/linkedin" | "/a/resumee";

function isLinkType(path: string): path is LinkType {
  return (
    path === "/a/github" || path === "/a/linkedin" || path === "/a/resumee"
  );
}

function mapLinks(key: LinkType): string {
  if (key === "/a/github") {
    return "https://github.com/cuvar";
  } else if (key === "/a/linkedin") {
    return "https://www.linkedin.com/in/luca-mueller01/";
  } else if (key === "/a/resumee") {
    return "https://resumee.cuvar.dev";
  } else {
    return "https://cuvar.dev";
  }
}
