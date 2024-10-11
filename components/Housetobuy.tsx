
import Sectioncard from './Sectioncard'
import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[]
}

const Housetobuy = ({data}: DT) => {
  const arr = data.filter((v) => v.type === 'buy');
  return (
    <div>
      <Sectioncard title="Property for sale" sub_title="" data={arr} />
    </div>
  );
};

export default Housetobuy;
