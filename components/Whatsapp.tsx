'use client';
import useGetQuery from '@/data/query/useGetQuery';

const Whatsapp = () => {
  const set = useGetQuery('settings', '/settings') || [];

  if (set[0]?.whatsapp) {
    const txt = set[0]?.whatsapp;
    const phone = set[0]?.phone1.split(' ').join('');
    const url = `https://wa.me/${phone}?text=I%20want%20to%20make%20an%20inquiry`
    return (
      <a
        className="whatsappbtn"
        href={url}
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    );
  }
};

export default Whatsapp;
