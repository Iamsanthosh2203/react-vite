import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Chair from "./pages/Chair.jsx";
import Products from "./pages/Products.jsx";
import Sofa from "./pages/Sofa.jsx";
import Table from "./pages/Table.jsx";

const router = createBrowserRouter([
  {
    path: "/react-vite/",
    element: <App />,
    children: [
      {
        path: "/react-vite/",
        element: <Home />,
      },
      {
        path: "/react-vite/contact",
        element: <Contact />,
      },
      {
        path: "/react-vite/products",
        element: <Products />,
      },
      {
        path: "/react-vite/chair",
        element: <Chair />,
      },
      {
        path: "/react-vite/sofa",
        element: <Sofa />,
      },
      {
        path: "/react-vite/table",
        element: <Table />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
