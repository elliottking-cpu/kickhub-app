import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Family Dashboard</h1>
          <p className="text-gray-600 mt-1">Stay connected with your children's football journey</p>
        </div>
      </div>

      {/* Children Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600">JS</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Jamie Smith</h3>
                <p className="text-sm text-gray-600">Lions FC U12s • Midfielder</p>
              </div>
            </div>
            <Button size="sm" variant="outline" asChild>
              <Link href="/parent/children/1">View</Link>
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Next Match:</span>
              <span className="font-medium">Saturday 10:00 AM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Availability:</span>
              <span className="text-green-600 font-medium">Confirmed</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Outstanding Subs:</span>
              <span className="text-red-600 font-medium">£25.00</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-purple-600">ES</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Emma Smith</h3>
                <p className="text-sm text-gray-600">Eagles FC U10s • Forward</p>
              </div>
            </div>
            <Button size="sm" variant="outline" asChild>
              <Link href="/parent/children/2">View</Link>
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Next Training:</span>
              <span className="font-medium">Wednesday 6:00 PM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Availability:</span>
              <span className="text-yellow-600 font-medium">Pending</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Outstanding Subs:</span>
              <span className="text-green-600 font-medium">Paid</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button asChild className="h-20 flex-col">
          <Link href="/parent/schedule">
            <span className="text-2xl mb-2">📅</span>
            View Schedule
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-20 flex-col">
          <Link href="/parent/payments">
            <span className="text-2xl mb-2">💳</span>
            Make Payment
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-20 flex-col">
          <Link href="/parent/volunteers">
            <span className="text-2xl mb-2">🙋</span>
            Volunteer
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-20 flex-col">
          <Link href="/parent/messages">
            <span className="text-2xl mb-2">💬</span>
            Messages
          </Link>
        </Button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Updates</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-600">⚽</span>
            <p className="text-sm text-gray-700">
              <strong>Jamie</strong> scored 2 goals in last Saturday's match vs Eagles FC
            </p>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <span className="text-green-600">🏆</span>
            <p className="text-sm text-gray-700">
              <strong>Emma</strong> earned "Team Player" achievement for excellent passing
            </p>
            <span className="text-xs text-gray-500">1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
