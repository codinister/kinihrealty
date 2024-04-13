import { data } from '@/data/data';

const Footer = () => {
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
    <footer>
      <div>
        <div className="social-bx"></div>

        <div className="img-bx">
          {obj.map((v: any, k) => (
            <div
              key={k}
              className={`stack-img img-${k+1}`}
              style={{
                backgroundImage: `url(${v.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          ))}

          <div
            className="stack-img img-5"
            style={{
              backgroundImage: `url('/footer/img5.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <div className="social-icons">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-tiktalk"></i>
              </div>

              <span className="phone-bx">+233 507 173 578 </span>

              <span className="email-bx">info@kinihrealty.com</span>

              <span>
                Tesano - Opp Ghana Communication Technology University{' '}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>All rights reserved &copy; 2024 www.kinihrealty.com</div>
    </footer>
  );
};

export default Footer;
