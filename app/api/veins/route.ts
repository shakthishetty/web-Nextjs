import db from '@/lib/db';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM veins');
    return NextResponse.json(rows);
  } catch (err) {
    console.error('DB Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


