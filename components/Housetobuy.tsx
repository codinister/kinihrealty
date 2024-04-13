import { data } from '@/data/data';
import Sectioncard from './Sectioncard'
import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[]
}

const Housetobuy = ({data}: DT) => {
  const arr = data.filter((v) => v.type === 'buy');
  return (
    <div>
      <Sectioncard title="House to buy" sub_title="" data={arr} />
    </div>
  );
};

export default Housetobuy;
