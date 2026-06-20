import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './AiProfile.module.css';

interface Candidate {
  id: number;
  full_name: string;
  city: string;
  phone: string;
  email: string;
  birth_date: string;
  current_status: string;
  risk_level: string;
  license_category: string;
  experience_years: number;
  hiring_score: number;
  ai_summary: string;
  hr_recommendation: string;
  created_at: string;
  passport?: string;
  birth_place?: string;
  issue_date?: string;
}
const DecisionPage: React.FC = () => {
  const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState('');
  const maxLength = 500;
  const [candidates, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {

    fetch(`http://localhost:3000/candidates/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Кандидат не найден');
        return res.json();
      })
      .then((data) => {
        setCandidate(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const formatBirthDate = (dateStr: string) => {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    const age = new Date().getFullYear() - date.getFullYear();
    return `${age}  ${getYearString(age)}`;
  };
    const getRiskClass = (risk?: string) => {
    switch (risk?.toLowerCase()) {
      case 'низкий': return 'Низкий уровень риска';
      case 'средний': return  'Средний уровень риска';
      case 'высокий': return  'Высокий уровень риска';
      default: return '';
    }
  };

    const getYearString = (age: number) => {
    const cases = ['лет', 'год', 'года'];
    const remainder100 = age % 100;
    const remainder10 = age % 10;
    
    if (remainder100 > 10 && remainder100 < 20) {
        return cases[0];
    }
    if (remainder10 === 1) {
        return cases[1];
    }
    if (remainder10 >= 2 && remainder10 <= 4) {
        return cases[2]
    }
    return cases[0];
}
    if (loading) return <div className={styles.loader}>Загрузка кандидатов...</div>;
    if (error) return <div className={styles.errorMessage}>{error}</div>;
    if (!candidates) return null;
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value.slice(0, maxLength));
  };
const getScoreClassNum = (score: number) => {
  if (score > 70) return 'Высокое соотвествие';
  if (score >= 30 && score <= 70) return 'Среднее соотвествие';
  if (score < 30) return 'Низкое соотвествие';
  return '';
};

  const goBack = () => {
    navigate(-1); // возврат на предыдущую страницу
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>AI профиль</h1>
        <p>Оцените кандидата и примите окончательное решение</p>
      </div>

      <div className={styles.twoColumns}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <div className={styles.candidateSummary}>
            <div className={styles.topRow}>
              <div className={styles.initials}>СП</div>
              <div className={styles.info}>
                <h2>{candidates.full_name}</h2>
                <p>{formatBirthDate(candidates.birth_date)}  - {candidates.city} - Категории {candidates.license_category} - Стаж {candidates.experience_years} {getYearString(candidates.experience_years)}</p>
              </div>
            </div>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.check}>{candidates.hiring_score}%</div>
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
                <div className={styles.warning}>{candidates.risk_level}</div>
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

          {/* Комментарий и обоснование */}
          <div className={styles.commentSection}>
            <h3>Комментарий и обоснование</h3>
            <textarea
              className={styles.commentTextarea}
              placeholder="Укажите причины принятого решения, дополнительные комментарии или рекомендации..."
              value={comment}
              onChange={handleCommentChange}
              rows={5}
            />
            <div className={styles.charCounter}>
              {comment.length} / {maxLength} символов
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
                {candidates.hr_recommendation}
              </p>
              <ul>
                <li><i className="fas fa-check"></i> {getScoreClassNum(candidates.hiring_score)} ({candidates.hiring_score}%)</li>
                <li><i className="fas fa-check"></i> {getRiskClass(candidates.risk_level)}</li>
                <li><i className="fas fa-check"></i> Документы проверены</li>
              </ul>
            </div>
          </div>

          <div className={styles.timeline}>
            <h3>Путь кандидата</h3>
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><i className="fas fa-check"></i></div>
                <div className={styles.timelineContent}>
                  <span>Документы проверены</span>
                  <span className={styles.date}>26.03.2026 16:20</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><i className="fas fa-check"></i></div>
                <div className={styles.timelineContent}>
                  <span>Скрининг завершен</span>
                  <span className={styles.date}>26.03.2026 14:37</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><i className="fas fa-check"></i></div>
                <div className={styles.timelineContent}>
                  <span>Первичная анкета</span>
                  <span className={styles.date}>26.03.2026 14:15</span>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}><i className="fas fa-check"></i></div>
                <div className={styles.timelineContent}>
                  <span>Кандидат добавлен</span>
                  <span className={styles.date}>26.03.2026 14:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.auditInfo}>
            <h3>Информация для аудита</h3>
            <div className={styles.auditRow}>
              <span className={styles.auditLabel}>Ответственный HR</span>
              <span>Иван Александров</span>
            </div>
            <div className={styles.auditRow}>
              <span className={styles.auditLabel}>Дата проверки</span>
              <span>26 марта 2026</span>
            </div>
            <div className={styles.auditRow}>
              <span className={styles.auditLabel}>Время на обработку</span>
              <span>6 часов 20 минут</span>
            </div>
            <div className={styles.auditFooter}>
              Все действия записываются в журнал аудита в соответствии с требованиями безопасности
            </div>
          </div>

          <div className={styles.quickActions}>
            <h3>Быстрые действия</h3>
            <div className={styles.actionButtons}>
              <button className={styles.actionButton} onClick={goBack}>
                Просмотреть профиль
              </button>
              <button className={styles.actionButton}>
                История скрининга
              </button>
              <button className={styles.actionButton}>Проверка документов</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionPage;