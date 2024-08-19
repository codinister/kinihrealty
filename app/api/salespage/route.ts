import client from '@/data/clientConfig';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const res = await client.fetch(
      groq`
      *["salespage" in category[]->title && title != null]{
        "id": _id,
            title,
            "image": img.asset->url,
            excerpt,
            "body": body[]{
              ..., 
              asset->{
                ...,
                "_key": _id
              }
            }
            
      }
      `
    );

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
