import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Franchise from "./Pages/Franchise";
import ContactUs from "./Pages/ContactUs";
import BookAppointment from "./Pages/BookAppointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/franchise",
    element: <Franchise />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/book-appointment",
    element: <BookAppointment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);