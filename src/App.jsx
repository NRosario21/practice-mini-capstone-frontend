import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { MoviesPage } from "./MoviesPage";
import { MoviesIndexPage } from "./MoviesIndexPage";
import { MoviesNewPage } from "./MoviesNewPage";
import { MoviesShowPage } from "./MoviesShowPage";
import { Footer } from "./Footer";

{
  /* <div className="container"></div>; */
}

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <MoviesPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/movies",
        element: <MoviesIndexPage />,
        loader: () => axios.get("http://localhost:3000/movies.json").then((response) => response.data),
      },
      {
        path: "/movies/new",
        element: <MoviesNewPage />,
      },
      {
        path: "/movies/:id",
        element: <MoviesShowPage />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/movies/${params.id}.json`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
