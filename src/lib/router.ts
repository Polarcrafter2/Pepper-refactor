import { type JSX, useEffect } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// this is a simple custom router implementation using Zustand with type safe routes

export type AvailableRoutes = "/" | "/page-example" | "/notFound";

export type Routes = {
  [route in AvailableRoutes]: JSX.Element;
};

export const Router = ({
  routes,
  notFoundPage,
}: {
  routes: Routes;
  notFoundPage: JSX.Element;
}): JSX.Element => {
  const routesCount = useRouter((state) => Object.keys(state.routes).length);
  const registerRoutes = useRouter((state) => state.registerRoutes);

  useEffect(() => {
    if (routesCount === 0) {
      // register only once
      registerRoutes(routes, notFoundPage);
    }
  }, [routes, notFoundPage, routesCount, registerRoutes]);

  // Render current page
  const currentComponent = useRouter((state) => state.getCurrentComponent());
  return currentComponent;
};

export function useNavigation(): {
  push: (path: AvailableRoutes) => void;
  back: () => void;
} {
  const push = useRouter((state) => state.push);
  const back = useRouter((state) => state.back);
  return { push, back };
}

type RouterState = {
  // Current path
  currentPath: AvailableRoutes;
  // History of paths for back navigation
  history: AvailableRoutes[];
  // Map of defined routes
  routes: Routes;
  notFoundPage: JSX.Element;

  // Actions
  push: (path: AvailableRoutes) => void;
  back: () => void;
  registerRoute: (path: AvailableRoutes, component: JSX.Element) => void;
  registerRoutes: (routes: Routes, notFoundPage: JSX.Element) => void;
  // Current component to render
  getCurrentComponent: () => JSX.Element;
};

export const useRouter = create<RouterState>()(
  devtools(
    (set, get) => ({
      currentPath: "/",
      history: [],
      routes: {},

      push: (path: AvailableRoutes): void => {
        set((state) => ({
          currentPath: path,
          history: [...state.history, state.currentPath],
        }));
      },

      back: (): void => {
        const { history } = get();
        if (history.length === 0) {
          return;
        }
        const previousPath = history[history.length - 1]!;
        set((state) => ({
          currentPath: previousPath,
          history: state.history.slice(0, -1),
        }));
      },

      registerRoutes: (routes: Routes, notFoundPage: JSX.Element): void => {
        set(() => ({
          routes,
          notFoundPage,
        }));
      },

      getCurrentComponent: (): JSX.Element => {
        const { currentPath, routes, notFoundPage } = get();
        // Check if the route exists
        if (routes[currentPath]) {
          return routes[currentPath];
        }
        return notFoundPage;
      },
    }),
    { name: "router-store" },
  ),
);
