


import { DATATYPE } from '@/types/types';
import Card from './Card';
import SliderCard from './SliderCard';

type DATA = {
  title: string;
  sub_title: string;
  data: DATATYPE[]
};

const Sectioncard = ({ title, sub_title, data }: DATA) => {




  return (
    <div className="section-card">
      <h3>{title}</h3>
      <h4>{sub_title}</h4>

      <div className="slidecard">
        {data.map((v, k) => (
             <SliderCard key={k} singleimage={v} gallery={v.gallery} />
        ))}
      </div>
    </div>
  );
};

export default Sectioncard;
