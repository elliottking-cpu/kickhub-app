import Link from "next/link";

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/player/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">KickHub</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/player/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
              <Link href="/player/stats" className="text-gray-600 hover:text-gray-900">Stats</Link>
              <Link href="/player/achievements" className="text-gray-600 hover:text-gray-900">Achievements</Link>
              <Link href="/player/store" className="text-gray-600 hover:text-gray-900">Store</Link>
            </div>
            <Link href="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
