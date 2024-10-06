import useGetQuery from '@/data/query/useGetQuery';

const Navtopbar = ({ cls }: {cls: string}) => {

  const set = useGetQuery('settings', '/settings') || [];

  return (
    <div className={cls}>
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
  );
};

export default Navtopbar;
