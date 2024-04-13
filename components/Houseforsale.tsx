import Sectioncard from './Sectioncard';
import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[];
};

const Houseforsale = ({ data }: DT) => {
  return (
    <div className="propertiesforsale">
      <Sectioncard title="House for sale" sub_title="" data={data} />
    </div>
  );
};

export default Houseforsale;
