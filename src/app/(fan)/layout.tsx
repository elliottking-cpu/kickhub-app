import Link from "next/link";

export default function FanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/fan/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">KickHub</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/fan/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
              <Link href="/fan/matches" className="text-gray-600 hover:text-gray-900">Matches</Link>
              <Link href="/fan/store" className="text-gray-600 hover:text-gray-900">Store</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
