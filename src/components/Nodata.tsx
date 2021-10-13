import type { FC } from "react";

type propttype = {
  imgSrc?: string;
  desc?: string;
}


const Nodata: FC<propttype> = ({ imgSrc, desc }) => {
  return (
    <div style={{ width: '100%',backgroundColor:'#fff' }}>
      <img src={imgSrc} style={{ margin: '0 auto', width: '180px', display: 'block' }} />
      <p style={{ lineHeight: '40px', color: '#ccc', textAlign: 'center', fontSize: '12px' }}>
        {desc}
      </p>
    </div>
  )
}

export default Nodata