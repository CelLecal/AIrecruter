import React from 'react';
import styles from './AiProfile.module.css';

const DecisionPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Принятие решения</h1>
        <p>Оцените кандидата и примите окончательное решение</p>
      </div>

      <div className={styles.twoColumns}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <div className={styles.candidateSummary}>
            <div className={styles.topRow}>
              <div className={styles.initials}>СП</div>
              <div className={styles.info}>
                <h2>Петров Сергей Иванович</h2>
                <p>38 лет - Москва - Категории C, E - Стаж 8 лет</p>
              </div>
            </div>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.check}>92%</div>
                <span>Скрининг пройден</span>
              </div>
              <div className={styles.metric}>
                <div className={styles.check}>4/4</div>
                <span>Документы проверены</span>
              </div>
              <div className={styles.metric}>
                <div className={styles.check}>Низкий</div>
                <span>ADR сертификат</span>
              </div>
              <div className={styles.metric}>
                <div className={styles.warning}>Низкий</div>
                <span>Уровень риска</span>
              </div>
            </div>
          </div>

          <div className={styles.decisionSection}>
            <h3>Выберите решение</h3>
            <div className={styles.buttonsGrid}>
              <button className={`${styles.decisionButton} ${styles.btnApprove}`}>
                <i className="far fa-thumbs-up" aria-hidden="true"></i>
                <div className={styles.buttonTextWrapper}>
                  <span>Одобрить</span>
                  <span className={styles.buttonDesc}>Кандидат полностью соответствует требованиям</span>
                </div>
              </button>
              <button className={`${styles.decisionButton} ${styles.btnInterview}`}>
                <i className="far fa-calendar-check" aria-hidden="true"></i>
                <div className={styles.buttonTextWrapper}>
                  <span>Назначить собеседование</span>
                  <span className={styles.buttonDesc}>Требуется личная встреча для принятия решения</span>
                </div>
              </button>
              <button className={`${styles.decisionButton} ${styles.btnRequest}`}>
                <i className="far fa-file-alt" aria-hidden="true"></i>
                <div className={styles.buttonTextWrapper}>
                  <span>Запросить доп. документы</span>
                  <span className={styles.buttonDesc}>Необходимы дополнительные подтверждающие документы</span>
                </div>
              </button>
              <button className={`${styles.decisionButton} ${styles.btnReject}`}>
                <i className="fas fa-times" aria-hidden="true"></i>
                <div className={styles.buttonTextWrapper}>
                  <span>Отклонить</span>
                  <span className={styles.buttonDesc}>Кандидат не соответствует требованиям вакансии</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={styles.rightColumn}>
          <div className={styles.aiRecommendation}>
            <div className={styles.aiHeader}>
              <i className="fas fa-robot" aria-hidden="true"></i>
              <div className={styles.aiText}>
                <span className={styles.aiTitle}>AI рекомендует</span>
                <span className={styles.aiDecision}>Одобрить кандидата</span>
              </div>
            </div>
            <div className={styles.recommendationCard}>
              <p>
                Кандидат показал отличные результаты на всех этапах отбора. Все документы подтверждены, есть дополнительные сертификаты.
              </p>
              <ul>
                <li><i className="fas fa-check"></i> Высокое соответствие (92%)</li>
                <li><i className="fas fa-check"></i> Низкий уровень риска</li>
                <li><i className="fas fa-check"></i> Документы проверены</li>
              </ul>
            </div>
          </div>

          <div className={styles.timeline}>
            <h3>Путь кандидата</h3>
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <i className="fas fa-check"></i>
                </div>
                <div className={styles.timelineContent}>
                  <span>Документы проверены</span>
                  <span className={styles.date}>26.03.2026 16:20</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <i className="fas fa-check"></i>
                </div>
                <div className={styles.timelineContent}>
                  <span>Скрининг завершен</span>
                  <span className={styles.date}>26.03.2026 14:37</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <i className="fas fa-check"></i>
                </div>
                <div className={styles.timelineContent}>
                  <span>Первичная анкета</span>
                  <span className={styles.date}>26.03.2026 14:15</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <i className="fas fa-check"></i>
                </div>
                <div className={styles.timelineContent}>
                  <span>Кандидат добавлен</span>
                  <span className={styles.date}>26.03.2026 14:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionPage;