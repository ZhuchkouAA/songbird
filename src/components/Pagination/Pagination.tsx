import React from 'react';

import paginationData from "../../constants/paginationData";
import {GameDataType} from "../../redux/reducers/game-data-reducer";
import styles from './Pagination.module.scss';

type PaginationType = {
    gameData: GameDataType
}

const Pagination = ({gameData}: PaginationType) => {
    const activeBlockId = gameData.round;
    const paginationElements = paginationData.map((description, id) => activeBlockId === id ?
        <li className={styles.Pagination__active}>{description}</li> : <li>{description}</li>)

    return (
        <div>
            <ul className={styles.Pagination}>
                {paginationElements}
            </ul>
        </div>
    );
};

export default Pagination;
