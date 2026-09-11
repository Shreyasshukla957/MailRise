import { Navigate, Outlet } from "react-router";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) {
    return (
      <div className="bg-screen flex min-h-screen items-center justify-center">
        <Loader2 className="text-subtle animate-spin" size={32} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
