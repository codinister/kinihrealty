import { data } from '@/data/data';
import Link from 'next/link';

const Services = () => {
  
  const unique = Object.values(
    data.reduce((a: any, b) => {
      if (a[b.type]) {
        a[b.type] = b;
      } else {
        a[b.type] = b;
      }
      return a;
    }, {})
  );

  const obj = unique.filter((v: any) => v.type !== 'featured');

  return (
    <>
      {obj.map((v: any, k) => (
        <Link href={`/${v.type}`} key={k} className="serv-card">
      
            <div
              style={{
                backgroundImage: `url(${v.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
    
          <h4>
            {v.type == 'sell'
              ? 'Sell a home'
              : v.type === 'rent'
              ? 'Rent a home'
              : v.type === 'new'
              ? 'New properties'
              : 'Buy a home'}
          </h4>
        </Link>
      ))}
    </>
  );
};

export default Services;
