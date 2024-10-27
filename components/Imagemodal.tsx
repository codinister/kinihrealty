import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

type getimgsType = {
  img: {
    url: string;
  };
}  | 'undefined'

const Imagemodal = ({ img }: getimgsType) => {
  const [windstate, setWindstate] = useState(false);

  useEffect(() => {
    if (typeof window === 'object') {
      setWindstate(true);
    }
  }, []);

  console.log(img?.url);

  return windstate ? (
    createPortal(
      <div className="imagemodal">{img?.url}</div>,
      document.body as HTMLElement
    )
  ) : (
    <></>
  );
};

export default Imagemodal;
