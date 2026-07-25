import React from 'react';
import dashboardStyles from '../Dashboard/Dashboard.module.css';
import styles from './Analytics.module.css';

const Analytics: React.FC = () => {
    return (
        <div className={dashboardStyles.rightContent}>
            <div className={styles.header}>
                <h1>Аналитика и отчеты</h1>
                <p>Мониторинг эффективности процесса подбора персонала</p>
            </div>

            {/* Карточки */}
            <div className={styles.cardsGrid}>
                <div className={styles.card}>
                    <div className={`${styles.trend} ${styles.trendUp}`}>+15%</div>
                    <div className={styles.value}>22%</div>
                    <div className={styles.label}>Конверсия в найм</div>
                    <div className={styles.subtext}>За последние 6 месяцев</div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles.trend} ${styles.trendDown}`}>-50%</div>
                    <div className={styles.value}>9 дней</div>
                    <div className={styles.label}>Среднее время найма</div>
                    <div className={styles.subtext}>Улучшение с внедрением AI</div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles.trend} ${styles.trendUp}`}>+28%</div>
                    <div className={styles.value}>67%</div>
                    <div className={styles.label}>Автоматический отбор</div>
                    <div className={styles.subtext}>Прошли без вмешательства HR</div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles.trend} ${styles.trendDown}`}>-12%</div>
                    <div className={styles.value}>8%</div>
                    <div className={styles.label}>Ошибки в документах</div>
                    <div className={styles.subtext}>Снижение благодаря OCR</div>
                </div>
            </div>

            {/* воронка и динамика */}
            <div className={styles.chartsRow}>
                <div className={styles.funnelBlock}>
                    <h3 className={styles.blockTitle}>Воронка подбора</h3>
                    <div className={styles.funnelBars}>
                        <div className={styles.funnelItem}>
                            <span className={styles.stageName}>Кандидаты</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '100%' }}></div>
                                <span className={styles.stageValue}>160</span>
                            </div>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.stageName}>Скрининг</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '75%' }}></div>
                                <span className={styles.stageValue}>120</span>
                            </div>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.stageName}>Документы</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '50%' }}></div>
                                <span className={styles.stageValue}>80</span>
                            </div>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.stageName}>HR решение</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '31%' }}></div>
                                <span className={styles.stageValue}>50</span>
                            </div>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.stageName}>Оформление</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '25%' }}></div>
                                <span className={styles.stageValue}>40</span>
                            </div>
                        </div>
                        <div className={styles.funnelItem}>
                            <span className={styles.stageName}>Нанято</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '19%' }}></div>
                                <span className={styles.stageValue}>30</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.funnelLegend}>Количество кандидатов</div>
                </div>

                <div className={styles.timelineBlock}>
                    <h3 className={styles.blockTitle}>Динамика времени найма</h3>
                    <div className={styles.chart}>
                        <div className={styles.barsContainer}>
                            {['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'].map((month, idx) => {
                                const values = [20, 17, 14, 11, 8, 5];
                                const maxValue = 20;
                                const height = (values[idx] / maxValue) * 100;
                                return (
                                    <div key={month} className={styles.barItem}>
                                        <div className={styles.barColumn} style={{ height: `${height}%` }}>
                                            <span className={styles.barValue}>{values[idx]}</span>
                                        </div>
                                        <span className={styles.barLabel}>{month}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.timelineTrend}>Снижение на 50% за 6 месяцев</div>
                    </div>
                </div>
            </div>

            {/* Причины отказов и проблемы с документами */}
            <div className={styles.issuesRow}>
                <div className={styles.pieChartBlock}>
                    <h3 className={styles.blockTitle}>Причины отказов</h3>
                    <div className={styles.pieChartContainer}>
                        <div className={styles.pieChart}>
                            <div className={styles.pie} style={{
                                background: `conic-gradient(
                                    #ef4444 0% 35%,
                                    #f97316 35% 63%,
                                    #eab308 63% 85%,
                                    #22c55e 85% 95%,
                                    #6c63ff 95% 100%
                                )`
                            }}>
                                <div className={styles.pieInner}>
                                    <span className={styles.pieTotal}>100%</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.pieLegend}>
                            <div className={styles.legendItem}>
                                <span className={styles.legendColor} style={{ background: '#ef4444' }}></span>
                                <span className={styles.legendLabel}>Не подходит опыт</span>
                                <span className={styles.legendValue}>35%</span>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={styles.legendColor} style={{ background: '#f97316' }}></span>
                                <span className={styles.legendLabel}>Нет нужных категорий</span>
                                <span className={styles.legendValue}>28%</span>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={styles.legendColor} style={{ background: '#eab308' }}></span>
                                <span className={styles.legendLabel}>Проблемы с документами</span>
                                <span className={styles.legendValue}>22%</span>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={styles.legendColor} style={{ background: '#22c55e' }}></span>
                                <span className={styles.legendLabel}>Отказ кандидата</span>
                                <span className={styles.legendValue}>10%</span>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={styles.legendColor} style={{ background: '#6c63ff' }}></span>
                                <span className={styles.legendLabel}>Другое</span>
                                <span className={styles.legendValue}>5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.docIssuesBlock}>
                    <h3 className={styles.blockTitle}>Проблемы с документами</h3>
                    <div className={styles.docIssuesBars}>
                        <div className={styles.docIssueItem}>
                            <span className={styles.docIssueLabel}>Низкое качество фото</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '100%' }}></div>
                                <span className={styles.docIssueCount}>24</span>
                            </div>
                        </div>
                        <div className={styles.docIssueItem}>
                            <span className={styles.docIssueLabel}>Истекший срок</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '75%' }}></div>
                                <span className={styles.docIssueCount}>18</span>
                            </div>
                        </div>
                        <div className={styles.docIssueItem}>
                            <span className={styles.docIssueLabel}>Несовпадение данных</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '50%' }}></div>
                                <span className={styles.docIssueCount}>12</span>
                            </div>
                        </div>
                        <div className={styles.docIssueItem}>
                            <span className={styles.docIssueLabel}>Недостающие документы</span>
                            <div className={styles.barWrapper}>
                                <div className={styles.bar} style={{ width: '33%' }}></div>
                                <span className={styles.docIssueCount}>8</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.funnelLegend}>Количество случаев</div>

                    <div className={styles.recommendationBlock}>
                        <div className={styles.recommendationIcon}>
                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                        </div>
                        <div className={styles.recommendationText}>
                            <strong>Рекомендация</strong><br />
                            Добавьте инструкции по загрузке документов для снижения количества ошибок
                        </div>
                    </div>
                </div>
            </div>

            {/* распределение по категориям прав */}
            <div className={styles.categoriesChartRow}>
                <div className={styles.categoriesChartBlock}>
                    <h3 className={styles.blockTitle}>Распределение кандидатов по категориям прав</h3>
                    <div className={styles.categoriesBarsContainer}>
                        {[
                            { category: 'C', value: 63, color: '#ef4444' },
                            { category: 'E', value: 31, color: '#f97316' },
                            { category: 'D', value: 27, color: '#eab308' },
                            { category: 'B', value: 60, color: '#22c55e' },
                            { category: 'C+E', value: 20, color: '#6c63ff' }
                        ].map((item) => {
                            const maxValue = 120;
                            const heightPx = (item.value / maxValue) * 180;
                            return (
                                <div key={item.category} className={styles.categoriesBarItem}>
                                    <div
                                        className={styles.categoriesBarColumn}
                                        style={{
                                            height: `${heightPx}px`,
                                            background: item.color
                                        }}>
                                        <span className={styles.categoriesBarValue}>{item.value}</span>
                                    </div>
                                    <span className={styles.categoriesBarLabel}>{item.category}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.funnelLegend}>Количество кандидатов</div>
                </div>
            </div>

            {/* источники, активность, метрики */}
            <div className={styles.insightsRow}>
                <div className={styles.sourcesBlock}>
                    <h3 className={styles.blockTitle}>Эффективность источников</h3>
                    <div className={styles.sourcesListSimple}>
                        <div className={styles.sourceItemSimple}>
                            <span className={styles.sourceNameSimple}>hh.ru</span>
                            <span className={styles.sourceStatsSimple}>42 кандидата • 12 нанято</span>
                        </div>
                        <div className={styles.sourceItemSimple}>
                            <span className={styles.sourceNameSimple}>Авито</span>
                            <span className={styles.sourceStatsSimple}>28 кандидатов • 8 нанято</span>
                        </div>
                        <div className={styles.sourceItemSimple}>
                            <span className={styles.sourceNameSimple}>Рекомендации</span>
                            <span className={styles.sourceStatsSimple}>18 кандидатов • 7 нанято</span>
                        </div>
                        <div className={styles.sourceItemSimple}>
                            <span className={styles.sourceNameSimple}>Соц. сети</span>
                            <span className={styles.sourceStatsSimple}>15 кандидатов • 3 нанято</span>
                        </div>
                    </div>
                </div>

                <div className={styles.activityBlock}>
                    <h3 className={styles.blockTitle}>Активность по дням недели</h3>
                    <div className={styles.activityBarsList}>
                        {[
                            { day: 'Понедельник', value: 85 },
                            { day: 'Вторник', value: 92 },
                            { day: 'Среда', value: 78 },
                            { day: 'Четверг', value: 88 },
                            { day: 'Пятница', value: 95 },
                            { day: 'Суббота', value: 45 },
                            { day: 'Воскресенье', value: 32 }
                        ].map((item) => {
                            const maxValue = 95;
                            const widthPercent = (item.value / maxValue) * 100;
                            return (
                                <div key={item.day} className={styles.activityItemVertical}>
                                    <span className={styles.activityDayLabelVertical}>{item.day}</span>
                                    <div className={styles.barWrapper}>
                                        <div className={styles.bar} style={{ width: `${widthPercent}%` }}></div>
                                        <span className={styles.activityDayValueVertical}>{item.value}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.funnelLegend}>Количество заявок </div>
                </div>

                <div className={styles.metricsBlock}>
                    <h3 className={styles.blockTitle}>Ключевые метрики</h3>
                    <div className={styles.metricItem}>
                        <div className={styles.metricTitle}>Качество кандидатов</div>
                        <div className={styles.metricBigValue}>8.4/10</div>
                        <div className={styles.metricSubtext}>средняя оценка HR</div>
                    </div>
                    <div className={styles.metricItem}>
                        <div className={styles.metricTitle}>Экономия времени</div>
                        <div className={styles.metricBigValue}>70%</div>
                        <div className={styles.metricSubtext}>с внедрением AI</div>
                    </div>
                    <div className={styles.metricItem}>
                        <div className={styles.metricTitle}>Удовлетворенность</div>
                        <div className={styles.metricBigValue}>92%</div>
                        <div className={styles.metricSubtext}>HR-менеджеров</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;