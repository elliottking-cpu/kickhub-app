// Role-Based Access Control Matrix
// Based on KickHub-Build-Guide.md Step 2.3

export type UserRole = 
  | 'coach' 
  | 'assistant_coach' 
  | 'parent' 
  | 'player' 
  | 'fan' 
  | 'referee' 
  | 'club_official'
  | 'admin' 
  | 'super_admin'

export type RoutePattern = string

// Page Access Control Matrix
export const pageAccess: Record<RoutePattern, UserRole[]> = {
  // Coach routes
  '/coach/*': ['coach', 'assistant_coach'],
  
  // Parent routes - Coaches inherit parent permissions
  '/parent/*': ['parent', 'coach', 'assistant_coach'],
  
  // Player routes - Parents and coaches can access player pages
  '/player/*': ['player', 'parent', 'coach', 'assistant_coach'],
  
  // Fan routes
  '/fan/*': ['fan'],
  
  // Referee routes
  '/referee/*': ['referee'],
  
  // Club routes (Future Ready)
  '/club/*': ['club_official'],
  
  // Shared pages - All authenticated users
  '/profile': ['coach', 'assistant_coach', 'parent', 'player', 'fan', 'referee', 'club_official'],
  '/settings': ['coach', 'assistant_coach', 'parent', 'player', 'fan', 'referee', 'club_official'],
  '/notifications': ['coach', 'assistant_coach', 'parent', 'player', 'fan', 'referee', 'club_official'],
  '/help': ['coach', 'assistant_coach', 'parent', 'player', 'fan', 'referee', 'club_official'],
  '/privacy': ['coach', 'assistant_coach', 'parent', 'player', 'fan', 'referee', 'club_official'],
  '/terms': ['coach', 'assistant_coach', 'parent', 'player', 'fan', 'referee', 'club_official'],
  
  // Authentication pages - Public access
  '/': [],
  '/login': [],
  '/register/*': [],
  '/forgot-password': [],
  '/reset-password': [],
}

// Admin Panel Access Control (admin.kickhub.com)
export const adminPageAccess: Record<RoutePattern, UserRole[]> = {
  'admin.kickhub.com/*': ['admin', 'super_admin'],
  '/dashboard': ['admin', 'super_admin'],
  '/seasons/*': ['admin', 'super_admin'],
  '/currency/*': ['admin', 'super_admin'],
  '/training/*': ['admin', 'super_admin'],
  '/achievements/*': ['admin', 'super_admin'],
  '/ai/*': ['admin', 'super_admin'],
  '/analytics/*': ['admin', 'super_admin'],
  '/monitoring/*': ['admin', 'super_admin'],
}

/**
 * Check if a user with given roles can access a specific route
 */
export function canAccessRoute(userRoles: UserRole[], route: string): boolean {
  // Check exact matches first
  if (pageAccess[route]) {
    return pageAccess[route].some(role => userRoles.includes(role))
  }
  
  // Check wildcard patterns
  for (const [pattern, allowedRoles] of Object.entries(pageAccess)) {
    if (pattern.endsWith('/*')) {
      const basePattern = pattern.slice(0, -2) // Remove /*
      if (route.startsWith(basePattern)) {
        return allowedRoles.some(role => userRoles.includes(role))
      }
    }
  }
  
  // Public routes (empty array means public access)
  return pageAccess[route]?.length === 0 || false
}

/**
 * Get all accessible routes for a user with given roles
 */
export function getAccessibleRoutes(userRoles: UserRole[]): string[] {
  const accessibleRoutes: string[] = []
  
  for (const [route, allowedRoles] of Object.entries(pageAccess)) {
    if (allowedRoles.length === 0 || allowedRoles.some(role => userRoles.includes(role))) {
      accessibleRoutes.push(route)
    }
  }
  
  return accessibleRoutes
}

/**
 * Multi-Role User Experience
 * Users with multiple roles see combined interface with smart navigation
 */
export function getUnifiedDashboardRoutes(userRoles: UserRole[]): string[] {
  const dashboardRoutes: string[] = []
  
  if (userRoles.includes('coach') || userRoles.includes('assistant_coach')) {
    dashboardRoutes.push('/coach/dashboard')
  }
  
  if (userRoles.includes('parent')) {
    dashboardRoutes.push('/parent/dashboard')
  }
  
  if (userRoles.includes('player')) {
    dashboardRoutes.push('/player/dashboard')
  }
  
  if (userRoles.includes('fan')) {
    dashboardRoutes.push('/fan/dashboard')
  }
  
  if (userRoles.includes('referee')) {
    dashboardRoutes.push('/referee/dashboard')
  }
  
  if (userRoles.includes('club_official')) {
    dashboardRoutes.push('/club/dashboard')
  }
  
  return dashboardRoutes
}

/**
 * Permission Inheritance Rules
 * Coaches/assistants automatically get parent permissions for team children
 */
export function getInheritedRoles(baseRoles: UserRole[]): UserRole[] {
  const inheritedRoles = [...baseRoles]
  
  // Coaches inherit parent permissions
  if (baseRoles.includes('coach') || baseRoles.includes('assistant_coach')) {
    if (!inheritedRoles.includes('parent')) {
      inheritedRoles.push('parent')
    }
  }
  
  return inheritedRoles
}