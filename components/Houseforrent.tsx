import { data } from '@/data/data';
import Sectioncard from './Sectioncard';

import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[];
};

const Houseforrent = ({ data }: DT) => {
  return (
    <div>
      <Sectioncard title="House for rent" sub_title="" data={data} />
    </div>
  );
};

export default Houseforrent;
