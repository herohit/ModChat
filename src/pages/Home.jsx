import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const user = [
    {
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Nash",
      text: "I just want to share that I love the new upadtes ,especially  the new featue where you can see who is speaking . It's very helpful for me",
    },
    {
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Caspain",
      text: "I have a question about the mute feature. If I mute someone, will they still be able to see my messages?",
    },
    {
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ella",
      text: "Yeah , the update is great",
    },
    {
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Kai",
      text: "They want be notified when you mute them",
    },
  ];
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full">
      <Header />
      {/* header for mobile */}
      <header className="flex justify-between items-center px-2 py-6 mb-2 h-10 bg-white dark:bg-[#0e141b]  dark:shadow-none md:hidden">
        <div className="flex items-center justify-between  w-full">
          <div className="flex items-center space-x-2">
            <h2 className=" text-sm font-semibold tracking-tight">ModChat</h2>
            <MessageCircle size={15} />
          </div>
          <Link to={'/notification'} className="rounded-full mr-3">
            <button class="relative  duration-300 p-1 text-blue-100 rounded-full mt-2">
              <Bell size={25} />
              <span class="absolute bg-pink-500 text-blue-100 px-1 py-1 text-xs font-bold rounded-full -top-1 -right-2">
                9+
              </span>
            </button>
          </Link>
        </div>
      </header>

      {/* main  */}
      <main className="px-2">
        <div className=" h-5 flex items-center justify-center overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.h5
              key={showFirst ? "welcome" : "chatting"}
              initial={{ y: showFirst ? 5 : -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: showFirst ? 5 : -5, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute text-center text-slate-300 text-base"
            >
              {showFirst ? "Welcome back, John!" : "Let's get chatting."}
            </motion.h5>
          </AnimatePresence>
        </div>

        <div className="bg-blue-400 "></div>
        <div>
          {/* name */}
          <div className=""></div>
        </div>

        {/* footer links */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
