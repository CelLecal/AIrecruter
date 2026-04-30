import React, {useEffect, useState} from 'react';
import styles from './Dashboard.module.css';
import { fetchNewCandidates, fetchPrimarySelection, fetchDocVerif, fetchReadyForRegis, fetchHiringFunnel } from '../../api/api';

const DashboardMain: React.FC = () => {
    const [NewCandidates, setNewCandidate] = useState(null); 
    const [primarySelections, setPrimarySelections] = useState(null);
    const [docVerif, setDocVerif] = useState(null);
    const [readyForRegis, setReadyForRegis] = useState(null);
    const [hiringFunnel, sethiringFunnel] = useState({ percentages: [], counts: [] });

 useEffect(() => {
  fetchNewCandidates()
    .then(setNewCandidate)
    .catch(console.error); 
      fetchPrimarySelection()
    .then(setPrimarySelections)
    .catch(console.error); 
      fetchDocVerif()
    .then(setDocVerif)
    .catch(console.error); 
      fetchReadyForRegis()
    .then(setReadyForRegis)
    .catch(console.error); 
      fetchHiringFunnel()
    .then(sethiringFunnel)
    .catch(console.error); 
    

}, []);
    return (
        <div className={styles.rightContent}>
            <div className={styles.Header}>
                <h1>Добро пожаловать, Иван!</h1>
                <p>Вот что происходит с вашими кандидатами сегодня</p>
            </div>
            <div className={styles.metricsGrid}>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{NewCandidates}</span>
                    <span className={styles.metricLabel}>Новые кандидаты</span>
                    <span className={styles.metricSub}>За последние 7 дней</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{primarySelections}</span>
                    <span className={styles.metricLabel}>Прошли скрининг</span>
                    <span className={styles.metricSub}>Соответствуют критериям</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{docVerif}</span>
                    <span className={styles.metricLabel}>Требуют проверки</span>
                    <span className={styles.metricSub}>Документы на верификации</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{readyForRegis}</span>
                    <span className={styles.metricLabel}>Готовы к оформлению</span>
                    <span className={styles.metricSub}>Все проверки пройдены</span>
                </div>
            </div>

            {/* воронка подбора и Требует внимания */}
            <div className={styles.twoColumns}>
                <div className={styles.funnel}>
                    <h2>Воронка подбора</h2>
                    <div className={styles.funnelList}>
                        <div className={styles.funnelItem}>
                            <span className={styles.funnelStage}>Новый</span>
                            <div className={styles.funnelBar}>
                                <div className={styles.funnelFill} style={{ width: '100%' }}></div>
                            </div>
                            <span className={styles.funnelPercent}>{hiringFunnel.percentages[0]}</span>
                            <span className={styles.funnelCount}><h3>40</h3></span>
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

            {/* последняя активность */}
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
        
    );
};

export default DashboardMain;