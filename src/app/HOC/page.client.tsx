import { useRouter } from "next/router";
import React from "react";

// Higher-Order Component
function withAuth(WrappedComponent = () => <></>) {
  return function AuthComponent(props = {}) {
    const route = useRouter();
    const isLoggedIn = Boolean(localStorage.getItem("token"));

    React.useEffect(() => {
      if (!isLoggedIn) {
        route.push("/login");
      }
    }, [isLoggedIn, route]);

    if (!isLoggedIn) return null; // hoặc loading spinner
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;

function Dashboard() {
  return <h1>Trang Dashboard</h1>;
}

function Profile() {
  return <h1>Trang Profile</h1>;
}

// Bọc component
export const ProtectedDashboard = withAuth(Dashboard);
export const ProtectedProfile = withAuth(Profile);
