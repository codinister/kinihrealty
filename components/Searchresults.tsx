import { data } from '@/data/data';
import Sectioncard from './Sectioncard';
import useGetQuery from '@/data/query/useGetQuery';

type VAL = {
  val: string | any;
};

const Searchresults = ({ val }: VAL) => {

  const data = useGetQuery('propertycat', '/propertycat') || []

  const arr = data.filter((v: any) =>
    Object.values(v).join('').toLowerCase().includes(val.toLowerCase())
  );
  const count = arr.length;
  const mess = `${count} Search result found for ( ${val} )`;
  return (
    <div>
      <Sectioncard title={mess} sub_title="" data={arr} />
    </div>
  );
};

export default Searchresults;
