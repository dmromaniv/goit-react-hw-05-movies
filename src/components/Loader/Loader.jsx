import React from 'react';

import { MagnifyingGlass } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
