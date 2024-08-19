import useGetQuery from '@/data/query/useGetQuery';

const Footer = () => {
  const set = useGetQuery('settings', '/settings') || [];
  const sell = useGetQuery('sell', '/sell') || [];

  return (
    <footer data-name="Kinih.Realty">
      <div>
        <div>
          <div>
            <div>
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <span className="phone-bx">{set[0]?.phone1} </span>
            </div>
            <div>
              <span>
                <i className="fa fa-envelope"></i>
              </span>

              <span className="email-bx">{set[0]?.email}</span>
            </div>
            <div>
              <span>
                <i className="fa fa-map-marker"></i>
              </span>

              <span>{set[0]?.comp_address}</span>
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
                <span>
                  <a href={set[0]?.facebook} title="Facebook" target="_blank">
                    Facebook
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-twitter"></i>{' '}
                </span>{' '}
                <span>
                  <a href={set[0]?.twitter} title="Twitter" target="_blank">
                    Twitter
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-instagram"></i>
                </span>
                <span>
                  <a href={set[0]?.instagram} title="Instagram" target="_blank">
                    Instagram
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i className=" fa  fa-tiktok"></i>
                </span>
                <span>
                  <a href={set[0]?.tiktok} title="Tik Tok" target="_blank">
                    Tik Tok
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>All rights reserved &copy; 2024 www.kinihrealty.com</div>

      <div
        style={{
          backgroundImage: `URL(${sell[0]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </footer>
  );
};

export default Footer;
