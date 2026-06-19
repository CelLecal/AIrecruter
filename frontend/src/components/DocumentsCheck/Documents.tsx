import React from 'react';
import dashboardStyles from '../Dashboard/Dashboard.module.css';
import styles from './Documents.module.css';

const Documents: React.FC = () => {
  return (
    <div className={dashboardStyles.rightContent}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Проверка документов</h1>
        <p className={styles.subtitle}>OCR-извлечение и верификация данных кандидата</p>
      </div>

      {/* Карточка кандидата */}
      <div className={styles.candidateCard}>
        <div className={styles.candidateRow}>
          <div className={styles.initialsCircle}><span>СП</span></div>
          <div className={styles.candidateInfo}>
            <div className={styles.candidateName}>Петров Сергей Иванович</div>
            <div className={styles.candidateMeta}>Кандидат #001234 • Москва</div>
          </div>
          <div className={styles.statsRight}>
            <div className={styles.statsItem}>
              <span className={styles.statsLabel}>Загружено документов</span>
              <span className={styles.statsValue}>4/4</span>
            </div>
            <div className={styles.statsItem}>
              <span className={styles.statsLabel}>Прогресс</span>
              <span className={styles.statsPercent}>75%</span>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.threeColumns}>
        {/* список документов */}
        <div className={styles.documentsListBlock}>
          <h3 className={styles.blockTitle}>Документы</h3>
          <div className={styles.docItemsList}>
            <div className={styles.docItem}>
              <span className={styles.docName}>Паспорт</span>
              <span className={styles.docPages}>2 стр.</span>
            </div>
            <div className={styles.docItem}>
              <span className={styles.docName}>Водительское удостоверение</span>
              <span className={styles.docPages}>1 стр.</span>
            </div>
            <div className={styles.docItem}>
              <span className={styles.docName}>Диплом</span>
              <span className={styles.docPages}>1 стр.</span>
            </div>
            <div className={styles.docItem}>
              <span className={styles.docName}>ADR сертификат</span>
              <span className={styles.docPages}>1 стр.</span>
            </div>
          </div>
          <button className={styles.addDocButton}>+ Добавить документ</button>
        </div>

        {/* паспорт */}
        <div className={styles.passportBlock}>
          <h3 className={styles.blockTitle}>Паспорт</h3>
          <h4 className={styles.documentTitle}>ПАСПОРТ ГРАЖДАНИНА РФ</h4>
          <div className={styles.passportGrid}>
            <div className={styles.passportField}><span className={styles.fieldLabel}>Фамилия</span><span className={styles.fieldValue}>ПЕТРОВ</span></div>
            <div className={styles.passportField}><span className={styles.fieldLabel}>Имя</span><span className={styles.fieldValue}>СЕРГЕЙ</span></div>
            <div className={styles.passportField}><span className={styles.fieldLabel}>Отчество</span><span className={styles.fieldValue}>ИВАНОВИЧ</span></div>
            <div className={styles.passportField}><span className={styles.fieldLabel}>Дата рождения</span><span className={styles.fieldValue}>15.03.1988</span></div>
            <div className={styles.passportField}><span className={styles.fieldLabel}>Серия и номер</span><span className={styles.fieldValue}>4512 567890</span></div>
            <div className={styles.passportField}><span className={styles.fieldLabel}>Дата выдачи</span><span className={styles.fieldValue}>20.03.2018</span></div>
            <div className={styles.passportField}><span className={styles.fieldLabel}>Место рождения</span><span className={styles.fieldValue}>г. Москва</span></div>
          </div>
        </div>

        {/* результаты проверки  */}
        <div className={styles.resultsBlock}>
          <h3 className={styles.blockTitle}>Результаты проверки</h3>
          <div className={styles.resultsList}>
            <div className={styles.resultItem}><div className={styles.resultLabel}>Подлинность</div><div className={styles.resultDesc}>Документ прошел проверку на подлинность</div></div>
            <div className={styles.resultItem}><div className={styles.resultLabel}>Качество изображения</div><div className={styles.resultDesc}>Отличное качество. OCR точность 98%</div></div>
            <div className={styles.resultItem}><div className={styles.resultLabel}>Совпадение данных</div><div className={styles.resultDesc}>ФИО и дата рождения совпадают</div></div>
            <div className={styles.resultItem}><div className={styles.resultLabel}>Срок действия</div><div className={styles.resultDesc}>Действителен до 10.04.2028</div></div>
          </div>
          <div className={styles.extractedData}>
            <h4 className={styles.sectionSubtitle}>Извлеченные данные</h4>
            <div className={styles.extractedGrid}>
              <div className={styles.extractedField}><span className={styles.extractedLabel}>ФИО</span><span className={styles.extractedValue}>Петров Сергей Иванович</span></div>
              <div className={styles.extractedField}><span className={styles.extractedLabel}>Дата рождения</span><span className={styles.extractedValue}>15.03.1988</span></div>
              <div className={styles.extractedField}><span className={styles.extractedLabel}>Номер документа</span><span className={styles.extractedValue}>77 АВ 123456</span></div>
              <div className={styles.extractedField}><span className={styles.extractedLabel}>Категория прав</span><span className={styles.extractedValue}>C E</span></div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.buttonGrid}>
        <div className={styles.emptyColumn}></div>   
        <div className={styles.emptyColumn}></div>   
        <div className={styles.actionButtonsColumn}>
          <button className={`${styles.actionBtn} ${styles.confirmBtn}`}>Подтвердить документ</button>
          <button className={`${styles.actionBtn} ${styles.manualBtn}`}>Ручная проверка</button>
          <button className={`${styles.actionBtn} ${styles.reuploadBtn}`}>Запросить повторную загрузку</button>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Documents;