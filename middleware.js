const protectedPrefixes = ["/admin", "/admin.html", "/api/admin"];

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (!protectedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return;
  }

  const expectedUser = process.env.ADMIN_BASIC_USER;
  const expectedPassword = process.env.ADMIN_BASIC_PASSWORD;

  if (!expectedUser || !expectedPassword) {
    return;
  }

  const header = request.headers.get("authorization") || "";
  const [scheme, token] = header.split(" ");

  if (scheme === "Basic" && token) {
    const [user, password] = decodeBasicToken(token);
    if (user === expectedUser && password === expectedPassword) {
      return;
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Maktabat Admin"'
    }
  });
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/admin.html", "/api/admin/:path*"]
};

function decodeBasicToken(token) {
  try {
    const decoded = atob(token);
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return ["", ""];
    }

    return [decoded.slice(0, separatorIndex), decoded.slice(separatorIndex + 1)];
  } catch {
    return ["", ""];
  }
}
