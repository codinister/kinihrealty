import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Imagemodal from './Imagemodal';
import { useState } from 'react';

type DT = {
  data: any;
  height: string;
  width: string;
};


type getimgsType = {
  url: string
}[]


const Slider = ({ data, width, height }: DT) => {
  // const images = [
  //   {
  //     url: data[0],
  //   },
  //   {
  //     url: data[1],
  //   },
  //   {
  //     url: data[2],
  //   },
  // ]

  const [getimgs, setImgs] = useState<getimgsType>();

  const images = Object.values(data).map((v: any, k) => {
    return {
      url: v.image,
    };
  });

  const Handleclick = () => {

    setImgs(images);
  };



  return (
    <>
      <Slide
        autoplay={false}
        // onChange={function noRefCheck(){}}
        // onStartChange={function noRefCheck(){}}
      >
        {images.map((fadeImage, index) => (
          <div
            onClick={Handleclick}
            className="each-slide-effect"
            key={index}
            style={{
              backgroundImage: `url(${fadeImage?.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              height,
              width,
            }}
          ></div>
        ))}
      </Slide>

      <Imagemodal img={getimgs} />
    </>
  );
};

export default Slider;
