import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Bell, Trash2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const allNotifications = Array.from({ length: 30 }).map((_, i) => ({
  id: Math.floor(Math.random() * 1000),
  title:
    i % 3 === 0
      ? "New message in #react-room"
      : i % 3 === 1
      ? "You were banned by admin"
      : "You joined #project-room",
  description:
    i % 3 === 0
      ? "John: Check the updates"
      : i % 3 === 1
      ? "Admin removed your access"
      : "Welcome aboard!",
  time: `${i + 1} min ago`,
  type: i % 3 === 0 ? "message" : i % 3 === 1 ? "ban" : "joined",
  isRead: false,
}));

const BATCH_SIZE = 10;

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observer = useRef();
  const lastNoteRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 500));
      const start = (page - 1) * BATCH_SIZE;
      const end = start + BATCH_SIZE;
      const nextBatch = allNotifications.slice(start, end);
      setNotifications((prev) => {
        const existingIds = new Set(prev.map((n) => n.id));
        const newItems = nextBatch.filter((n) => !existingIds.has(n.id));
        return [...prev, ...newItems];
      });
      setHasMore(end < allNotifications.length);
      setLoading(false);
    };
    fetchNotifications();
  }, [page]);

  const handleMarkAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, isRead: true }));
    setNotifications(updated);
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getDotColor = (type) => {
    switch (type) {
      case "message":
        return "bg-blue-500";
      case "ban":
        return "bg-red-500";
      case "joined":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#0F1923]">
      <div className="p-3 pt-4 flex justify-between fixed top-0 w-full dark:bg-[#0F1923] z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
          <h1 className="text-xl font-bold flex gap-2 items-center">
            <Bell size={20} /> Notifications
          </h1>
        </div>
      </div>

      <main className="px-3 py-16 space-y-6">
        <div className="flex gap-2">
          <Button onClick={handleMarkAllAsRead}>Mark all as read</Button>
          <Button variant="destructive" onClick={handleClearAll}>
            Clear All
          </Button>
        </div>
        {notifications.map((note, index) => {
          const isLast = index === notifications.length - 1;
          return (
            <AnimatePresence>
              <Card
                key={note.id}
                ref={isLast ? lastNoteRef : null}
                className={`border p-3 relative ${
                  note.isRead ? "opacity-50" : "border-muted"
                }`}
              >
                <CardContent className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        {!note.isRead && (
                          <span
                            className={`h-2 w-2 rounded-full ${getDotColor(
                              note.type
                            )}`}
                          ></span>
                        )}
                        <span className="text-base font-semibold">
                          {note.title}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {note.description}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {note.time}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(note.id)}
                      className="text-muted-foreground hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </AnimatePresence>
          );
        })}

        {loading && (
          <div className="flex justify-center py-6">
            <Loader2 className="animate-spin h-5 w-5 text-muted-foreground" />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Notifications;
