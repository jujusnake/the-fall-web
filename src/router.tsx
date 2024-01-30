import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Story from "./pages/Story";

const router = createBrowserRouter([
  { path: "/", element: <Intro /> },
  { path: "/story", element: <Story /> },
]);

export default router;
