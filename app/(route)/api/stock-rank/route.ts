import { NextResponse } from "next/server";
import { selectBySQL } from "../db";

export async function GET() {
  const sql = `SELECT * from Stock_Rank ORDER BY market_cap DESC LIMIT 100`;
  const { data, error } = await selectBySQL(sql);
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ data: data }, { status: 200 });
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
