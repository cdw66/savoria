import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
// import Loading from "./Loading";
import { auth } from "../config/firebase";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  const currentUser = auth.currentUser;
  console.log("user", user);

  //   Redirect to login page if user is not logged in & context is not loading
  useEffect(() => {
    if (!currentUser && !user.loadingUser) {
      router.push("/");
    }
  }, [router, user]);

  //   Only show content once user is loaded
  return <div>{user.uid ? children : <p>Loading...</p>}</div>;
};

export default ProtectedRoute;
