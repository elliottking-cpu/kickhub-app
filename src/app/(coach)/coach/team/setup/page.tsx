import { Button } from "@/components/ui/button";

export default function TeamSetupPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Set Up Your Team</h1>
        <p className="text-gray-600 mt-2">Let's get your team configured and ready to go</p>
      </div>

      <form className="space-y-6">
        {/* Team Basic Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Team Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
                Team Name
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Lions FC U12s"
              />
            </div>

            <div>
              <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">
                Age Group
              </label>
              <select
                id="ageGroup"
                name="ageGroup"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select age group</option>
                <option value="u7">Under 7s</option>
                <option value="u8">Under 8s</option>
                <option value="u9">Under 9s</option>
                <option value="u10">Under 10s</option>
                <option value="u11">Under 11s</option>
                <option value="u12">Under 12s</option>
                <option value="u13">Under 13s</option>
                <option value="u14">Under 14s</option>
                <option value="u15">Under 15s</option>
                <option value="u16">Under 16s</option>
              </select>
            </div>

            <div>
              <label htmlFor="fieldSize" className="block text-sm font-medium text-gray-700 mb-1">
                Field Size
              </label>
              <select
                id="fieldSize"
                name="fieldSize"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select field size</option>
                <option value="3v3">3v3</option>
                <option value="5v5">5v5</option>
                <option value="7v7">7v7</option>
                <option value="9v9">9v9</option>
                <option value="11v11">11v11</option>
              </select>
            </div>

            <div>
              <label htmlFor="season" className="block text-sm font-medium text-gray-700 mb-1">
                Season
              </label>
              <input
                type="text"
                id="season"
                name="season"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="2024/25"
              />
            </div>
          </div>
        </div>

        {/* League Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">League Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="leagueName" className="block text-sm font-medium text-gray-700 mb-1">
                League Name
              </label>
              <input
                type="text"
                id="leagueName"
                name="leagueName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Local Youth League"
              />
            </div>

            <div>
              <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
                Division
              </label>
              <input
                type="text"
                id="division"
                name="division"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Division 1"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="headersAllowed"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Headers are allowed in this league</span>
            </label>
          </div>
        </div>

        {/* Team Colors */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Team Colors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="homeColor" className="block text-sm font-medium text-gray-700 mb-1">
                Home Kit Color
              </label>
              <input
                type="color"
                id="homeColor"
                name="homeColor"
                className="w-full h-10 border border-gray-300 rounded-md"
                defaultValue="#22c55e"
              />
            </div>

            <div>
              <label htmlFor="awayColor" className="block text-sm font-medium text-gray-700 mb-1">
                Away Kit Color
              </label>
              <input
                type="color"
                id="awayColor"
                name="awayColor"
                className="w-full h-10 border border-gray-300 rounded-md"
                defaultValue="#3b82f6"
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Complete Team Setup
        </Button>
      </form>
    </div>
  );
}
