import {
  SignedIn,
  SignedOut
} from "@clerk/clerk-react";
import DashboardLayout from "@layouts/dashboard.tsx";
import {Navigate, Outlet} from "react-router";

export default function RootLayout() {
  return (
      <div className="h-screen w-screen">
        <SignedOut>
          <Navigate to="/auth" replace/>
          <Outlet/>
        </SignedOut>
        <SignedIn>
          <DashboardLayout/>
        </SignedIn>
      </div>
  );
}
