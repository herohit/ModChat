import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Cog, LogOut, Trash2 } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    mentions: true,
    roomUpdates: true,
    appUpdates: false,
  });

  const handleLogout = () => {
    toast.success("Logout Successful ");
    console.log("User logged out");
    // your logout logic here
  };

  const handleDeleteAccount = () => {
    // optional: confirm before deleting
    console.log("Account deleted");
  };

  return (
    <div className="min-h-screen dark:bg-[#0F1923]">
      <Header />
      {/* back icon */}
      <div className="p-3 pt-4 flex gap-3 items-center fixed top-0 w-full dark:bg-[#0F1923] z-50">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-bold flex gap-2 items-center">
          <Cog size={20}/> Settings
        </h1>
      </div>

      
      <main className="px-3 py-16 space-y-6 ">
        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span>Dark Mode</span>
            <ThemeToggle />
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="text-sm text-muted-foreground">Email</span>
              <div className="text-base font-medium">john@example.com</div>
            </div>
            <div className="space-x-2">
              <span className="text-sm text-muted-foreground">Password</span>
              <Button size="sm" variant="outline">
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Mentions</span>
              <Switch
                checked={notifications.mentions}
                onCheckedChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    mentions: !prev.mentions,
                  }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Room Updates</span>
              <Switch
                checked={notifications.roomUpdates}
                onCheckedChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    roomUpdates: !prev.roomUpdates,
                  }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span>App Updates</span>
              <Switch
                checked={notifications.appUpdates}
                onCheckedChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    appUpdates: !prev.appUpdates,
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Profile Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Name</span>
              <span className="font-medium">John Doe</span>
            </div>
            <div className="flex justify-between">
              <span>Joined</span>
              <span className="font-medium">Jan 1, 2024</span>
            </div>
            <div className="flex justify-between">
              <span>Rooms Created</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span>Rooms Joined</span>
              <span className="font-medium">10</span>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card>
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full cursor-pointer flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
            <Button
              onClick={handleDeleteAccount}
              variant="outline"
              className="w-full cursor-pointer flex items-center gap-2 text-red-600 border-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 " />
              Delete Account
            </Button>
          </CardContent>
        </Card>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Settings;
