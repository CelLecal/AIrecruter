import React from 'react';
import styles from './Vakancies.module.css';

const VacanciesPage: React.FC = () => {
    return (
        <div className={styles.rightContent}>
            <div className={styles.headerRow}>
                <div>
                    <h1>Вакансии</h1>
                    <p>Управление открытыми позициями компании</p>
                </div>
                <button className={styles.addButton}>+ Добавить вакансию</button>
            </div>

            <div className={styles.searchBar}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Поиск по вакансиям, городам, категориям..." />
            </div>

            <div className={styles.cardsGrid}>
                {/* 1 */}
                <div className={styles.vacancyCard}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.vacancyTitle}>Водитель автобуса</h3>
                        <span className={`${styles.statusBadge} ${styles.statusOpen}`}>Открыта</span>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Отдел:</span>
                            <span>Транспортный отдел</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Локация:</span>
                            <span>Москва</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Категория прав:</span>
                            <span>D</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Минимальный стаж:</span>
                            <span>5 лет</span>
                        </div>
                    </div>
                    <div className={styles.cardActions}>
                        <button className={styles.detailsButton}>Подробнее</button>
                    </div>
                </div>

                {/*2 */}
                <div className={styles.vacancyCard}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.vacancyTitle}>Водитель маршрутного транспорта</h3>
                        <span className={`${styles.statusBadge} ${styles.statusOpen}`}>Открыта</span>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Отдел:</span>
                            <span>Пассажирские перевозки</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Локация:</span>
                            <span>Санкт-Петербург</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Категория прав:</span>
                            <span>D, E</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Минимальный стаж:</span>
                            <span>3 года</span>
                        </div>
                    </div>
                    <div className={styles.cardActions}>
                        <button className={styles.detailsButton}>Подробнее</button>
                    </div>
                </div>

                {/* 3 */}
                <div className={styles.vacancyCard}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.vacancyTitle}>Водитель чего нибудь</h3>
                        <span className={`${styles.statusBadge} ${styles.statusClosed}`}>Закрыта</span>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Отдел:</span>
                            <span>Логистика</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Локация:</span>
                            <span>Екатеринбург</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Категория прав:</span>
                            <span>C, E</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Минимальный стаж:</span>
                            <span>3 года</span>
                        </div>
                    </div>
                    <div className={styles.cardActions}>
                        <button className={styles.detailsButton}>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacanciesPage;