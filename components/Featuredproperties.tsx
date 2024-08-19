
import useGetQuery from '@/data/query/useGetQuery';
import Sectioncard from './Sectioncard';
import { DATATYPE } from '@/types/types';

type DT = {
  data: DATATYPE[]
}
const Featuredproperties = ({data}: DT) => {
  const featured  = useGetQuery('featured', '/featured') || []
  const arr = featured.slice(0, 12)

  return (
    <div className="featuredproperties">
      <Sectioncard title="Featured properties" sub_title="" data={arr} />
    </div>
  );
};

export default Featuredproperties;
