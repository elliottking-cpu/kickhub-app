import Link from "next/link";

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Coach Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/coach/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">KickHub</span>
            </Link>

            {/* Main Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/coach/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/coach/team/players" className="text-gray-600 hover:text-gray-900">
                Team
              </Link>
              <Link href="/coach/matches" className="text-gray-600 hover:text-gray-900">
                Matches
              </Link>
              <Link href="/coach/training" className="text-gray-600 hover:text-gray-900">
                Training
              </Link>
              <Link href="/coach/finances" className="text-gray-600 hover:text-gray-900">
                Finances
              </Link>
              <Link href="/coach/messages" className="text-gray-600 hover:text-gray-900">
                Messages
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Link href="/notifications" className="text-gray-600 hover:text-gray-900">
                🔔
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
