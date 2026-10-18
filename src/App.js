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
import Shimmer from "./components/Shimmer";


const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const contentRef = useRef(null);
  const { pathname } = useLocation();

  // <main> stays mounted across routes, so reset its scroll on every page change
  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex h-dvh flex-col">
      <Header />
      {/* Only this area scrolls; header and footer stay in place */}
      <main
        ref={contentRef}
        className="scrollbar-brand min-h-0 flex-1 overflow-y-auto overscroll-contain"
      >
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
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
