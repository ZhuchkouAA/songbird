import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <div>
      <ul className={styles.Pagination}>
        <li className={styles.Pagination__active}>Разминка</li>
        <li>Воробьиные</li>
        <li>Лесные птицы</li>
        <li>Певчие птицы</li>
        <li>Хищные птицы</li>
        <li>Морские птицы</li>
      </ul>
    </div>
  );
};

export default Pagination;
