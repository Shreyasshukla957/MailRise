import { Navbar } from "./components/navbar";
import "./App.css";
import { Routes, Route } from "react-router";
import { Login } from "./components/Login";
import { Landing } from "./components/Landing";
import { Sidebar } from "./pages/Sidebar";
import { Workspace } from "./pages/Workspace";
import { Dashboard } from "./pages/Dashboard";
import { Inbox } from "./pages/Inbox";

function App() {
  return (
    <div className="bg-screen flex min-h-screen w-full justify-center">
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route element={<Sidebar />}>
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
