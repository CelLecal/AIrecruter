import styles from './RegistrationPage.module.css';
import React from 'react';

const Info: React.FC = () => {
    return (
        <div className={styles.right}>
            <div className={styles.rightContent}>
                <h1>Умный подбор персонала для транспортных компаний</h1>
                <p>Автоматизация скрининга, проверки документов и кадрового оформления водителей</p>
            </div>
            <div className={styles.blocksContainer}>
                <div className={styles.block1}>1</div>
                <div className={styles.block2}>2</div>
                <div className={styles.block3}>3</div>
            </div>
        </div>
    );
};

export default Info;