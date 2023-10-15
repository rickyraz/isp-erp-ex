import { Router, Route, RootRoute } from "@tanstack/react-router";
import Landing from "@/app";
import AboutPage from "@/pages/landingpage/blog/blog";
import LoginPage from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/DashboardWrap";
import Root from "./RootRouterWrapper";

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

// About (about.tsx) route
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

// Login (login.tsx) route
const loginPage = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

// Dashboard (dashboard.tsx) route - masuk ke dashboard
const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

// All Route - List of route
const allRoute = [indexRoute, aboutRoute, loginPage, dashboardRoute];

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
