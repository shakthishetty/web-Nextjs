// /app/api/exoticCollection/route.ts
import db from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const [rows] = await db.query('SELECT * FROM exotic_collection');
    console.log("Fetched rows:", rows);
    return NextResponse.json(rows);
  } catch (err: any) {
    console.error('❌ DB Error:', err.message); // Log actual error
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
