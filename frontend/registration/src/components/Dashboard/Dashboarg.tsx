import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Переход на страницу регистрации
        navigate('/');
    };

    return (
        <div className={styles.dashboard}>
            <header className={styles.topBar}>
                <div className={styles.topBarContent}>
                    {/* Контейнер с логотипом и текстом */}
                    <div className={styles.logoWrapper}>
                        <div className={styles.aiIcon}>AI</div>
                        <span className={styles.logo}>AI-рекрутер</span>
                    </div>
                    {/* Строка поиска */}
                    <div className={styles.searchBar}>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Поиск..." />
                    </div>
                    {/* Иконки*/}
                    <div className={styles.userMenu}>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
            </header>

            <div className={styles.mainLayout}>
                {/* Левая панель */}
                <div className={styles.leftProfile}>
                    <div className={styles.leftProTop}>
                        <div className={styles.leftProMenu}>
                            <div className={`${styles.leftProItem} ${styles.active}`}>
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-home"></i>
                                </div>
                                <span>Главная</span>
                            </div>
                            <div className={styles.leftProItem}>
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-chalkboard-user"></i>
                                </div>
                                <span>Кандидаты</span>
                            </div>
                            <div className={styles.leftProItem}>
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-robot"></i>
                                </div>
                                <span>AI-скрининг</span>
                            </div>
                            <div className={styles.leftProItem}>
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <span>Проверка документов</span>
                            </div>
                            <div className={styles.leftProItem}>
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-user-check"></i>
                                </div>
                                <span>Оформление</span>
                            </div>
                            <div className={styles.leftProItem}>
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <span>Аналитика</span>
                            </div>
                            <div className={styles.leftProItem}>
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-sliders-h"></i>
                                </div>
                                <span>Настройки</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.leftUser}>
                          {/* клик */}
                        <div className={styles.leftUserbadge} onClick={handleLogout} style={{ cursor: 'pointer' }}>
                            <div className={styles.avatar}>
                                <i className="fas fa-user-circle" style={{ fontSize: '1.7rem', color: '#4F46E5' }}></i>
                            </div>
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>Иван Рекрутов</div>
                                <div className={styles.userRole}>HR Director</div>
                            </div>
                            <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', color: '#8b9eb0' }}></i>
                        </div>
                    </div>
                </div>

                {/* правая область */}
                <div className={styles.rightContent}>
                    <h1>Добро пожаловать, Иван!</h1>
                    <p>Вот что происходит с вашими кандидатами сегодня</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;