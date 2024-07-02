import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest, response: NextResponse) {
  return new NextResponse('Hello, world!');
}

export function POST() {}

export function PATH() {}

export function DELETE() {}
