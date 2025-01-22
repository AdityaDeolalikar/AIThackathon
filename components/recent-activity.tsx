import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    action: "Updated inventory for Product A",
    timestamp: "2 hours ago",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
    action: "Optimized delivery route for Zone B",
    timestamp: "4 hours ago",
  },
  {
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    action: "Generated monthly sustainability report",
    timestamp: "Yesterday at 3:45 PM",
  },
  {
    name: "Liam Johnson",
    email: "liam.johnson@example.com",
    action: "Reviewed AI-generated demand forecast",
    timestamp: "Yesterday at 1:30 PM",
  },
  {
    name: "Ava Brown",
    email: "ava.brown@example.com",
    action: "Approved new supplier for Product C",
    timestamp: "2 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${activity.email}`} alt={activity.name} />
            <AvatarFallback>
              {activity.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

