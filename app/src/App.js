import React, { useEffect } from "react";
import Quiz from "./containers/Quiz";
import Results from "./containers/Results";
import { Routes, Route } from "react-router-dom";
import { Balloon } from "./components/Balloon/Balloon";
import { NavBar } from "./components/NavBar/NavBar";

const App = () => {
  useEffect(() => {
    localStorage.setItem("bearerToken", "example");
  });

  return (
    <>
      <div className="slide-background">
        <Balloon size={8} placeX={{ left: "60px" }} placeY={{ top: "0px" }} />
        <Balloon
          size={2}
          placeX={{ left: "-42px" }}
          placeY={{ top: "200px" }}
        />
        <Balloon
          size={3}
          placeX={{ left: "-50px" }}
          placeY={{ top: "250px" }}
        />

        <Balloon
          size={10}
          placeX={{ left: "-20px" }}
          placeY={{ bottom: "-30px" }}
        />

        <Balloon
          size={3}
          placeX={{ right: "60px" }}
          placeY={{ top: "-20px" }}
        />
        <Balloon
          size={12}
          placeX={{ right: "10px" }}
          placeY={{ bottom: "300px" }}
        />
        <Balloon
          size={6}
          placeX={{ right: "-20px" }}
          placeY={{ bottom: "100px" }}
        />

        <div className="container main-container">
          <NavBar />
          <div className="container content-container">
            <Routes>
              <Route path="/" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
