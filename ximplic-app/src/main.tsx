import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./site.css";

import LayoutV2 from "./components/LayoutV2";
import HomeV2 from "./pages/HomeV2";
import Technology from "./pages/Technology";
import Products from "./pages/Products";
import About from "./pages/About";
import News from "./pages/News";
import Events from "./pages/Events";
import ProductVyzora from "./pages/ProductVyzora";
import ProductVextyl from "./pages/ProductVextyl";
import ProductXengra from "./pages/ProductXengra";
import Demo from "./components/ui/demo";
import Navbar1Demo from "./components/blocks/navbar1-demo";

const router = createBrowserRouter([
  {
    element: <LayoutV2 />,
    children: [
      { path: "/", element: <HomeV2 /> },
      { path: "/technology", element: <Technology /> },
      { path: "/products", element: <Products /> },
      { path: "/products/vyzora", element: <ProductVyzora /> },
      { path: "/products/vextyl", element: <ProductVextyl /> },
      { path: "/products/xengra", element: <ProductXengra /> },
      { path: "/about", element: <About /> },
      { path: "/news", element: <News /> },
      { path: "/events", element: <Events /> },
    ],
  },
  { path: "/demo", element: <Demo /> },
  { path: "/navbar-demo", element: <Navbar1Demo /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
