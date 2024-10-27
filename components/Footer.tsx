import useGetQuery from '@/data/query/useGetQuery';
import Whatsapp from './Whatsapp';


const Footer = () => {
  const set = useGetQuery('settings', '/settings') || [];

  const post = useGetQuery('footerpost', '/post') || [];

  return (
    <>
    <footer data-name="Kinih.Realty">
        <Whatsapp />
      <div className="container">
        <div>
          <h5>About Us</h5>
          <div>{set[0]?.sbout.slice(0,100)+'...'}</div>

          <div>
            <a href={set[0]?.facebook} title="Facebook"  target="_blank" >
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

        <div>
          <h5>Latest Blog Posts</h5>

          <div>
            <div className="psbx">
              <div
                style={{
                  backgroundImage: `url(${post[1]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div>{post[1]?.title.slice(0, 40)+`...`}</div>
            </div>
            <div className="psbx">
              <div
                style={{
                  backgroundImage: `url(${post[2]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div>{post[2]?.title.slice(0, 40)+`...`}</div>
            </div>
          </div>
        </div>

        <div>
          <h5>Get In Touch</h5>

          <div className="contbx">
            <span>
              <i className="fa fa-map-marker"></i>
            </span>
            <span>{set[0]?.location}</span>
          </div>

          <div className="contbx">
            <span>
              <i className="fa fa-envelope"></i>
            </span>
            <span>{set[0]?.email}</span>
          </div>

          <div className="contbx">
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <span>
              {set[0]?.phone1} {set[0]?.phone2 ? '|' + set[0]?.phone2 : ''}
            </span>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <p>Copyright &copy;2024 All rights reserved </p>
      </div>
    </footer>

    </>
  );
};

export default Footer;
