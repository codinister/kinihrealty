
import useGetQuery from '@/data/query/useGetQuery';
import Link from 'next/link';

const Services = () => {
  const newprop = useGetQuery('new', '/new') || [];
  const rent = useGetQuery('rent', '/rent') || [];
  const sell = useGetQuery('sell', '/sell') || [];
  const buy = useGetQuery('buy', '/buy') || [];

  const obj = [newprop[0], rent[0], sell[0], buy[0]];

  return (
    <>
      {obj.map((v: any, k) => (
        <Link href={`/${v?.type}`} key={k} className="serv-card">
          <div
            style={{
              backgroundImage: `url(${v?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div>
            {v?.type == 'sell'
              ? 'Sell a home'
              : v?.type === 'rent'
                ? 'Rent a home'
                : v?.type === 'new'
                  ? 'New properties'
                  : 'Buy a home'}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Services;
