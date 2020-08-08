import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__img} />
      <div className={styles.Header__score}>Score: 0</div>
    </header>
  );
};

export default Header;

