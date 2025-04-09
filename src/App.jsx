import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Header from "@/components/Header";
import ChatRoom from "@/pages/ChatRoom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Toaster position="top-right" closeButton />

      <div className="h-[90vh] lg:min-h-screen dark:bg-[#0F1923] bg-gray-100 overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ChatRoom />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
