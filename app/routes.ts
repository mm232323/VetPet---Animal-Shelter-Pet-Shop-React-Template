import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("adopt", "routes/adopt.tsx"),
  route("support", "routes/support.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
