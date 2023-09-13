import ProtectedRoute from "@/components/ProtectedRoute";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { useDisclosure } from "@mantine/hooks";

import { useForm } from "@mantine/form";
import AdminReviews from "@/components/AdminReviews";
import AdminMenu from "@/components/AdminMenu";
import AdminStaff from "@/components/AdminStaff";
import AdminGallery from "@/components/AdminGallery";
import { signOut } from "firebase/auth";

const Admin = () => {
  const logout = async () => {
    await signOut(auth);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const staffSnap = await getDocs(collection(db, "staff"));
  //     const staffData = staffSnap.docs.map((doc) => ({
  //       ...doc.data(),
  //     }));
  //     setStaffData(staffData);

  //     const menuSnap = await getDocs(collection(db, "menu-items"));
  //     const menuData = menuSnap.docs.map((doc) => ({
  //       ...doc.data(),
  //     }));
  //     setMenuData(menuData);

  //     // const
  //     const reviewsSnap = await getDocs(collection(db, "reviews"));
  //     const reviewsData = reviewsSnap.docs.map((doc) => ({
  //       ...doc.data(),
  //     }));

  //     setReviews(reviewsData);
  //   };

  //   fetchData();
  // }, []);

  return (
    <ProtectedRoute>
      <div className="max-w-[800px] mx-auto">
        <div className="flex my-4">
          <span
            className="text-tan underline font-lato inline-block cursor-pointer px-[24px]"
            onClick={logout}
          >
            Sign Out
          </span>
        </div>
        <h1 className="text-center text-[48px] font-eb-garamond">
          Admin Panel
        </h1>
        <p className="font-lato text-[18px] text-center">
          Manage current & featured menu items, published reviews, and staff
          members.
        </p>

        <div>
          <AdminMenu />
          <AdminReviews />
          <AdminStaff />
          <AdminGallery />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Admin;
