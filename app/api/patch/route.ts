import client from '@/data/clientConfig';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function PATCH(req: NextRequest) {
  const { id, count } = await req.json();

  try {
    const res = await client
      .patch(id)
      .set({
        tcount: count,
      })
      .commit();

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json({err: 1});
}
