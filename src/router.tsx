import { createBrowserRouter } from "react-router-dom";
import { Home, SignIn } from "./pages";

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
    path: "/result",
    // element: <Result />,
  },
]);

export default router;
