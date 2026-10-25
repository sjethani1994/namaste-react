import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const contentRef = useRef(null);
  const { pathname } = useLocation();

  // <main> stays mounted across routes, so reset its scroll on every page change
  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [pathname]);

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sumit Jethani",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <div className="flex h-dvh flex-col">
        <Header />
        <main
          ref={contentRef}
          className="scrollbar-brand min-h-0 flex-1 overflow-y-auto overscroll-contain"
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
