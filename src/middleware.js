import { NextResponse } from "next/server";

export function middleware(request) {
    if (!request.cookies.has('user_email')){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/:path', '/Favoritos:path']
  //matcher: '/:path*', localhost:3000/  localhost:3000/login   localhost:3000/favoritos
}