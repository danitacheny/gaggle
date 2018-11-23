import React from 'react';

import style from './styles/Layout.module.css';

const Layout = props => {
  return (
    <div className={style.container}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
