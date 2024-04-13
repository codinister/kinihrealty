
import Sectioncard from './Sectioncard';
import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[]
}
const Featuredproperties = ({data}: DT) => {
  const arr = data.filter(v => v.type === 'featured').slice(0, 12)
  return (
    <div className="featuredproperties">
      <Sectioncard title="Featured properties" sub_title="" data={arr} />
    </div>
  );
};

export default Featuredproperties;
