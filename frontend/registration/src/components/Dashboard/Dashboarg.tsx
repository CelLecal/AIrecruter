import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

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
                        <i className="fas fa-bell"></i>
                    </div>
                </div>
            </header>

            <div className={styles.mainLayout}>
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

                {/* Правая область */}
                <div className={styles.rightContent}>
                    <div className={styles.Header}>
                        <h1>Добро пожаловать, Иван!</h1>
                        <p>Вот что происходит с вашими кандидатами сегодня</p>
                    </div>
                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <span className={styles.metricValue}>47</span>
                            <span className={styles.metricLabel}>Новые кандидаты</span>
                            <span className={styles.metricSub}>За последние 7 дней</span>
                        </div>
                        <div className={styles.metricCard}>
                            <span className={styles.metricValue}>32</span>
                            <span className={styles.metricLabel}>Прошли скрининг</span>
                            <span className={styles.metricSub}>Соответствуют критериям</span>
                        </div>
                        <div className={styles.metricCard}>
                            <span className={styles.metricValue}>18</span>
                            <span className={styles.metricLabel}>Требуют проверки</span>
                            <span className={styles.metricSub}>Документы на верификации</span>
                        </div>
                        <div className={styles.metricCard}>
                            <span className={styles.metricValue}>12</span>
                            <span className={styles.metricLabel}>Готовы к оформлению</span>
                            <span className={styles.metricSub}>Все проверки пройдены</span>
                        </div>
                    </div>
                    {/*-----------воронка подбора---------------*/}
                    <div className={styles.twoColumns}>
                        <div className={styles.funnel}>
                            <h2>Воронка подбора</h2>
                            <div className={styles.funnelList}>
                                <div className={styles.funnelItem}>
                                    <span className={styles.funnelStage}>Новый</span>
                                    <div className={styles.funnelBar}>
                                        <div className={styles.funnelFill} style={{ width: '100%' }}></div>
                                    </div>
                                    <span className={styles.funnelPercent}>100%</span>
                                    <span className={styles.funnelCount}><h3>47</h3></span>
                                </div>
                                <div className={styles.funnelItem}>
                                    <span className={styles.funnelStage}>Скрининг</span>
                                    <div className={styles.funnelBar}>
                                        <div className={styles.funnelFill} style={{ width: '81%' }}></div>
                                    </div>
                                    <span className={styles.funnelPercent}>81%</span>
                                    <span className={styles.funnelCount}><h3>38</h3></span>
                                </div>
                                <div className={styles.funnelItem}>
                                    <span className={styles.funnelStage}>Проверка документов</span>
                                    <div className={styles.funnelBar}>
                                        <div className={styles.funnelFill} style={{ width: '60%' }}></div>
                                    </div>
                                    <span className={styles.funnelPercent}>60%</span>
                                    <span className={styles.funnelCount}><h3>28</h3></span>
                                </div>
                                <div className={styles.funnelItem}>
                                    <span className={styles.funnelStage}>Решение HR</span>
                                    <div className={styles.funnelBar}>
                                        <div className={styles.funnelFill} style={{ width: '40%' }}></div>
                                    </div>
                                    <span className={styles.funnelPercent}>40%</span>
                                    <span className={styles.funnelCount}><h3>19</h3></span>
                                </div>
                                <div className={styles.funnelItem}>
                                    <span className={styles.funnelStage}>Оформление</span>
                                    <div className={styles.funnelBar}>
                                        <div className={styles.funnelFill} style={{ width: '26%' }}></div>
                                    </div>
                                    <span className={styles.funnelPercent}>26%</span>
                                    <span className={styles.funnelCount}><h3>12</h3></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.attention}>
                            <h2>Требует внимания</h2>
                            <div className={styles.attentionList}>
                                <div className={styles.attentionItem}>
                                    <div className={styles.attentionTitle}>Подозрительные документы</div>
                                    <div className={styles.attentionDesc}>3 кандидата требуют ручной проверки</div>
                                    <a href="#" className={styles.attentionLink}>Проверить →</a>
                                </div>
                                <div className={`${styles.attentionItem} ${styles.highPotential}`}>
                                    <div className={styles.attentionTitle}>Высокий потенциал</div>
                                    <div className={styles.attentionDesc}>5 кандидатов с оценкой 95%+</div>
                                    <a href="#" className={styles.attentionLink}>Посмотреть →</a>
                                </div>
                                <div className={styles.attentionItem}>
                                    <div className={styles.attentionTitle}>Истекающие сроки</div>
                                    <div className={styles.attentionDesc}>2 кандидата ожидают более 3 дней</div>
                                    <a href="#" className={styles.attentionLink}>Просмотреть →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightContent}>
                        <div className={styles.extraContainer}>
                            <h2>Последняя активность</h2>
                            <div className={styles.activityList}>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityAvatar}>ПС</div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityHeader}>
                                            <div className={styles.nameWrapper}>
                                                <span className={styles.userFullname}>Петров Сергей Иванович</span>
                                                <span className={styles.activityProc}>92%</span>
                                            </div>
                                            <div className={styles.activityTimeText}>5 минут назад  <span className={styles.activityGreen}></span></div>
                                        </div>
                                        <div className={styles.activityText}>завершил чат-скрининг</div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.activityList}>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityAvatar}>ИМ</div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityHeader}>
                                            <div className={styles.nameWrapper}>
                                                <span className={styles.userFullname}>Иванова Мария Петровна</span>
                                            </div>
                                            <div className={styles.activityTimeText}>12 минут назад  <span className={styles.activityBlue}></span></div>
                                        </div>
                                        <div className={styles.activityText}>загрузила документы</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.activityList}>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityAvatar}>СА</div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityHeader}>
                                            <div className={styles.nameWrapper}>
                                                <span className={styles.userFullname}>Сидоров Алексей Викторович</span>
                                            </div>
                                            <div className={styles.activityTimeText}>25 минут назад  <span className={styles.activityOrange}></span></div>
                                        </div>
                                        <div className={styles.activityText}>Требует проверки документов</div>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.activityList}>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityAvatar}>КД</div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityHeader}>
                                            <div className={styles.nameWrapper}>
                                                <span className={styles.userFullname}>Козлов Дмитрий Андреевич</span>
                                                <span className={styles.activityProc}>88%</span>
                                            </div>
                                            <div className={styles.activityTimeText}>1 час назад  <span className={styles.activityGreen}></span></div>
                                        </div>
                                        <div className={styles.activityText}>готов к оформлению</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;
