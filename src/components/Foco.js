import React from 'react';
import Luz from './Luz';

//PARENT
const Foco = () => {
  return (
    <div className='foco'>
      <Luz isRounded />
      <Luz />
    </div>
  );
};

export default Foco;

{
  /* <Luz isRounded={1} />
      <Luz isRounded={0} /> */
}

{
  /* <Luz isRounded={true} />
      <Luz isRounded={false} /> */
}
{
  /* <Luz
isRounded={true}
numberProp={1}
stringProp={'string'}
objectProp={{ a: 1 }}
/> */
}
