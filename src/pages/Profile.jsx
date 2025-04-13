import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProfileDetails } from "@/components/ProfileDetails";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ArrowLeft, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full dark:bg-[#0F1923]">
      <Header />
      <div className="p-3 pt-4 flex gap-3 items-center fixed top-0 w-full dark:bg-[#0F1923] z-50">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-bold flex gap-2 items-center">
          <User /> Profile
        </h1>
      </div>
      <main className="max-w-3xl mx-auto px-4 py-16 space-y-6">
        <ProfileHeader />
        <ProfileDetails />
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Profile;
