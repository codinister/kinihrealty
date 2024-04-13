

type MP = {
  location: string | undefined
}

const Googlemap = ({location}: MP ) => {
  return (
    <iframe  scrolling="no"   width="100%" height="400" className="google-map"  src={`https://maps.google.com/maps?hl=en&q=${location}&ie=UTF8&t=roadmap&z=6&iwloc=B&output=embed&z=99`}></iframe>
  )
};

export default Googlemap;
