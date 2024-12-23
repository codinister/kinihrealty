import client from '@/data/clientConfig';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'sell' && !("salespage" in category[]->title)  &&  title != null]{
        "id": _id,
            "type": _type,
            title,
            price,
            "image": img.asset->url,
            excerpt,
            "body": body[]{
              ..., 
              asset->{
                ...,
                "_key": _id
              }
            },
            youtube,
            "category": category[]->title,
            "gallery": gallery[]{
            "image": asset->url
            }, 
            lot,
            beds,
            tcount,
            baths,
            garage,
            location
      }
      `
    );

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
