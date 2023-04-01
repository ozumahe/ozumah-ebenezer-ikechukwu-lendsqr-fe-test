import { createBrowserRouter } from "react-router-dom";
import { Home, SignIn, UserDetails, Users } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user/:userId/details",
    element: <UserDetails />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

export default router;
