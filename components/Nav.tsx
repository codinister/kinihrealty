import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useGetQuery from '@/data/query/useGetQuery';

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
      <div className="nav-top-bar">
        <div className="container">
          <div className="contactdetails">
            <div>
              <span>
                <i className="fa fa-envelope"></i>
              </span>
              <span>{set[0]?.email}</span>
            </div>
            <div>
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <span>
                {set[0]?.phone1} {set[0]?.phone2 ? '|' + set[0]?.phone2 : ''}
              </span>
            </div>
          </div>

          <div className="social-media-icons">
            <a href={set[0]?.facebook} title="Facebook" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href={set[0]?.tiktok} target="_blank" title="Tiktok">
              <i className="fa fa-tiktok"></i>
            </a>
            <a href={set[0]?.twitter} target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a href={set[0]?.instagram} target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar ${openbox ? 'showname' : 'hidenav'}`}>
        <div className="container">
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

            <div onClick={() => setOpenbox(false)}>
              <Link href="/" className={path === '/' ? 'active' : ''}>
                Home
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
