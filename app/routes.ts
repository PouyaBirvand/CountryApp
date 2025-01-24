import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  ...prefix("", [
    route("countries","routes/countries.tsx"),
    route("countries/:countryName","routes/country.tsx")
  ])
] satisfies RouteConfig;