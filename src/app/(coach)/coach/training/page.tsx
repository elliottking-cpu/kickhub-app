import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TrainingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Training Sessions</h1>
          <p className="text-gray-600 mt-1">Manage training schedules and drills</p>
        </div>
        <Button asChild>
          <Link href="/coach/training/create">Schedule Training</Link>
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium">Training Schedule</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-500">Training management interface will be implemented here</p>
        </div>
      </div>
    </div>
  );
}
