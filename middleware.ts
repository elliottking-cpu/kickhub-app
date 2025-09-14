import { NextRequest, NextResponse } from 'next/server';

// Define role-based access control matrix
const pageAccess = {
  '/coach': ['coach', 'assistant_coach'],
  '/parent': ['parent', 'coach', 'assistant_coach'], // Coaches inherit parent permissions
  '/player': ['player', 'parent', 'coach', 'assistant_coach'],
  '/fan': ['fan'],
  '/referee': ['referee'],
  '/club': ['club_official'],
  
  // Shared pages - accessible to all authenticated users
  '/profile': ['all_authenticated'],
  '/settings': ['all_authenticated'],
  '/notifications': ['all_authenticated'],
  '/help': ['all_authenticated'],
  '/privacy': ['all_authenticated'],
  '/terms': ['all_authenticated'],
};

// Public routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/register/coach',
  '/register/referee',
  '/forgot-password',
  '/reset-password',
  '/terms',
  '/privacy',
  '/help',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  // TODO: Implement actual authentication check with Supabase
  const isAuthenticated = checkAuthentication(request);
  
  if (!isAuthenticated) {
    // Redirect to login page
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Get user roles
  // TODO: Implement actual role checking with Supabase
  const userRoles = getUserRoles(request);
  
  // Check role-based access
  const hasAccess = checkRoleAccess(pathname, userRoles);
  
  if (!hasAccess) {
    // Redirect to appropriate dashboard based on user's primary role
    const dashboardUrl = getDashboardUrl(userRoles);
    return NextResponse.redirect(new URL(dashboardUrl, request.url));
  }

  return NextResponse.next();
}

function checkAuthentication(request: NextRequest): boolean {
  // TODO: Implement Supabase authentication check
  // For now, return true to allow development
  return true;
}

function getUserRoles(request: NextRequest): string[] {
  // TODO: Implement role retrieval from Supabase
  // For now, return coach role for development
  return ['coach'];
}

function checkRoleAccess(pathname: string, userRoles: string[]): boolean {
  // Find matching route pattern
  for (const [route, allowedRoles] of Object.entries(pageAccess)) {
    if (pathname.startsWith(route)) {
      // Check if user has any of the allowed roles
      if (allowedRoles.includes('all_authenticated')) {
        return true;
      }
      
      return userRoles.some(role => allowedRoles.includes(role));
    }
  }
  
  // Default to allowing access if no specific rule found
  return true;
}

function getDashboardUrl(userRoles: string[]): string {
  // Priority order for dashboard redirection
  if (userRoles.includes('coach')) return '/coach/dashboard';
  if (userRoles.includes('parent')) return '/parent/dashboard';
  if (userRoles.includes('player')) return '/player/dashboard';
  if (userRoles.includes('referee')) return '/referee/dashboard';
  if (userRoles.includes('fan')) return '/fan/dashboard';
  if (userRoles.includes('club_official')) return '/club/dashboard';
  
  // Default fallback
  return '/';
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
