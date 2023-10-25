import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/shared/auth/Login";
import Register from "../pages/shared/auth/Register";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Detail from '../pages/Home/Detail/Detail'
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../pages/PageNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./service.json"),
      },
      {
        path: "/detail/:id",
        content: (
          <PrivateRoute>
            <Detail></Detail>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
    ],
  },
]);
export default router;
