import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Mail, Users, Plus, Smile } from "lucide-react"

export function ProfileDetails() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joined: "January 2024",
    roomsCreated: 5,
    roomsJoined: 12,
    
  };
  return (
    <>
      <Card className='w-8/12 m-auto'>
        <CardHeader>
          <CardTitle className="text-lg">Account Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <Detail
            icon={<Plus className="w-4 h-4" />}
            label="Rooms Created"
            value={user.roomsCreated}
          />
          <Detail
            icon={<Users className="w-4 h-4" />}
            label="Rooms Joined"
            value={user.roomsJoined}
          />
          <Detail
            icon={<CalendarDays className="w-4 h-4" />}
            label="Joined"
            value={user.joined}
          />
          <Detail
            icon={<Mail className="w-4 h-4" />}
            label="Email"
            value={user.email}
          />
        </CardContent>
      </Card>
    </>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <p className="text-foreground font-medium">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
