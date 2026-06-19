import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className={styles.dashboard}>
            <header className={styles.topBar}>
                <div className={styles.topBarContent}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.aiIcon}>AI</div>
                        <span className={styles.logo}>AI-рекрутер</span>
                    </div>
                    <div className={styles.searchBar}>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Поиск..." />
                    </div>

                    <div className={styles.userMenu}>
                        <div className={styles.notificationWrapper}>
                            <i 
                                className="fas fa-bell" 
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                                style={{ cursor: 'pointer' }}
                            ></i>
                            <span className={styles.notificationDot}></span>
                        </div>
                    </div>
                    
                </div>
            </header>

            <div className={styles.mainLayout}>
                <div className={styles.leftProfile}>
                    <div className={styles.leftProTop}>
                        <div className={styles.leftProMenu}>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `${styles.leftProItem} ${isActive ? styles.active : ''}`
                                }
                                end
                            >
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-home"></i>
                                </div>
                                <span>Главная</span>
                            </NavLink>

                            <NavLink
                                to="/dashboard/candidates"
                                className={({ isActive }) =>
                                    `${styles.leftProItem} ${isActive ? styles.active : ''}`
                                }
                            >
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-chalkboard-user"></i>
                                </div>
                                <span>Кандидаты</span>
                            </NavLink>

                            <NavLink
                                to="/dashboard/vacancies"
                                className={({ isActive }) =>
                                    `${styles.leftProItem} ${isActive ? styles.active : ''}`
                                }
                            >
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <span>Вакансии</span>
                            </NavLink>

                            <NavLink
                                to="/dashboard/ai-screening"
                                className={({ isActive }) => `${styles.leftProItem} ${isActive ? styles.active : ''}`}
                            >
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-robot"></i>
                                </div>
                                <span>AI-скрининг</span>
                            </NavLink>


                            <NavLink
                                to="/dashboard/documents"
                                className={({ isActive }) => `${styles.leftProItem} ${isActive ? styles.active : ''}`}
                            >
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <span>Проверка документов</span>
                            </NavLink>

                            <NavLink
                                to="/dashboard/analytics"
                                className={({ isActive }) => `${styles.leftProItem} ${isActive ? styles.active : ''}`}
                            >
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <span>Аналитика</span>
                            </NavLink>

                            <NavLink
                                to="/dashboard/settings"
                                className={({ isActive }) => `${styles.leftProItem} ${isActive ? styles.active : ''}`}
                            >
                                <div className={styles.leftProIcon}>
                                    <i className="fas fa-sliders-h"></i>
                                </div>
                                <span>Настройки</span>
                            </NavLink>

                        </div>
                    </div>
                    <div className={styles.leftUser}>
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

                <Outlet />
            </div>

            {/* панель уведомлений */}
            {notificationsOpen && (
                <div className={styles.notificationsPanel}>
                    <div className={styles.panelHeader}>
                        <span>Уведомления</span>
                        <button onClick={() => setNotificationsOpen(false)} className={styles.closePanelBtn}>✕</button>
                    </div>
                    <div className={styles.notificationsList}>
                        <div className={styles.notificationItem}>
                            <p>Кандидат Петров С.И. прошёл скрининг</p>
                            <span className={styles.notificationTime}>5 минут назад</span>
                        </div>
                        <div className={styles.notificationItem}>
                            <p>Загружены документы кандидата Смирновой А.В.</p>
                            <span className={styles.notificationTime}>12 минут назад</span>
                        </div>
                        <div className={styles.notificationItem}>
                            <p>Требуется проверка документов (3 кандидата)</p>
                            <span className={styles.notificationTime}>25 минут назад</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
