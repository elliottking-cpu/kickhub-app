import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CoachDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Coach Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening with your team.</p>
        </div>
        <Button asChild>
          <Link href="/coach/matches/create">Quick Match</Link>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-2xl">⚽</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Next Match</p>
              <p className="text-2xl font-bold text-gray-900">Saturday</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Team Size</p>
              <p className="text-2xl font-bold text-gray-900">16</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Wins</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <span className="text-2xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Team Fund</p>
              <p className="text-2xl font-bold text-gray-900">£450</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Matches */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Matches</h2>
            <Link href="/coach/matches" className="text-green-600 hover:text-green-500 text-sm">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">vs Eagles FC</p>
                <p className="text-sm text-gray-600">Saturday, 10:00 AM</p>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/coach/matches/1">Manage</Link>
              </Button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">vs Rovers United</p>
                <p className="text-sm text-gray-600">Next Wednesday, 6:00 PM</p>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/coach/matches/2">Manage</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Team Actions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button asChild className="h-20 flex-col">
              <Link href="/coach/team/players">
                <span className="text-2xl mb-2">👥</span>
                Manage Players
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <Link href="/coach/training/create">
                <span className="text-2xl mb-2">🏃</span>
                Schedule Training
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <Link href="/coach/finances/subs">
                <span className="text-2xl mb-2">💳</span>
                Collect Subs
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <Link href="/coach/messages">
                <span className="text-2xl mb-2">💬</span>
                Team Messages
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Messages & Notifications */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-600">ℹ️</span>
            <p className="text-sm text-gray-700">
              <strong>Sarah's Mum</strong> confirmed availability for Saturday's match
            </p>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <span className="text-green-600">✅</span>
            <p className="text-sm text-gray-700">
              Monthly subs payment received from <strong>3 parents</strong>
            </p>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <span className="text-yellow-600">⚠️</span>
            <p className="text-sm text-gray-700">
              <strong>2 parents</strong> haven't confirmed availability for Saturday
            </p>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
