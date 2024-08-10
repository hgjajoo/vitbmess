import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Contribute from "./components/Contribute";
import Homepage from "./components/Home";

const AppRoutes = () => {
  const location = useLocation();

  const getFooterProps = () => {
    switch (location.pathname) {
      case "/mayuri":
        return { developedBy: "HGJ", maintainedBy: "Someone" };
      case "/crcl":
        return { developedBy: "HGJ", maintainedBy: "Someone" };
      case "/ab":
        return { developedBy: "HGJ", maintainedBy: "Someone" };
      default:
        return { developedBy: "HGJ", maintainedBy: "Someone" };
    }
  };

  const footerProps = getFooterProps();

  return (
    <>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/mayuri"
            element={
              <MainContent menuFile="mayuri-menu.json" messName="Mayuri" />
            }
          />
          <Route
            path="/crcl"
            element={<MainContent menuFile="crcl-menu.json" messName="CRCL" />}
          />
          <Route
            path="/ab"
            element={<MainContent menuFile="ab-menu.json" messName="AB" />}
          />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-zinc-900 min-h-screen flex flex-col">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
