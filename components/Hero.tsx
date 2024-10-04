'use client';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Searchbox from './Searchbox';
import { DATATYPE } from '@/types/types';
import useGetQuery from '@/data/query/useGetQuery';
import Nav from './Nav';

const Hero = () => {
  const data = useGetQuery('slider', '/slider') || [];

  const images = [
    {
      url: data[0]?.image,
    },
    {
      url: data[1]?.image,
    },
    {
      url: data[2]?.image,
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

  const SLIDER_HEIGHT = 550;

  return (
    <div className="slide-container">


      <Nav />


      <div className="search-box">
        <span>Rent, Sell, New development</span>
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
