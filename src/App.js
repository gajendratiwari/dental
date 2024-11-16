import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import RootLayout from "./pages/Root";
import Appointment from "./pages/AppointmentScheduling";
import Error from "./pages/Error";

import ServiceDetail from "./components/Services/SreviceDetails";

import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      {
        path: "/services/:serviceId", // Dynamic route for service detail page
        element: <ServiceDetail />,
      },
      { path: "/appointments", element: <Appointment /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
