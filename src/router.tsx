import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages";

const router = createBrowserRouter([
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
