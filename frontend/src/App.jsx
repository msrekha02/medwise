import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthPage from "./pages/Login";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import MedicineDetail from "./pages/MedicineDetail"
// import PrescriptionScanner from "./pages/PrescriptionScanner";


const hideNavbarRoutes = ["/login", "/chat"];

function App() {
  const location = useLocation();
  return (
    <>
      {/* {location.pathname !== "/login" && <Navbar />} */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/medicine/:slug" element={<MedicineDetail />} />
        {/* <Route path="/scanner" element={<PrescriptionScanner />} /> */}
      </Routes>
    </>
  );
}

export default App;
