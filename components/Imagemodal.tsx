import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type getimgsType = {
  img: any;
  setShowModal: Function;
};

const Imagemodal = ({ img, setShowModal }: getimgsType) => {
  const [windstate, setWindstate] = useState(false);
  const url = useRef<any>();

  useEffect(() => {
    if (typeof window === 'object') {
      document.body.style.overflow = 'hidden';
      setWindstate(true);
    }
  }, []);

  const handleClick = () => {
    setShowModal(false);
    document.body.style.overflow = 'scroll';
  };

  const currentImage = img[0]?.url;
  const otherImages = img.slice(1, img.length);
  const [getImage,setImage] = useState(currentImage)

  // const setImage = (e: any) => {
  //   e.preventDefault();
  //   if (url?.current) {
  //     console.log(url?.current.dataset);
  //   }
  // };

  return windstate ? (
    createPortal(
      <div className="imagemodalwrapper">
        <div className="imagemodal" onClick={handleClick}></div>
        <div className="imagemodal-inner">
          <div>
            <a href={getImage}>
              <Image src={getImage} alt="" width="600" height="450" />
              </a>
          </div>

          <div>
            {otherImages.map((v: any, k: number) => {
              return (
                <div
                onClick={()=> setImage(v.url)}
                  style={{
                    height: '7rem',
                    backgroundImage: `url(${v.url})`,
                    backgroundSize: 'cover',
                  }}
                  key={k}
                ></div>
              );
            })}
          </div>
        </div>
      </div>,
      document.body as HTMLElement
    )
  ) : (
    <></>
  );
};

export default Imagemodal;
