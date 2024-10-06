import client from '@/data/clientConfig';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const res = await client.fetch(
      groq`
      *[_type in ['new','rent','sell','featured'] ]{
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
            "cat": category[]->title,
            "gallery": gallery[]{
            "image": asset->url
            }, 
            lot,
            beds,
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
