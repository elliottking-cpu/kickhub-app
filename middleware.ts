import { NextRequest, NextResponse } from 'next/server';
import { canAccessRoute, getUnifiedDashboardRoutes, getInheritedRoles, UserRole } from './src/lib/access-control';

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
  const inheritedRoles = getInheritedRoles(userRoles);
  
  // Check role-based access using our access control system
  const hasAccess = canAccessRoute(inheritedRoles, pathname);
  
  if (!hasAccess) {
    // Redirect to appropriate dashboard based on user's roles
    const dashboardRoutes = getUnifiedDashboardRoutes(inheritedRoles);
    const dashboardUrl = dashboardRoutes[0] || '/';
    return NextResponse.redirect(new URL(dashboardUrl, request.url));
  }

  return NextResponse.next();
}

function checkAuthentication(request: NextRequest): boolean {
  // TODO: Implement Supabase authentication check
  // For now, return true to allow development
  return true;
}

function getUserRoles(request: NextRequest): UserRole[] {
  // TODO: Implement role retrieval from Supabase
  // For now, return coach role for development
  return ['coach'];
}

// Legacy functions removed - now using access-control.ts

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