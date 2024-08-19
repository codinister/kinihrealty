'use client'

import { useRouter } from "next/navigation";



const Sidebarpostcardsm = ({data}: {data: {_id: string; title: string; image: string; excerpt: string; createdAt: string;}[]}) => {

  const router = useRouter();

  const handleClick = (val: string) => {
    router.push(`/singlepage/${val}`);
  };

  const obj = data.map((v,k) => {
    return (
      <div className="sidebarpostcardsm" key={k} onClick={()=> handleClick(v._id)}>
      <div style={{
        backgroundImage: `url(${v.image})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}></div>
      <div>

        <h5>{v.title.slice(0,10)}...</h5>
        <span>Published on: {v.createdAt}</span>
        <div>
          {v.excerpt.slice(0,24)}...
        </div>
      </div>
    </div>
    )
  })

  return (
    <>
    {obj}
    </>
  )
}

export default Sidebarpostcardsm