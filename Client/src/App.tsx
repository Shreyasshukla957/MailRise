import "./App.css";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Login } from "./components/Login";
import { Landing } from "./components/Landing";
import { Sidebar } from "./pages/Sidebar";
import { Workspace } from "./pages/Workspace";
import { Dashboard } from "./pages/Dashboard";
import { Inbox } from "./pages/Inbox";
import { ProtectedRoute } from "./components/protectedRoute";
import type { AppDispatch } from "./store/store";
import { fetchUser } from "./features/authSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="bg-screen flex min-h-screen w-full justify-center">
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Sidebar />}>
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
