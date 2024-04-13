type Noslidertype = {
  height: string;
  width: string;
  url: string;
};

const Noslider = ({ height, width, url }: Noslidertype) => {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
        width,
      }}
    ></div>
  );
};

export default Noslider;
