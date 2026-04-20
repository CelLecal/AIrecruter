import React from 'react';
import styles from './Candidates.module.css';

const Candidates: React.FC = () => {
    return (
        <div className={styles.rightContent}>
            <div className={styles.headerRow}>
                <div>
                    <h1>Кандидаты</h1>
                    <p>Управление всеми кандидатами в одном месте</p>
                </div>
                <button className={styles.addButton}>+ Добавить кандидата</button>
            </div>
        </div>
    );
};

export default Candidates;