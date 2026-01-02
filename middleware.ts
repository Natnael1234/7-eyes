export { default } from "next-auth/middleware"

export const config = { matcher: ["/admin/dashboard/:path*", "/admin/general/:path*", "/admin/experiences/:path*", "/admin/partners/:path*", "/admin/services/:path*"] }
