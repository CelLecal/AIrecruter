import React, {useState, useEffect} from 'react';
import styles from './Vacancies.module.css';
import { Link } from 'react-router-dom'

interface Vacancy {
  id: number;
  title: string;
  department: string;
  location: string;
  shift_type: string;
  required_license_category: string;
  min_experience_years: number;
  status: string;
}

const VacanciesPage: React.FC = () => {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
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

      useEffect(() => {
        fetch('http://localhost:3000/vacancies')
          .then((res) => {
            if (!res.ok) throw new Error('Ошибка загрузки');
            return res.json();
          })
          .then((data) => {
            setVacancies(data);
            setLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setError('Не удалось загрузить вакансии');
            setLoading(false);
          });
      }, []);
  const headerSection = (
        <>
        <div className={styles.rightContent}>
            <div className={styles.headerRow}>
                <div>
                    <h1>Вакансии</h1>
                    <p>Управление открытыми позициями компании</p>
                </div>
                <button className={styles.addButton}>+ Добавить вакансию</button>
            </div>

            <div className={styles.searchBar}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Поиск по вакансиям, городам, категориям..." />
            </div>
        </div>
    </>
    );
    const renderContent = () => {
        if (loading) return <div className={styles.loader}>Загрузка кандидатов...</div>;
        if (error) return <div className={styles.errorMessage}>{error}</div>;
        if (vacancies.length === 0) return <div className={styles.noData}>Нет вакансий</div>;

    const firstRow = vacancies.slice(0, 3);
    const secondRow = vacancies.slice(3, 6);

    const renderCard = (vacancy: Vacancy) => (
     
        <div>
            <div className={styles.cardsGrid}>
                {/* 1 */}
                <div className={styles.vacancyCard}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.vacancyTitle}>{vacancy.title}</h3>
                        <span className={`${styles.statusBadge} ${styles.statusOpen}`}>Открыта</span>
                    </div>
                    <div key={vacancy.id} className={styles.cardBody}>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Отдел:</span>
                            <span>{vacancy.department}</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Локация:</span>
                            <span>{vacancy.location}</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Категория прав:</span>
                            <span>{vacancy.required_license_category}</span>
                        </div>
                        <div className={styles.cardRow}>
                            <span className={styles.cardLabel}>Минимальный стаж:</span>
                            <span>{vacancy.min_experience_years} {getYearString(vacancy.min_experience_years)}</span>
                        </div>
                    </div>
                    <div className={styles.cardActions}>
                        <Link to={`/dashboard/description/${vacancy.id}`}>
                            <button className={styles.detailsButton}>Подробнее</button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
    )
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
  );}

export default VacanciesPage;