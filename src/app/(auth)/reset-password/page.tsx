import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Create New Password</h1>
        <p className="text-gray-600 mt-2">Enter your new password below</p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your new password"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Confirm your new password"
          />
        </div>

        <Button type="submit" className="w-full">
          Update Password
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          <Link href="/login" className="text-green-600 hover:text-green-500 font-medium">
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
