import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { DataProvider } from "../components/context/DataContext";

function RootLayout() {
  return (
    <DataProvider>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </DataProvider>
  );
}

export default RootLayout;
