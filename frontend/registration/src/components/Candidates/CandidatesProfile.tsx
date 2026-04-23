import React from 'react';
import styles from './CandidatesProfile.module.css';

const CandidatesProfile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1>Петров Сергей Иванович</h1>
        <div className={styles.headerMeta}>
          <span><i className="fa fa-map-marker-alt"></i> Москва</span>
          <span><i className="fa fa-phone-alt"></i> +7 (999) 123-45-67</span>
          <span><i className="fa fa-envelope"></i> petrov@email.com</span>
        </div>
        <div className={styles.statusRow}>
          <span className={styles.statusBadge}>Готов к оформлению</span>
          <span className={`${styles.riskBadge} ${styles.riskLow}`}>Низкий риск</span>
        </div>
      </div>

      <div className={styles.twoColumns}>
        <div className={styles.leftColumn}>
          <div className={styles.card}>
            <h3><i className="fa fa-robot"></i> Рекомендации AI</h3>
            <p className={styles.recommendationText}>
              Кандидат демонстрирует высокое соответствие требованиям вакансии в области категории C/E. 
              Обладает обширным опытом (8 лет), все документы проверены и подтверждены. 
              Наличие ADR сертификата является дополнительным преимуществом. Рекомендуется к приему на работу.
            </p>
            <div className={styles.recommendationBadge}>Рекомендован к найму</div>
          </div>

      
          <div className={styles.card}>
            <h3><i className="fa fa-user"></i> Личные данные</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Дата рождения:</span>
              <span>15 марта 1988 г. (38 лет)</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Паспорт:</span>
              <span>4512 567890</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Место рождения:</span>
              <span>г. Москва</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Дата выдачи:</span>
              <span>20.03.2018</span>
            </div>
          </div>

      
          <div className={styles.card}>
            <h3><i className="fa fa-id-card"></i> Водительские данные</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Категория прав:</span>
              <div className={styles.categories}>
                <span className={styles.categoryTag}>C</span>
                <span className={styles.categoryTag}>E</span>
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Общий стаж вождения:</span>
              <span>8 лет</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Стаж грузовых перевозок:</span>
              <span>5 лет</span>
            </div>
          </div>


          <div className={styles.card}>
            <h3><i className="fa fa-certificate"></i> Дополнительные сертификаты</h3>
            <ul className={styles.certList}>
              <li>ADR (перевозка опасных грузов)</li>
            </ul>
          </div>


          <div className={styles.card}>
            <h3><i className="fa fa-briefcase"></i> Предпочтения и условия</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Желаемый график:</span>
              <span>Сменный 2/2</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Желаемая ЗП:</span>
              <span>80 000 – 100 000 ₽</span>
            </div>
          </div>

     
          <div className={styles.card}>
            <h3><i className="fa fa-clock"></i> Доступности</h3>
            <div className={styles.infoRow}>
              <span className={styles.label}>Удостоверение:</span>
              <span>77 AB 123456</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Действительно до:</span>
              <span>10.04.2026</span>
            </div>
          </div>
        </div>


        <div className={styles.rightColumn}>
          <div className={styles.card}>
            <h3><i className="fa fa-tasks"></i> Действия</h3>
            <div className={styles.actionButtons}>
              <button className={styles.actionPrimary}>Подготовить оформление →</button>
              <button className={styles.actionHr}>Решение HR</button>
              <button className={styles.actionSecondary}>Запросить уточнение</button>
              <button className={styles.actionDanger}>Отклонить</button>
            </div>
          </div>


          <div className={styles.card}>
            <h3><i className="fa fa-file-alt"></i> Проверенные документы</h3>
            <div className={styles.docList}>
              <div className={styles.docItem}><i className="fa fa-check-circle"></i> Паспорт</div>
              <div className={styles.docItem}><i className="fa fa-check-circle"></i> Вод. удостоверение</div>
              <div className={styles.docItem}><i className="fa fa-check-circle"></i> Диплом</div>
              <div className={styles.docItem}><i className="fa fa-check-circle"></i> ADR сертификат</div>
            </div>
            <a href="#" className={styles.viewAllLink}>Просмотреть все документы →</a>
          </div>


          <div className={styles.card}>
            <h3><i className="fa fa-history"></i> История</h3>
            <div className={styles.historyList}>
              <div className={styles.historyItem}>
                <span><i className="fa fa-check-circle-o"></i> Документы проверены</span>
                <span className={styles.historyDate}>2 часа назад</span>
              </div>
              <div className={styles.historyItem}>
                <span><i className="fa fa-check-circle-o"></i> Скрининг завершен</span>
                <span className={styles.historyDate}>4 часа назад</span>
              </div>
              <div className={styles.historyItem}>
                <span><i className="fa fa-user-plus"></i> Кандидат добавлен</span>
                <span className={styles.historyDate}>25 марта</span>
              </div>
            </div>
          </div>

  
          <div className={styles.card}>
            <h3><i className="fa fa-chart-line"></i> Оценка рисков</h3>
            <div className={styles.riskRow}>
              <span>Проверка документов</span>
              <span className={styles.riskValueLow}>Низкий</span>
            </div>
            <div className={styles.riskRow}>
              <span>Соответствие требованиям</span>
              <span className={styles.riskValueHigh}>Высокое</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesProfile;