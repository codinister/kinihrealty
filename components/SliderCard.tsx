import { DATATYPE } from '@/types/types';
import Link from 'next/link';
import Slider from './Slider';
import Noslider from './Noslider';
import { InlineShareButtons } from 'sharethis-reactjs';

type VAL = {
  singleimage: DATATYPE;
  gallery: string[];
};

const SliderCard = ({ singleimage, gallery }: VAL) => {
  const width = '28rem';
  const height = '20rem';
  

  let image: React.ReactNode;

  if (gallery?.length) {
    image = <Slider data={gallery} height={height} width={width} />;
  } else {
    image = <Noslider width={width} height={height} url={singleimage?.image} />;
  }

  const tit =
    singleimage?.title.length < 30
      ? singleimage?.title
      : singleimage?.title.slice(0, 50) + '...';

  return (
    <div className="scard">
      {image}

      <div className="sharebtns">
        <div>
          <strong>Share</strong>
          <div>
            <div>
              <InlineShareButtons
                config={{
                  alignment: 'left', // alignment of buttons (left, center, right)
                  color: 'social', // set the color of buttons (social, white)
                  enabled: true, // show/hide buttons (true, false)
                  font_size: 16, // font size for the buttons
                  labels: 'cta', // button labels (cta, counts, null)
                  language: 'en', // which language to use (see LANGUAGES)
                  networks: [
                    // which networks to include (see SHARING NETWORKS)
                    'whatsapp',
                    'linkedin',
                    'twitter',
                  ],
                  padding: 1, // padding within buttons (INTEGER)
                  radius: 2, // the corner radius on each button (INTEGER)
                  show_total: false,
                  size: 20, // the size of each button (INTEGER)

                  // OPTIONAL PARAMETERS

                  url: `https://www.kinihrealty.com/propertydetails?query=${singleimage?.id}`, // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description: 'custom text', // (defaults to og:description or twitter:description)
                  title: tit, // (defaults to og:title or twitter:title)
                  message: singleimage?.location, // (only for email sharing)
                  subject: 'Property for sale/rent', // (only for email sharing)
                  username: 'kinihrealty', // (only for twitter sharing)
                }}
              />
            </div>

            <div>
              <i className="fa fa-eye"></i>{' '}
              <span>{singleimage?.tcount ? singleimage?.tcount : 0}</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        className="prod-details"
        href={`/propertydetails/${singleimage?.id}`}
      >
        <div className="propbox">
          <h4>{tit}</h4>

          <div>
            <span>
              <i className="fa fa-map-marker"></i>
            </span>
            <span> {singleimage?.location}</span>
          </div>

          <div>
            {Number(singleimage?.lot) > 0 ? (
              <div>
                <h5>Log Size</h5>
                <i className="fa fa-building"></i> {singleimage?.lot}
              </div>
            ) : (
              ''
            )}

            {Number(singleimage?.beds) > 0 ? (
              <div>
                <h5>Beds</h5>
                <i className="fa fa-bed"></i> {singleimage?.beds}
              </div>
            ) : (
              ''
            )}
            {Number(singleimage?.baths) > 0 ? (
              <div>
                <h5>Baths</h5>
                <i className="fa fa-bath"></i> {singleimage?.baths}
              </div>
            ) : (
              ''
            )}

            {Number(singleimage?.garage) > 0 ? (
              <div>
                <h5>Garage</h5>
                <i className="fa fa-car"></i> {singleimage?.garage}
              </div>
            ) : (
              ''
            )}
          </div>

          <div>
            <span>
              <h4> {singleimage?.price}</h4>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SliderCard;
