import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './CandidatesProfile.module.css';

interface Documents {
  id: number;
  candidate_id: number;
  document_type: string;
  file_name: string;
  file_path: string;
  upload_status: string;
  uploaded_at: Date;
}

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



const CandidatesProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [prompt] = useState('')
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [docs, setDocs] = useState<Documents | null>(null)
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

    useEffect(() => {

    fetch(`http://localhost:3000/candidate-documents/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Кандидат не найден');
        return res.json();
      })
      .then((data) => {
        setDocs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);


  const handleClick = async () => {
    setLoading(true);
    
    try {
      const res = await fetch(`http://localhost:3000/candidates/${id}/analyze-ai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: prompt })
      });
      
      const data = await res.json();
      
      localStorage.setItem('result', JSON.stringify(data));
        if (candidate) {
navigate(`/dashboard/aiprofile/${candidate.id}`, { state: { candidate } });
        }
    } 
    finally{    
      setLoading(false);
    }

  };

  if (loading) return <div className={styles.profileContainer}>Загрузка...</div>;
  if (error) return <div className={styles.profileContainer}>Ошибка: {error}</div>;
  if (!candidate) return <div className={styles.profileContainer}>Кандидат не найден</div>;
  if (!docs) return <div className={styles.profileContainer}>Документы не найдены</div>;

    //для склонения "год"
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


  const getRiskClass = (risk?: string) => {
    switch (risk?.toLowerCase()) {
      case 'низкий': return styles.riskLow;
      case 'средний': return styles.riskMedium;
      case 'высокий': return styles.riskHigh;
      default: return '';
    }
  };

const getScoreClassNum = (score: number) => {
  if (score > 70) return styles.riskLow;
  if (score >= 30 && score <= 70) return styles.riskMedium;
  if (score < 30) return styles.riskHigh;
  return '';
};

  const formatBirthDate = (dateStr: string) => {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    const age = new Date().getFullYear() - date.getFullYear();
    return `${date.toLocaleDateString('ru-RU')} (${age}  ${getYearString(age)})`;
  };
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1>{candidate.full_name}</h1>
        <div className={styles.headerMeta}>
          <span><i className="fa fa-map-marker-alt"></i> {candidate.city}</span>
          <span><i className="fa fa-phone-alt"></i> {candidate.phone}</span>
          <span><i className="fa fa-envelope"></i> {candidate.email}</span>
        </div>
        <div className={styles.statusRow}>
          <span className={styles.statusBadge}>{candidate.current_status}</span>
          <span className={`${styles.riskBadge} ${getRiskClass(candidate.risk_level)}`}>
            {candidate.risk_level || '—'}
          </span>
        </div>
      </div>

      <div className={styles.twoColumns}>
        <div className={styles.leftColumn}>
          {/* Рекомендации AI */}
          <div className={styles.card}>
            <h3><i className="fa fa-robot"></i> Рекомендации AI</h3>
            <p className={styles.recommendationText}>
              {candidate.ai_summary || 'Нет данных'}
            </p>
            <div className={styles.recommendationBadge}>
              {candidate.hr_recommendation || 'Рекомендация не указана'}
            </div>
          </div>

          {/* Личные данные */}
          <div className={styles.card}>
            <h3><i className="fa fa-user"></i> Личные данные</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Дата рождения:</span>
              <span>{formatBirthDate(candidate.birth_date)}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Паспорт:</span>
              <span>{candidate.passport || '—'}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Место рождения:</span>
              <span>{candidate.birth_place || '—'}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Дата выдачи:</span>
              <span>{candidate.issue_date || '—'}</span>
            </div>
          </div>

          {/* Водительские данные */}
          <div className={styles.card}>
            <h3><i className="fa fa-id-card"></i> Водительские данные</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Категория прав:</span>
              <div className={styles.categories}>
                {candidate.license_category ? (
                  candidate.license_category.split(',').map((cat, idx) => (
                    <span key={idx} className={styles.categoryTag}>{cat.trim()}</span>
                  ))
                ) : (
                  <span>—</span>
                )}
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Общий стаж вождения:</span>
              <span>{candidate.experience_years ? `${candidate.experience_years} ${getYearString(candidate.experience_years)}` : '—'}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Стаж грузовых перевозок:</span>
              <span>—</span>
            </div>
          </div>

          <div className={styles.card}>
            <h3><i className="fa fa-certificate"></i> Дополнительные сертификаты</h3>
            <ul className={styles.certList}>
              <li>Информация не загружена</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3><i className="fa fa-briefcase"></i> Предпочтения и условия</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Желаемый график:</span>
              <span>—</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Желаемая ЗП:</span>
              <span>—</span>
            </div>
          </div>

          <div className={styles.card}>
            <h3><i className="fa fa-clock"></i> Доступности</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Удостоверение:</span>
              <span>—</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Действительно до:</span>
              <span>—</span>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Действия */}
          <div className={styles.card}>
            <h3><i className="fa fa-tasks"></i> Действия</h3>
            <div className={styles.actionButtons}>
              <button className={styles.actionPrimary}>Подготовить оформление →</button>
              <button className={styles.actionHr} id="AnalyzeAi" onClick={handleClick}>Сформировать AI профиль</button>
              <button className={styles.actionSecondary}>Запросить уточнение</button>
              <button className={styles.actionDanger}>Отклонить</button>
            </div>
          </div>

          {/* Документы */}
          <div className={styles.card}>
            <h3><i className="fa fa-file-alt"></i> Проверенные документы</h3>
            <div className={styles.docList}>
              <div className={styles.docItem}><i className="fa fa-check-circle">{docs.document_type}</i> {}</div>
            </div>
            <a href="#" className={styles.viewAllLink}>Просмотреть все документы →</a>
          </div>

          {/* История */}
          <div className={styles.card}>
            <h3><i className="fa fa-history"></i> История</h3>
            <div className={styles.historyList}>
              <div className={styles.historyItem}>
                <span><i className="fa fa-check-circle-o"></i> Документы проверены</span>
                <span className={styles.historyDate}>—</span>
              </div>
              <div className={styles.historyItem}>
                <span><i className="fa fa-check-circle-o"></i> Скрининг завершен</span>
                <span className={styles.historyDate}>—</span>
              </div>
              <div className={styles.historyItem}>
                <span><i className="fa fa-user-plus"></i> Кандидат добавлен</span>
                <span className={styles.historyDate}>
                  {candidate.created_at ? new Date(candidate.created_at).toLocaleDateString('ru-RU') : '—'}
                </span>
              </div>
            </div>
          </div>

          {/* Оценка рисков */}
          <div className={styles.card}>
            <h3><i className="fa fa-chart-line"></i> Оценка рисков</h3>
            <div className={styles.riskRow}>
              <span>Соответствие требованиям</span>
              <span className={getScoreClassNum(candidate.hiring_score)}>{candidate.hiring_score ?? 0}%</span>
            </div>
            <div className={styles.riskRow}>
              <span>Общий риск</span>
              <span className={getRiskClass(candidate.risk_level)}>{candidate.risk_level || '—'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesProfile;