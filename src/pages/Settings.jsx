import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full">
      <Header />
      <div className="p-3 flex gap-3 items-center mt-1.5">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
      </div>
      <main className="p-2">
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Settings;
