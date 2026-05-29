import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home/home";
import { Test } from "./pages/test/test";
import { GenresSelector } from "./pages/test/components/genres-selector";
import { TestHome } from "./pages/test/components/test-home";
import { MovieSelector } from "./pages/test/components/movie-selector";
import { TestGenerate } from "./pages/test/components/test-generate";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/test",
      element: <Test />,
      children: [
        {
          path: "",
          element: <TestHome />
        },
        {
          path: "genres",
          element: <GenresSelector />
        },
        {
          path: "movies",
          element: <MovieSelector />
        },
        {
          path: "generate",
          element: <TestGenerate />
        }
      ]
    }
  ]
)