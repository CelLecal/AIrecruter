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
                    <button className={styles.filterButton}><i className="fa fa-filter" aria-hidden="true"></i> Фильтры</button>
                </div>
                <div className={styles.filtersRow}>
                    <button className={styles.filterChip}>Все кандидаты</button>
                    <button className={styles.filterChip}>Скрининг</button>
                    <button className={styles.filterChip}>Проверка документов</button>
                    <button className={styles.filterChip}>Готовы к найму</button>
                    <button className={styles.filterChip}>Высокий балл</button>
                </div>
            </div>

            {/* карточки*/}
            <div className={styles.cardsRow}>
                
                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardAvatar}>ПС</div>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardName}>Петров Сергей Иванович</div>
                            <div className={styles.cardCity}><i className="fa fa-map-pin" aria-hidden="true"></i> Москва</div>
                        </div>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Категория прав:</span>
                            <span>C, E</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Стаж:</span>
                            <span>8 лет</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Соответствие:</span>
                            <span className={styles.matchValue}>92%</span>
                        </div>
                    </div>
                    <div className={styles.cardStatusRow}>
                        <span className={styles.statusBadge}>Скрининг</span>
                        <span className={styles.riskBadge}>Низкий риск</span>
                    </div>
                    
                    <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                </div>

                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardAvatar}>СА</div>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardName}>Смирнов Алексей Викторович</div>
                            <div className={styles.cardCity}><i className="fa fa-map-pin" aria-hidden="true"></i> Санкт-Петербург</div>
                        </div>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Категория прав:</span>
                            <span>C, D</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Стаж:</span>
                            <span>5 лет</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Соответствие:</span>
                            <span className={styles.matchValue}>78%</span>
                        </div>
                    </div>
                    <div className={styles.cardStatusRow}>
                        <span className={styles.statusBadge}>Проверка документов</span>
                        <span className={styles.riskBadge1}>Средний риск</span>
                    </div>
                    <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                </div>

                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardAvatar}>КЕ</div>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardName}>Козлова Екатерина Дмитриевна</div>
                            <div className={styles.cardCity}><i className="fa fa-map-pin" aria-hidden="true"></i> Казань</div>
                        </div>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Категория прав:</span>
                            <span>B, C</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Стаж:</span>
                            <span>3 года</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Соответствие:</span>
                            <span className={styles.matchValue}>95%</span>
                        </div>
                    </div>
                    <div className={styles.cardStatusRow}>
                        <span className={styles.statusBadge}>Скрининг</span>
                        <span className={styles.riskBadge}>Низкий риск</span>
                    </div>
                    <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                </div>
            

            </div>
        </div>
    );
};

export default Candidates;
