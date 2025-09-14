import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinancesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Finances</h1>
          <p className="text-gray-600 mt-1">Manage subs, expenses, and team funds</p>
        </div>
        <Button asChild>
          <Link href="/coach/finances/subs">Collect Subs</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Team Fund Balance</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">£450.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Outstanding Subs</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">£75.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">This Month</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">£320.00</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium">Financial Overview</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-500">Financial management interface will be implemented here</p>
        </div>
      </div>
    </div>
  );
}
