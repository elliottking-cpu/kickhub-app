import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MatchesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Matches</h1>
          <p className="text-gray-600 mt-1">Manage your team's match schedule</p>
        </div>
        <Button asChild>
          <Link href="/coach/matches/create">Schedule Match</Link>
        </Button>
      </div>

      {/* Match List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium">Upcoming Matches</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-500">Match management interface will be implemented here</p>
        </div>
      </div>
    </div>
  );
}
