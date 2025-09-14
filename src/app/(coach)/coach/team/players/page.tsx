import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PlayersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Players</h1>
          <p className="text-gray-600 mt-1">Manage your team roster and player information</p>
        </div>
        <Button>Add Player</Button>
      </div>

      {/* Player List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Current Squad (16 players)</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {/* Player Row */}
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-600">JS</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Jamie Smith</p>
                <p className="text-sm text-gray-500">Midfielder • #10</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Available
              </span>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
          </div>

          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-600">SJ</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Forward • #9</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Injured
              </span>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
          </div>

          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-600">MB</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Mike Brown</p>
                <p className="text-sm text-gray-500">Defender • #5</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Unavailable
              </span>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="outline" className="h-16" asChild>
          <Link href="/coach/team/players/invite">
            <div className="text-center">
              <span className="block text-lg mb-1">📧</span>
              Invite Parents
            </div>
          </Link>
        </Button>
        
        <Button variant="outline" className="h-16" asChild>
          <Link href="/coach/team/players/availability">
            <div className="text-center">
              <span className="block text-lg mb-1">📅</span>
              Check Availability
            </div>
          </Link>
        </Button>
        
        <Button variant="outline" className="h-16" asChild>
          <Link href="/coach/team/players/stats">
            <div className="text-center">
              <span className="block text-lg mb-1">📊</span>
              Player Stats
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
