import "./App.css";
import RootLayout from "./components/Pages/Root";
import Investments from "./components/Pages/Investments";
import Settings from "./components/Pages/Settings";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Investments /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
