import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";

const initialUser = {
  email: null,
  uid: null,
  loadingUser: true,
};

const AuthContext = createContext(initialUser);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const router = useRouter();

  useEffect(() => {
    // Listen for auth state change once the page loads
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // If user is logged in
      if (user) {
        // Set user in state
        setUser({
          email: user.email,
          uid: user.uid,
          loadingUser: false,
        });
      } else {
        setUser({ ...initialUser, loadingUser: false });
      }
    });

    // console.log(user);

    return () => unsubscribe();
  }, [router]); // Listen for changes to currently logged in user & router

  return (
    // Provide user data
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
