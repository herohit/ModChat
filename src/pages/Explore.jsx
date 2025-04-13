import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RoomCard from "@/components/RoomCard";
import { RoomFilters } from "@/components/RoomFilters";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { debounce } from "lodash";
import { ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "All";
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchRooms, setSearchRooms] = useState("");

  const rooms = [
    {
      id: 1,
      name: "Dev Hub",
      popularity: 120,
      isJoined: true,
      createdRecently: true,
      members:[123,123,122,333]
    },
    {
      id: 2,
      name: "Study Group",
      popularity: 80,
      isJoined: false,
      createdRecently: false,
    },
    {
      id: 3,
      name: "React Lovers",
      popularity: 300,
      isJoined: true,
      createdRecently: false,
    },
    {
      id: 4,
      name: "Music Chill",
      popularity: 45,
      isJoined: false,
      createdRecently: true,
    },
  ];

  useEffect(() => {
    let filteredRooms = [...rooms];

    switch (filter.toLowerCase()) {
      case "popular":
        filteredRooms = filteredRooms.filter((r) => r.popularity > 100);
        break;
      case "joined":
        filteredRooms = filteredRooms.filter((r) => r.isJoined);
        break;
      case "new":
        filteredRooms = filteredRooms.filter((r) => r.createdRecently);
        break;
      default:
        break;
    }

    // search logic
    if (searchRooms) {
      filteredRooms = filteredRooms.filter((room) =>
        room.name.toLocaleLowerCase().includes(searchRooms)
      );
    }

    setFilteredRooms(filteredRooms);
  }, [filter, searchRooms]);

  const handleSearch = debounce((value) => {
    setSearchRooms(value);
  }, 500);

  return (
    <div className="min-h-full">
      <Header />
      {/* back icon */}
      <div className="p-3 flex gap-3 items-center fixed top-0 w-full dark:bg-[#0F1923] z-50">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <Input
          placeholder="Search for rooms.."
          onChange={(e) => handleSearch(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <main className="p-2 py-16">
        {/* filter buttons */}
        <div className="mb-4 w-full overflow-x-scroll no-scrollbar">
          <RoomFilters />
        </div>

        {/* cards */}
        <div className="md:flex md:gap-2 md:flex-wrap">
          <AnimatePresence>
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <motion.div
                  layout='position'
                  key={room.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <RoomCard room={room} />
                </motion.div>
              ))
            ) : (
              <motion.p
                key={"no-rooms"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >No Rooms. Try with different name... </motion.p>
            )}
          </AnimatePresence>
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default Explore;
