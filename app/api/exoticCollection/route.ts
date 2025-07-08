// /app/api/exoticCollection/route.ts
import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM exotic_collection');
    console.log("Fetched rows:", rows);
    return NextResponse.json(rows);
  }catch (err: unknown) {
  const error = err as Error;

  return NextResponse.json({ error: error.message }, { status: 500 });
}

}
