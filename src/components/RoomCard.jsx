import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const handleDelete = (room_id) => {
  toast.success("Room deleted successfully");
};

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  return (
    <Card className="mb-4 md:w-[24vw]">
      <CardHeader>
        <CardTitle className="text-lg">{room.name}</CardTitle>
        <CardDescription className="mt-1">
          A discussion space for web developers to share ideas and collaborate
          on projects.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <p className="text-sm text-gray-400">
            <span className="font-medium text-gray-300 ">Members:</span>{" "}
            {room.members?.length || 0}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-medium text-gray-300">Created by:</span> John
            Doe
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-blue-900/50 text-blue-300">
              Web Dev
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-300">
              Active
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              <span className="font-medium text-gray-300">Created on :</span>
              <span>20/10/2025</span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-700 pt-4">
        {room.created_by === "me" ? (
          <div className="flex gap-2">
            <Button className="cursor-pointer">Start Chatting</Button>
            {/* delete button  and dialog*/}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="cursor-pointer" variant="destructive">
                  <Trash2 className="w-4 h-4" />
                  Delete Room
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your room and remove data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ) : (
          <Button className="w-full cursor-pointer"  onClick={() => navigate("/room/:room_id")}>Join Room</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
