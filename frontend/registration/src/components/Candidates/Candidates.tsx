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

            {/* строка поиска + кнопка + фильтры */}
            <div className={styles.searchFilterRow}>
                <div className={styles.searchFilterTop}>
                    <div className={styles.searchBar}>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Поиск по кандидатам, номеру телефона..." />
                    </div>
                    <button className={styles.filterButton}>Фильтры</button>
                </div>
                <div className={styles.filtersRow}>
                    <button className={styles.filterChip}>Все кандидаты</button>
                    <button className={styles.filterChip}>Скрининг</button>
                    <button className={styles.filterChip}>Проверка документов</button>
                    <button className={styles.filterChip}>Готовы к найму</button>
                    <button className={styles.filterChip}>Высокий балл</button>
                </div>
            </div>
        </div>
    );
};

export default Candidates;
