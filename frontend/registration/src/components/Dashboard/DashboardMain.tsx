import React, {useEffect, useState} from 'react';
import styles from './Dashboard.module.css';

interface Dashboard {
    new_candidates_count: string;
    primary_selection_count: string;
    document_verification_count: string;
    ready_for_registration_count: string;
    latest_candidates: {
        full_name: string;
        current_status: string;
        id: number;
    };
    hiring_funnel: {
        hired: number;
        offer: number;
        rejected: number;
        interview: number;
        screening: number;
    };
}


const DashboardMain: React.FC = () => {
    const [dashboard, setDashboard] = useState<Dashboard |null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    

  useEffect(() => {
    fetch('http://localhost:3000/dashboard')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки');
        return res.json();
      })
      .then((data) => {
        setDashboard(data)
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Не удалось загрузить дашборд');
        setLoading(false);
      });
  }, []);

    if (loading) return <div className={styles.loader}>Загрузка кандидатов...</div>;
    if (error) return <div className={styles.errorMessage}>{error}</div>;
    if (!dashboard) return null;

 const calculatePercentages = (funnel: number): number => {
        const total = (dashboard.hiring_funnel.hired + 
        dashboard.hiring_funnel.interview +
        dashboard.hiring_funnel.screening +
        dashboard.hiring_funnel.rejected +
        dashboard.hiring_funnel.offer )
        const result = (funnel / total) * 100
        return result
    }
    const percHired = Math.round(calculatePercentages(dashboard.hiring_funnel.hired))
    const percScreening = Math.round(calculatePercentages(dashboard.hiring_funnel.screening))
    const percInterview = Math.round(calculatePercentages(dashboard.hiring_funnel.interview))
    const percOffer = Math.round(calculatePercentages(dashboard.hiring_funnel.offer))
    const percRejected = Math.round(calculatePercentages(dashboard.hiring_funnel.rejected))
return(
        <div className={styles.rightContent}>
            <div className={styles.Header}>
                <h1>Добро пожаловать, Иван!</h1>
                <p>Вот что происходит с вашими кандидатами сегодня</p>
            </div>
            <div className={styles.metricsGrid}>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{dashboard.new_candidates_count}</span>
                    <span className={styles.metricLabel}>Новые кандидаты</span>
                    <span className={styles.metricSub}>За последние 7 дней</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{dashboard.primary_selection_count}</span>
                    <span className={styles.metricLabel}>Прошли скрининг</span>
                    <span className={styles.metricSub}>Соответствуют критериям</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{dashboard.document_verification_count}</span>
                    <span className={styles.metricLabel}>Требуют проверки</span>
                    <span className={styles.metricSub}>Документы на верификации</span>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{dashboard.ready_for_registration_count}</span>
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
                                <div className={styles.funnelFill} style={{ width: `${percOffer}%` }}></div>
                            </div>
                            <span className={styles.funnelPercent}>{percOffer}%</span>
                            <span className={styles.funnelCount}><h3>{dashboard.hiring_funnel.offer}</h3></span>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.funnelStage}>Скрининг</span>
                            <div className={styles.funnelBar}>
                                <div className={styles.funnelFill} style={{ width: `${percScreening}%` }}></div>
                            </div>
                            <span className={styles.funnelPercent}>{percScreening}%</span>
                            <span className={styles.funnelCount}><h3>{dashboard.hiring_funnel.screening}</h3></span>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.funnelStage}>Проверка документов</span>
                            <div className={styles.funnelBar}>
                                <div className={styles.funnelFill} style={{ width: `${percRejected}%` }}></div>
                            </div>
                            <span className={styles.funnelPercent}>{percRejected}%</span>
                            <span className={styles.funnelCount}><h3>{dashboard.hiring_funnel.rejected}</h3></span>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.funnelStage}>Решение HR</span>
                            <div className={styles.funnelBar}>
                                <div className={styles.funnelFill} style={{ width: `${percInterview}%` }}></div>
                            </div>
                            <span className={styles.funnelPercent}>{percInterview}%</span>
                            <span className={styles.funnelCount}><h3>{dashboard.hiring_funnel.interview}</h3></span>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.funnelStage}>Оформление</span>
                            <div className={styles.funnelBar}>
                                <div className={styles.funnelFill} style={{ width: `${percHired}%` }}></div>
                            </div>
                            <span className={styles.funnelPercent}>{percHired}%</span>
                            <span className={styles.funnelCount}><h3>{dashboard.hiring_funnel.hired}</h3></span>
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
                                <div key={dashboard.latest_candidates.id} className={styles.activityItem}>
                                    <div className={styles.activityAvatar}>ПС</div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityHeader}>
                                            <div className={styles.nameWrapper}>
                                                <span className={styles.userFullname}>{dashboard.latest_candidates.full_name}</span>
                                                <span className={styles.activityProc}>92%</span>
                                            </div>
                                            <div className={styles.activityTimeText}>5 минут назад  <span className={styles.activityGreen}></span></div>
                                        </div>
                                        <div className={styles.activityText}>{dashboard.latest_candidates.current_status}</div>
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
            

)
};

export default DashboardMain;