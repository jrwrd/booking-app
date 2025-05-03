import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

//Header/Footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Routes
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import Customers from "./pages/Customers";
import CustomerProfile from "./pages/CustomerProfile.jsx"

//Mock Service Worker
async function deferRender() {
  const { worker } = await import("./mocks/browser.js");
  return worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <BrowserRouter>
        <Navbar
          user={{ name: "Jacob", isLoggedIn: "true", hasSubscription: "true" }}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/staff" element={<Staff/>}/> */}
          <Route path="/customers">
            <Route index element={<Customers />} />
            <Route path=":id" element={<CustomerProfile />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
});
