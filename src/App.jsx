import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/loader";
import Header from "./components/header";
import Welcome from "./pages/welcome";
import Workspace from "./pages/workspace";
import HowToUse from "./pages/howToUse";
import Complete from "./pages/complete";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/workspace" element={<Workspace />} />
            <Route exact path="/howtouse" element={<HowToUse />} />
            <Route exact path="/complete" element={<Complete />} />
          </Routes>
        </>
      )}
    </div>
  );
}
const WithRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
};
export default WithRouter;
