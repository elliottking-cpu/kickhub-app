import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-full"></div>
          <span className="text-2xl font-bold text-gray-900">KickHub</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link href="/register/coach">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Grassroots Football
          <span className="text-green-600 block">Management Made Simple</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Complete platform for managing teams, players, matches, and training. 
          Built for coaches, loved by parents, engaging for players.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register/coach">
            <Button size="lg" className="w-full sm:w-auto">
              Start Managing Your Team
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚽</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Match Management</h3>
            <p className="text-gray-600">Live stats, team selection, and match day coordination</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Engagement</h3>
            <p className="text-gray-600">Parent communication, volunteer coordination, and player development</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Player Gamification</h3>
            <p className="text-gray-600">Character development, achievements, and progress tracking</p>
          </div>
        </div>
      </main>
    </div>
  );
}