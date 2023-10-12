import { routeClient } from "@/route/routes";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function QueryRouterApp() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routeClient} />
        <ReactQueryDevtools
          initialIsOpen
          position="top-right"
          toggleButtonProps={{
            style: {
              marginRight: "5.5rem",
              transform: `scale(.7)`,
              transformOrigin: "top right",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default QueryRouterApp;
