import React from 'react';
import loading from '../../Photo/loading.svg'

const Preloader = () => {
   return (
       <div>
          <img src={loading} alt='load'/>
       </div>
   );
};

export default Preloader;