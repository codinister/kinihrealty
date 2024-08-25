import useGetQuery from '@/data/query/useGetQuery';

const Whatsapp = () => {
  const set = useGetQuery('settings', '/settings') || [];

  const phone = set[0]?.phone1.split(' ').join('');
  const message = decodeURIComponent(set[0]?.whatsapp);

  return (
    <a className="whatsappbtn" href={`https://wa.me/${phone}?text=${message}`}>
      <i className="fa fa-whatsapp"></i>
    </a>
  );
};

export default Whatsapp;
