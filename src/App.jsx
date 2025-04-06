import ChatRoom from "@/pages/ChatRoom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "@/components/Header";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-100">
      <div>
        <Header/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatRoom />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
