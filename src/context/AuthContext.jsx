import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
// import { db } from "../config/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import Loading from "../components/Loading";

const initialUser = {
  email: null,
  uid: null,
  loadingUser: true,
};

const AuthContext = createContext(initialUser);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  //   console.log(user);
  //   const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    // Listen for auth state change once the page loads
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      //   if (user) {
      //     setUser(user);
      //   } else {
      //     setUser(null);
      //   }
      //   setLoading(false);
      // If user is logged in
      if (user) {
        //     try {
        //       // Fetch user data from firebase db
        //       const docRef = doc(db, "users", user.uid);
        //       const docSnap = await getDoc(docRef);
        //       // If user snapshot exists
        //       if (docSnap.exists()) {
        //         const docData = docSnap.data(); // Extract data from snapshot
        //         // Set user in state
        setUser({
          email: user.email,
          uid: user.uid,
          loadingUser: false,
          // ...docData,
        });
      } else {
        setUser({ ...initialUser, loadingUser: false });
      }
      //     } catch (err) {
      //       console.log(err);
      //     }
      //   } else {
      //     // Reset user in context on logout
      //     // setUser(initialUser);
      //     setUser({ ...initialUser, loadingUser: false });
      //   }
    });

    console.log(user);

    return () => unsubscribe();
  }, [router]); // Listen for changes to currently logged in user & router

  return (
    // Provide user data
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
