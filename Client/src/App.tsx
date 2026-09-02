import { Navbar } from "./components/navbar";
import { Container } from "./components/container";
import { Hero } from "./components/hero";
import "./App.css";
import { cn } from "./lib/utils";
import { Svgworks } from "./components/svgworks";
import { Works } from "./components/Works";
import { UNDERSTAND } from "./components/svgworks";
import { Feature } from "./components/feature";
import { Routes, Route } from "react-router";
import { Login } from "./components/Login";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div className="bg-screen flex min-h-screen w-full min-w-screen justify-center">
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;


