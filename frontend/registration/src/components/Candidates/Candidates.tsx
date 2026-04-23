import React from 'react';
import styles from './Candidates.module.css';
import { Link } from 'react-router-dom'

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
                            <span>B</span>
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

                    <Link to="./CondidatesProfile.tsx" style={{ textDecoration: 'none' }}>
                        <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                    </Link>
                </div>

                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardAvatar}>КВ</div>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardName}>Кульков Владислав Павлович</div>
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
                    <Link to="./CondidatesProfile.tsx" style={{ textDecoration: 'none' }}>
                        <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                    </Link>
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
                    <Link to="./CondidatesProfile.tsx" style={{ textDecoration: 'none' }}>
                        <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                    </Link>
                </div>
            </div>

            <div className={styles.cardsRow}>

                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardAvatar}>ЛЗ</div>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardName}>Леонова Зоя Борисовна</div>
                            <div className={styles.cardCity}><i className="fa fa-map-pin" aria-hidden="true"></i> Химки</div>
                        </div>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Категория прав:</span>
                            <span>B, C</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Стаж:</span>
                            <span>7 лет</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Соответствие:</span>
                            <span className={styles.matchValue}>97%</span>
                        </div>
                    </div>
                    <div className={styles.cardStatusRow}>
                        <span className={styles.statusBadge}>Новый</span>
                        <span className={styles.riskBadge}>Низкий риск</span>
                    </div>
                    <Link to="./CondidatesProfile.tsx" style={{ textDecoration: 'none' }}>
                        <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                    </Link>
                </div>


                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardAvatar}>СЕ</div>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardName}>Сидорова Елена Сергеевна</div>
                            <div className={styles.cardCity}><i className="fa fa-map-pin" aria-hidden="true"></i> Ярославль</div>
                        </div>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Категория прав:</span>
                            <span>А, В</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Стаж:</span>
                            <span>2 года</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Соответствие:</span>
                            <span className={styles.matchValue}>71%</span>
                        </div>
                    </div>
                    <div className={styles.cardStatusRow}>
                        <span className={styles.statusBadge}>Скрининг</span>
                        <span className={styles.riskBadge2}>Высокий риск</span>
                    </div>
                    <Link to="./CondidatesProfile.tsx" style={{ textDecoration: 'none' }}>
                        <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                    </Link>
                </div>


                <div className={styles.candidateCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardAvatar}>ТГ</div>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardName}>Трусов Глеб Андревич</div>
                            <div className={styles.cardCity}><i className="fa fa-map-pin" aria-hidden="true"></i> Москва</div>
                        </div>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Категория прав:</span>
                            <span>B, C</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Стаж:</span>
                            <span>5 лет</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Соответствие:</span>
                            <span className={styles.matchValue}>89%</span>
                        </div>
                    </div>
                    <div className={styles.cardStatusRow}>
                        <span className={styles.statusBadge}>Скрининг</span>
                        <span className={styles.riskBadge}>Низкий риск</span>
                    </div>
                    <Link to="./CondidatesProfile.tsx" style={{ textDecoration: 'none' }}>
                        <button className={styles.openButton}><i className="fa fa-eye" aria-hidden="true"> </i> Открыть</button>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Candidates;
