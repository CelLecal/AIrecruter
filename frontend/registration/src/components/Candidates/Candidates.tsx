import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Candidates.module.css';

interface Candidate {
  id: number;
  full_name: string;
  city: string;
  current_status: string;
  fit_score: number;
  license_category: string;
  experience_years: number;
  risk_level: string;
}

const Candidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/candidates')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки');
        return res.json();
      })
      .then((data) => {
        setCandidates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Не удалось загрузить кандидатов');
        setLoading(false);
      });
  }, []);

  const headerSection = (
    <>
      <div className={styles.headerRow}>
        <div>
          <h1>Кандидаты</h1>
          <p>Управление всеми кандидатами в одном месте</p>
        </div>
        <button className={styles.addButton}>+ Добавить кандидата</button>
      </div>

      <div className={styles.searchFilterRow}>
        <div className={styles.searchFilterTop}>
          <div className={styles.searchBar}>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Поиск по кандидатам, номеру телефона..." />
          </div>
          <button className={styles.filterButton}>
            <i className="fa fa-filter" aria-hidden="true"></i> Фильтры
          </button>
        </div>
        <div className={styles.filtersRow}>
          <button className={styles.filterChip}>Все кандидаты</button>
          <button className={styles.filterChip}>Скрининг</button>
          <button className={styles.filterChip}>Проверка документов</button>
          <button className={styles.filterChip}>Готовы к найму</button>
          <button className={styles.filterChip}>Высокий балл</button>
        </div>
      </div>
    </>
  );

  const renderContent = () => {
    if (loading) return <div className={styles.loader}>Загрузка кандидатов...</div>;
    if (error) return <div className={styles.errorMessage}>{error}</div>;
    if (candidates.length === 0) return <div className={styles.noData}>Нет кандидатов</div>;

    const firstRow = candidates.slice(0, 3);
    const secondRow = candidates.slice(3, 6);

    const renderCard = (candidate: Candidate) => (
      <div key={candidate.id} className={styles.candidateCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardAvatar}>
            {candidate.full_name.slice(0, 2).toUpperCase()}
          </div>
          <div className={styles.cardTitle}>
            <div className={styles.cardName}>{candidate.full_name}</div>
            <div className={styles.cardCity}>
              <i className="fa fa-map-pin" aria-hidden="true"></i> {candidate.city}
            </div>
          </div>
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Категория прав:</span>
            <span>{candidate.license_category}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Стаж:</span>
            <span>{candidate.experience_years ? `${candidate.experience_years} лет` : null}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Соответствие:</span>
            <span className={styles.matchValue}>{candidate.fit_score}%</span>
          </div>
        </div>
        <div className={styles.cardStatusRow}>
          <span className={styles.statusBadge}>{candidate.current_status}</span>
          <span className={styles.riskBadge}>{candidate.risk_level}</span>
        </div>
        <Link to={`/dashboard/candidates/${candidate.id}`} style={{ textDecoration: 'none' }}>
          <button className={styles.openButton}>
            <i className="fa fa-eye" aria-hidden="true"></i> Открыть</button>
        </Link>
      </div>
    );

    return (
      <>
        <div className={styles.cardsRow}>{firstRow.map(renderCard)}</div>
        {secondRow.length > 0 && <div className={styles.cardsRow}>{secondRow.map(renderCard)}</div>}
      </>
    );
  };

  return (
    <div className={styles.rightContent}>
      {headerSection}
      {renderContent()}
    </div>
  );
};

export default Candidates;