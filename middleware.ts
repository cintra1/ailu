import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ['/anyone-can-visit-this-route','/', '/api/webhooks/clerk', '/api/webhooks/stripe'],
  ignoredRoutes: ['/no-auth-in-this-route'],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};