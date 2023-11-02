import { Router, Route, RootRoute } from "@tanstack/react-router";
import Landing from "@/pages/landingpage/app";

import Dashboard from "@/pages/dashboard/DashboardWrap";
import Root from "./RootRouterWrapper";
import PricingPage from "@/pages/landingpage/pricing/Pricing";
import Order from "@/pages/landingpage/order/Order";

// Root
const rootRoute = new RootRoute({
  component: Root,
});

// Index (App.tsx) route
const indexRoute: Route = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Landing,
});

// About (pricing-page.tsx) route
const pricingPage = new Route({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingPage,
});

const orderPage = new Route({
  getParentRoute: () => rootRoute,
  path: "/order",
  component: Order,
});

// Login (login.tsx) route
// const loginPage = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/login",
//   component: LoginPage,
// });

// Dashboard (dashboard.tsx) route - masuk ke dashboard
// const dashboardRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/dashboard",
//   component: Dashboard,
// });

// All Route - List of route
const allRoute = [indexRoute, pricingPage, orderPage];

// Create the Route-TREE for using all routes
const routeTree = rootRoute.addChildren(allRoute);

// Create the router using your route tree
export const routeClient = new Router({ routeTree });

// Register your router for maximum type safety -> for using as attr
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof routeClient;
  }
}
