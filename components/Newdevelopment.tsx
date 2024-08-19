
import Sectioncard from './Sectioncard';
import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[];
};
const Newdevelopment = ({ data }: DT) => {
  return (
    <div>
      <Sectioncard title="New developments" sub_title="" data={data} />
    </div>
  );
};

export default Newdevelopment;
