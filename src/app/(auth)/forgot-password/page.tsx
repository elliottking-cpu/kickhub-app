import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Reset Password</h1>
        <p className="text-gray-600 mt-2">Enter your email to receive a password reset link</p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your email address"
          />
        </div>

        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Remember your password?{" "}
          <Link href="/login" className="text-green-600 hover:text-green-500 font-medium">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
