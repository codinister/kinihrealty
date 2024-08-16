import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useGetQuery from '@/data/query/useGetQuery';

const Nav = () => {
  const [openbox, setOpenbox] = useState(false);

  const path = usePathname();

  const settings  = useGetQuery('settings', '/settings') || []


  return (
    <>
      <nav className={openbox ? 'showname' : 'hidenav'}>
        <div className="container">
          <div>
            <div>
              <Link href="/">
                <Image
                  width="100"
                  className="logo"
                  height="70"
                  src={settings[0]?.comp_logo}
                  alt="Logo"
                />
              </Link>
            </div>

            <div onClick={() => setOpenbox(false)}>
              <Link href="/" className={path === '/' ? 'active' : ''}>
                Home
              </Link>
              <Link href="/buy" className={path === '/buy' ? 'active' : ''}>
                Buy
              </Link>
              <Link href="/sell" className={path === '/sell' ? 'active' : ''}>
                Sell
              </Link>
              <Link href="/rent" className={path === '/rent' ? 'active' : ''}>
                Rent
              </Link>
              <Link href="/new" className={path === '/new' ? 'active' : ''}>
                New development
              </Link>
              <Link href="/blog" className={path === '/blog' ? 'active' : ''}>
                Blog
              </Link>
            </div>
          </div>
        </div>

        <div onClick={() => setOpenbox(false)}></div>
      </nav>

      <div className="humberger" onClick={() => setOpenbox(true)}>
        <Image src="/hamburger.jpg" width="70" height="70" alt="" />
      </div>
    </>
  );
};

export default Nav;
