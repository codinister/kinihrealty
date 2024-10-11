import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useGetQuery from '@/data/query/useGetQuery';
import Navtopbar from './Navtopbar';

const Nav = () => {
  const [openbox, setOpenbox] = useState(false);
  const path = usePathname();
  const set = useGetQuery('settings', '/settings') || [];

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e: any) => {
    const header = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header?.classList.add('is-sticky')
      : header?.classList.remove('is-sticky');
  };

  return (
    <>
      <Navtopbar cls="nav-top-bar" />

      <nav className="navbar">
        <div>
          <Image
            className="humberger"
            src="/hamburger.jpg"
            onClick={() => setOpenbox(true)}
            width="30"
            height="30"
            alt=""
          />
        </div>

        <div className={`navbox1 container ${openbox ? 'shownav' : ''} `}>
          <div>
            <div>
              <Link href="/">
                <Image
                  width="100"
                  className="logo"
                  height="70"
                  src={set[0]?.comp_logo}
                  alt="Logo"
                />
              </Link>
            </div>

            <div>
              <Link
                href="/"
                onClick={() => setOpenbox(false)}
                className={path === '/' ? 'active' : ''}
              >
                Home
              </Link>

              <Link
                href="/sell"
                onClick={() => setOpenbox(false)}
                className={path === '/sell' ? 'active' : ''}
              >
                Sell
              </Link>

              <Link
                href="/buy"
                onClick={() => setOpenbox(false)}
                className={path === '/buy' ? 'active' : ''}
              >
                Buy
              </Link>



              <Link
                href="/rent"
                onClick={() => setOpenbox(false)}
                className={path === '/rent' ? 'active' : ''}
              >
                Rent
              </Link>
              <Link
                href="/new"
                onClick={() => setOpenbox(false)}
                className={path === '/new' ? 'active' : ''}
              >
                New development
              </Link>
              <Link
                href="/blog"
                onClick={() => setOpenbox(false)}
                className={path === '/blog' ? 'active' : ''}
              >
                Blog
              </Link>
            </div>

            <Navtopbar cls="mobilesocialwrapper" />
          </div>
        </div>

        <div
          className={`navbox2 ${openbox ? 'shownav' : ''} `}
          onClick={() => setOpenbox(false)}
        ></div>
      </nav>
    </>
  );
};

export default Nav;
