'use client';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Searchbox from './Searchbox';
import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[];
};

const Hero = ({ data }: DT) => {
  const images = [
    {
      url: data[0]?.img,
    },
    {
      url: data[1]?.img,
    },
    {
      url: data[2]?.img,
    },
  ];

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // const [windowDimensions, setWindowDimensions] = useState(
  //   getWindowDimensions()
  // );

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const SLIDER_HEIGHT = 350;

  return (
    <div className="slide-container">
      <div className="search-box">
        <span>Rent, Sell, Buy, New development</span>

        <Searchbox />
      </div>

      <Slide

      // autoplay={false}
      // onChange={function noRefCheck(){}}
      // onStartChange={function noRefCheck(){}}
      >
        {images.map((fadeImage, index) => (
          <div
            className="each-slide-effect"
            key={index}
            style={{
              backgroundImage: `url(${fadeImage.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: `${SLIDER_HEIGHT}px`,
            }}
          ></div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero;
