import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const RoomCard = ({room}) => {
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
            <span className="font-medium text-gray-300 ">Members:</span> {room.members?.length || 0}
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
        <Button className="w-full cursor-pointer">Join Room</Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
