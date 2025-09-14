import { Button } from "@/components/ui/button";

export default function PlayerDashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-3xl">⚽</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Jamie!</h1>
        <p className="text-gray-600 mt-1">Level 12 Midfielder • Lions FC U12s</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl mb-2">⚽</div>
          <div className="text-2xl font-bold text-green-600">8</div>
          <div className="text-sm text-gray-600">Goals</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-sm text-gray-600">Assists</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-purple-600">5</div>
          <div className="text-sm text-gray-600">Achievements</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl mb-2">💰</div>
          <div className="text-2xl font-bold text-yellow-600">150</div>
          <div className="text-sm text-gray-600">Coins</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Player gamification interface will be implemented here</h2>
        <p className="text-gray-600">Character development, achievements, and progress tracking</p>
      </div>
    </div>
  );
}
