import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect, useRef } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";


const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const contentRef = useRef(null);
  const { pathname } = useLocation();

  // <main> stays mounted across routes, so reset its scroll on every page change
  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id="app">
      <Header />
      {/* Only this area scrolls; header and footer stay in place */}
      <main className="app-content" ref={contentRef}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Error />}><Grocery /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
