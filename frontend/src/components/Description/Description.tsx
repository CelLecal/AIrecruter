import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Description.module.css';

interface Desc {
  id: number;
  title: string;
  department: string;
  location: string;
  shift_type: string;
  required_license_category: string;
  min_experience_years: number;
  status: string;
}

const DescriptionPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [desc, setDesc] = useState<Desc | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

useEffect(() => {
  if (!id) return;


  fetch(`http://localhost:3000/vacancies/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error('Вакансия не найдена');
      return res.json();
    })
    .then((data) => {
      setDesc(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, [id]);



        if (loading) return <div className={styles.loader}>Загрузка вакансии...</div>;
        if (error) return <div className={styles.errorMessage}>{error}</div>;
        if (!desc) return <div className={styles.profileContainer}>Вакансия не найдена</div>;
    return (
        <div className={styles.vacancyContainer}>
            <div className={styles.vacancyHeader}>
                <h1>{desc.title}</h1>
                <div className={styles.headerMeta}>
                    <span><i className="fa fa-building"></i> Отдел: {desc.department}</span>
                    <span><i className="fa fa-map-marker-alt"></i> Локация: {desc.location}</span>
                    <span><i className="fa fa-id-card"></i> Категория прав: {desc.required_license_category}</span>
                    <span><i className="fa fa-clock"></i> Минимальный стаж: {desc.min_experience_years} лет</span>
                </div>
            </div>

            <div className={styles.twoColumns}>
                <div className={styles.leftColumn}>
                    <div className={styles.card}>
                        <h3><i className="fa fa-bus"></i> Описание работы</h3>
                        <p>
                            Приглашаем опытных водителей автобуса для работы на городских и междугородних маршрутах.
                            Вы будете обеспечивать безопасную перевозку пассажиров, соблюдать расписание и правила дорожного движения.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3><i className="fa fa-check-circle"></i> Требования</h3>
                        <ul className={styles.requirementsList}>
                            <li><i className="fa fa-id-card"></i> Наличие водительского удостоверения категории <strong>{desc.required_license_category}</strong> (обязательно)</li>
                            <li><i className="fa fa-chart-line"></i> Стаж управления автобусом от {desc.min_experience_years} лет</li>
                            <li><i className="fa fa-clock"></i> Отсутствие лишений и грубых нарушений ПДД за последние 3 года</li>
                            <li><i className="fa fa-users"></i> Коммуникабельность, ответственность, знание устройства автобуса</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3><i className="fa fa-certificate"></i> Необходимые лицензии и сертификаты</h3>
                        <div className={styles.licenses}>
                            <div className={styles.licenseBadge}>Категория {desc.required_license_category}</div>
                            <div className={styles.licenseBadge}>Медицинская справка</div>
                            <div className={styles.licenseBadge}>Карта водителя</div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.card}>
                        <h3><i className="fa fa-briefcase"></i> Условия работы</h3>
                        <ul className={styles.conditionsList}>
                            <li><i className="fa fa-calendar"></i> График: {desc.shift_type} (5/2)</li>
                            <li><i className="fa fa-ruble-sign"></i> Заработная плата: 80 000 – 110 000 ₽</li>
                            <li><i className="fa fa-home"></i> Официальное трудоустройство по ТК РФ</li>
                            <li><i className="fa fa-car"></i> Предоставление исправного автобуса </li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3><i className="fa fa-gem"></i> Преимущества для сотрудников</h3>
                        <div className={styles.bonusList}>
                            <span>✓ Корпоративное обучение</span>
                            <span>✓ Премии за безаварийную работу</span>
                            <span>✓ Оплата медосмотров</span>
                            <span>✓ Скидки на топливо для личного авто</span>
                            <span>✓ Респект от нас</span>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3><i className="fa fa-envelope"></i> Контакты HR</h3>
                        <div className={styles.contactInfo}>
                            <p><i className="fa fa-phone-alt"></i> +7 (495) 123-45-67</p>
                            <p><i className="fa fa-envelope"></i> rekruter@gmail.com</p>
                        </div>
                        <div className={styles.actionButtons}>
                            <button className={styles.actionPrimary}>Откликнуться на вакансию</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DescriptionPage;