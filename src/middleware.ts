import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isBot = /bot|crawler|spider|google|bing/i.test(request.headers.get('user-agent') || '');
    if (isBot) return NextResponse.next();

    // Continue normal execution for regular users
    return NextResponse.next();
}
