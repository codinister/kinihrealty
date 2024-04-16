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
    <footer data-name="Kinih.Realty">
      <div>
        <div>
          <div>
            <div>
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <span className="phone-bx">+233 507 173 578 </span>
            </div>
            <div>
              <span>
                <i className="fa fa-envelope"></i>
              </span>

              <span className="email-bx">info@kinihrealty.com</span>
            </div>
            <div>
              <span>
                <i className="fa fa-map-marker"></i>
              </span>

              <span>
                Tesano - Opp Ghana Communication Technology University{' '}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="social-icons">
            <ul>
              <li>
                <span>
                  <i className="fa fa-facebook"></i>
                </span>{' '}
                <span>Facebook</span>
              </li>
              <li>
                <span>
                  <i className="fa fa-twitter"></i>{' '}
                </span>{' '}
                <span>Twitter</span>
              </li>
              <li>
                <span>
                  <i className="fa fa-instagram"></i>
                </span>{' '}
                <span> Instagram</span>
              </li>
              <li>
                <span>
                  <i className="fa-brands fa fa-tiktok"></i>{' '}
                </span>{' '}
                <span>Tik Talk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>All rights reserved &copy; 2024 www.kinihrealty.com</div>

      <div
        style={{
          backgroundImage: "url('/data/img1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </footer>
  );
};

export default Footer;
