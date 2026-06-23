import React, { useState } from 'react';
import dashboardStyles from '../Dashboard/Dashboard.module.css';
import styles from './Settings.module.css';
import Documents from '../DocumentsCheck/Documents'; 
const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vacancies');

  const renderContent = () => {
    if (activeTab === 'vacancies') return <Vacancies />;
    if (activeTab === 'rules') return <Rules />;
    if (activeTab === 'templates') return <Templates />;
    if (activeTab === 'users') return <Users />;
    if (activeTab === 'integrations') return <Integrations />;
    if (activeTab === 'scenarios') return <Scenarios />;
    if (activeTab === 'aimodel') return <Aimodel />;
    if (activeTab === 'documents') return <Documents />; 
    return <Rules />;
  };

  return (
    <div className={dashboardStyles.rightContent}>
      <div className={styles.settings}>
        <h1>Настройки</h1>
        <p className={styles.subtitle}>Управление параметрами системы подбора персонала</p>

        <div className={styles.topMenu}>
          <button
            className={activeTab === 'vacancies' ? styles.active : ''}
            onClick={() => setActiveTab('vacancies')}
          >
            Вакансии
          </button>
          <button
            className={activeTab === 'rules' ? styles.active : ''}
            onClick={() => setActiveTab('rules')}
          >
            Правила отбора
          </button>
          <button
            className={activeTab === 'templates' ? styles.active : ''}
            onClick={() => setActiveTab('templates')}
          >
            Шаблоны документов
          </button>
          <button
            className={activeTab === 'users' ? styles.active : ''}
            onClick={() => setActiveTab('users')}
          >
            Пользователи и роли
          </button>
          <button
            className={activeTab === 'documents' ? styles.active : ''}
            onClick={() => setActiveTab('documents')}
          >
            Документы
          </button>
          <button
            className={activeTab === 'integrations' ? styles.active : ''}
            onClick={() => setActiveTab('integrations')}
          >
            Интеграции
          </button>
          <button
            className={activeTab === 'scenarios' ? styles.active : ''}
            onClick={() => setActiveTab('scenarios')}
          >
            Сценарии чат-бота
          </button>
          <button
            className={activeTab === 'aimodel' ? styles.active : ''}
            onClick={() => setActiveTab('aimodel')}
          >
            выбор AI-провайдера и модели
          </button>
        </div>

        <div className={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
};


const Rules: React.FC = () => {
  const [minExperience, setMinExperience] = useState(3);
  const [minAge, setMinAge] = useState(21);
  const [categories, setCategories] = useState('C, E');
  const [minScore, setMinScore] = useState(85);
  const [autoLowRisk, setAutoLowRisk] = useState(true);
  const [autoCheckDocs, setAutoCheckDocs] = useState(true);
  const [autoNotifyHr, setAutoNotifyHr] = useState(true);
  const [rejectMissingCat, setRejectMissingCat] = useState(true);
  const [rejectMismatch, setRejectMismatch] = useState(true);
  const [rejectExpired, setRejectExpired] = useState(true);
  const [rejectLowExp, setRejectLowExp] = useState(true);

  const renderCheckbox = (checked: boolean, onChange: () => void) => (
    <span className={styles.customCheckbox} onClick={onChange}>
      {checked ? '✅' : '■'}
    </span>
  );

  return (
    <div className={styles.rulesContainer}>
      <h1 className={styles.rulesTitle}>Правила автоматического отбора</h1>
      <div className={styles.rulesCard}>
        <h2>Минимальные требования</h2>
        <div className={styles.rulesRow}>
          <span>Минимальный стаж (лет)</span>
          <input
            type="number"
            className={styles.rulesInput}
            value={minExperience}
            onChange={(e) => setMinExperience(Number(e.target.value))}
          />
        </div>
        <div className={styles.rulesRow}>
          <span>Минимальный возраст</span>
          <input
            type="number"
            className={styles.rulesInput}
            value={minAge}
            onChange={(e) => setMinAge(Number(e.target.value))}
          />
        </div>
        <div className={styles.rulesRow}>
          <span>Обязательные категории</span>
          <input
            type="text"
            className={styles.rulesInput}
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.rulesCard}>
        <h2>Автоматическое одобрение</h2>
        <div className={styles.rulesRow}>
          <span>Минимальный балл соответствия (%)</span>
          <input
            type="number"
            className={styles.rulesInput}
            value={minScore}
            onChange={(e) => setMinScore(Number(e.target.value))}
          />
        </div>
        <div className={styles.rulesCheckboxGroup}>
          <label>
            {renderCheckbox(autoLowRisk, () => setAutoLowRisk(!autoLowRisk))}
            Автодобрение при низком риске
          </label>
          <label>
            {renderCheckbox(autoCheckDocs, () => setAutoCheckDocs(!autoCheckDocs))}
            Проверка всех документов обязательна
          </label>
          <label>
            {renderCheckbox(autoNotifyHr, () => setAutoNotifyHr(!autoNotifyHr))}
            Отправлять уведомления HR
          </label>
        </div>
      </div>

      <div className={styles.rulesCard}>
        <h2>Критерии автоматического отклонения</h2>
        <div className={styles.rulesCheckboxGroup}>
          <label>
            {renderCheckbox(rejectMissingCat, () => setRejectMissingCat(!rejectMissingCat))}
            Отсутствие обязательных категорий
          </label>
          <label>
            {renderCheckbox(rejectMismatch, () => setRejectMismatch(!rejectMismatch))}
            Несовпадение данных в документах
          </label>
          <label>
            {renderCheckbox(rejectExpired, () => setRejectExpired(!rejectExpired))}
            Просроченные документы
          </label>
          <label>
            {renderCheckbox(rejectLowExp, () => setRejectLowExp(!rejectLowExp))}
            Стаж менее минимального
          </label>
        </div>
      </div>

      <button className={styles.rulesSaveButton}>Сохранить правила</button>
    </div>
  );
};

const Vacancies: React.FC = () => (
  <div className={styles.container}>
    <h1>Активные вакансии</h1>
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>Водитель категории C, E</h2>
        <span className={styles.active}>Активна</span>
      </div>
      <div className={styles.info}>
        <span>📍 Москва</span>
        <span>👥 42 кандидата</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn}>✏️ Редактировать</button>
        <button className={styles.deleteBtn}>🗑️ Удалить</button>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>Водитель-дальнобойщик</h2>
        <span className={styles.active}>Активна</span>
      </div>
      <div className={styles.info}>
        <span>📍 Санкт-Петербург</span>
        <span>👥 28 кандидатов</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn}>✏️ Редактировать</button>
        <button className={styles.deleteBtn}>🗑️ Удалить</button>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>Водитель автобуса категории D</h2>
        <span className={styles.paused}>На паузе</span>
      </div>
      <div className={styles.info}>
        <span>📍 Казань</span>
        <span>👥 15 кандидатов</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn}>✏️ Редактировать</button>
        <button className={styles.deleteBtn}>🗑️ Удалить</button>
      </div>
    </div>
    <button className={styles.createButton}>+ Создать вакансию</button>
  </div>
);

const Templates: React.FC = () => (
  <div className={styles.templatesContainer}>
    <h1 className={styles.templatesTitle}>Шаблоны документов</h1>
    <div className={styles.templatesList}>
      <div className={styles.templateCard}>
        <div className={styles.templateInfo}>
          <div className={styles.templateName}>Трудовой договор (водитель)</div>
          <div className={styles.templateMeta}>v2.3 • Обновлен 15.03.2026</div>
        </div>
        <div className={styles.templateActions}>
          <button className={styles.editButton}>Редактировать</button>
          <button className={styles.deleteButton}><i className="fa fa-trash"></i></button>
        </div>
      </div>
      <div className={styles.templateCard}>
        <div className={styles.templateInfo}>
          <div className={styles.templateName}>Карточка сотрудника Т-2</div>
          <div className={styles.templateMeta}>v1.5 • Обновлен 20.02.2026</div>
        </div>
        <div className={styles.templateActions}>
          <button className={styles.editButton}>Редактировать</button>
          <button className={styles.deleteButton}><i className="fa fa-trash"></i></button>
        </div>
      </div>
      <div className={styles.templateCard}>
        <div className={styles.templateInfo}>
          <div className={styles.templateName}>Должностная инструкция</div>
          <div className={styles.templateMeta}>v1.2 • Обновлен 10.01.2026</div>
        </div>
        <div className={styles.templateActions}>
          <button className={styles.editButton}>Редактировать</button>
          <button className={styles.deleteButton}><i className="fa fa-trash"></i></button>
        </div>
      </div>
      <div className={styles.templateCard}>
        <div className={styles.templateInfo}>
          <div className={styles.templateName}>Договор о материальной ответственности</div>
          <div className={styles.templateMeta}>v1.0 • Обновлен 05.12.2025</div>
        </div>
        <div className={styles.templateActions}>
          <button className={styles.editButton}>Редактировать</button>
          <button className={styles.deleteButton}><i className="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
    <button className={styles.createButtonTemplate}>+ Создать вакансию</button>
  </div>
);

const Users: React.FC = () => (
  <div className={styles.usersContainer}>
    <h1 className={styles.usersTitle}>Пользователи системы</h1>
    <div className={styles.usersList}>
      <div className={styles.userCard}>
        <div className={styles.userAvatar}>ИА</div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Иван Александров</div>
          <div className={styles.userMeta}>
            <span className={styles.userEmail}>ivan@company.com</span>
            <span className={styles.userRole}>Администратор</span>
          </div>
        </div>
        <div className={`${styles.userStatus} ${styles.active}`}>Активен</div>
      </div>
      <div className={styles.userCard}>
        <div className={styles.userAvatar}>МП</div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Мария Петрова</div>
          <div className={styles.userMeta}>
            <span className={styles.userEmail}>maria@company.com</span>
            <span className={styles.userRole}>HR-менеджер</span>
          </div>
        </div>
        <div className={`${styles.userStatus} ${styles.active}`}>Активен</div>
      </div>
      <div className={styles.userCard}>
        <div className={styles.userAvatar}>АС</div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Анна Сидорова</div>
          <div className={styles.userMeta}>
            <span className={styles.userEmail}>anna@company.com</span>
            <span className={styles.userRole}>HR-менеджер</span>
          </div>
        </div>
        <div className={`${styles.userStatus} ${styles.active}`}>Активен</div>
      </div>
      <div className={styles.userCard}>
        <div className={styles.userAvatar}>ПК</div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Петр Козлов</div>
          <div className={styles.userMeta}>
            <span className={styles.userEmail}>petr@company.com</span>
            <span className={styles.userRole}>Наблюдатель</span>
          </div>
        </div>
        <div className={`${styles.userStatus} ${styles.inactive}`}>Неактивен</div>
      </div>
    </div>
    <button className={styles.addButton}>+ Добавить пользователя</button>
  </div>
);

const Integrations: React.FC = () => (
  <div className={styles.intgContainer}>
    <h1 className={styles.intgTitle}>Интеграции с внешними сервисами</h1>
    <div className={styles.intgGrid}>
      <div className={styles.intgCard}>
        <div className={styles.intgName}>hh.ru</div>
        <div className={styles.intgDesc}>Автоматический импорт откликов</div>
        <div className={styles.intgFooterRow}>
          <span className={styles.intgStatusConnected}>Подключено</span>
          <button className={styles.intgBtnSettings}>Настроить</button>
        </div>
      </div>
      <div className={styles.intgCard}>
        <div className={styles.intgName}>1С:ЗУП</div>
        <div className={styles.intgDesc}>Синхронизация кадровых данных</div>
        <div className={styles.intgFooterRow}>
          <span className={styles.intgStatusConnected}>Подключено</span>
          <button className={styles.intgBtnSettings}>Настроить</button>
        </div>
      </div>
      <div className={styles.intgCard}>
        <div className={styles.intgName}>Telegram Bot</div>
        <div className={styles.intgDesc}>Уведомления в Telegram</div>
        <div className={styles.intgFooterRow}>
          <span className={styles.intgStatusConnected}>Подключено</span>
          <button className={styles.intgBtnSettings}>Настроить</button>
        </div>
      </div>
      <div className={styles.intgCard}>
        <div className={styles.intgName}>Email (SMTP)</div>
        <div className={styles.intgDesc}>Отправка уведомлений по почте</div>
        <div className={styles.intgFooterRow}>
          <span className={styles.intgStatusConnected}>Подключено</span>
          <button className={styles.intgBtnSettings}>Настроить</button>
        </div>
      </div>
      <div className={styles.intgCard}>
        <div className={styles.intgName}>Авито</div>
        <div className={styles.intgDesc}>Импорт откликов с Авито</div>
        <div className={styles.intgFooterRow}>
          <span className={styles.intgStatusDisconnected}>Не подключено</span>
          <button className={styles.intgBtnConnect}>Подключить</button>
        </div>
      </div>
      <div className={styles.intgCard}>
        <div className={styles.intgName}>ЕСИА (Госуслуги)</div>
        <div className={styles.intgDesc}>Проверка документов через ЕСИА</div>
        <div className={styles.intgFooterRow}>
          <span className={styles.intgStatusDisconnected}>Не подключено</span>
          <button className={styles.intgBtnConnect}>Подключить</button>
        </div>
      </div>
    </div>
  </div>
);

const Scenarios: React.FC = () => (
  <div className={styles.scrContainer}>
    <h1 className={styles.scrTitle}>Сценарии чат-бота</h1>
    <div className={styles.scrList}>
      <div className={styles.scrCard}>
        <div className={styles.scrName}>Водитель грузового транспорта</div>
        <div className={styles.scrMeta}>
          <span>8 вопросов в сценарии</span>
          <div className={styles.scrMetaRight}>
            <span className={styles.scrStatusActive}>Активен</span>
            <button className={styles.scrEditBtn}><i className="fa fa-pencil"></i></button>
          </div>
        </div>
        <div className={styles.scrQuestions}>
          Вопросы: категория прав, стаж, график работы, город, готовность к сменному режиму, дополнительные навыки...
        </div>
      </div>
      <div className={styles.scrCard}>
        <div className={styles.scrName}>Водитель автобуса</div>
        <div className={styles.scrMeta}>
          <span>10 вопросов в сценарии</span>
          <div className={styles.scrMetaRight}>
            <span className={styles.scrStatusActive}>Активен</span>
            <button className={styles.scrEditBtn}><i className="fa fa-pencil"></i></button>
          </div>
        </div>
        <div className={styles.scrQuestions}>
          Вопросы: категория прав, стаж, график работы, город, готовность к сменному режиму, дополнительные навыки...
        </div>
      </div>
      <div className={styles.scrCard}>
        <div className={styles.scrName}>Дальнобойщик международных рейсов</div>
        <div className={styles.scrMeta}>
          <span>12 вопросов в сценарии</span>
          <div className={styles.scrMetaRight}>
            <span className={styles.scrStatusInactive}>Неактивен</span>
            <button className={styles.scrEditBtn}><i className="fa fa-pencil"></i></button>
          </div>
        </div>
        <div className={styles.scrQuestions}>
          Вопросы: категория прав, стаж, график работы, город, готовность к сменному режиму, дополнительные навыки...
        </div>
      </div>
    </div>
    <div className={styles.scrFooter}>
      <button className={styles.scrCreateButton}>+   Создать сценарий</button>
    </div>
  </div>
);

const Aimodel: React.FC = () => {
  const [selected, setSelected] = useState<string>('deepseek');
  return (
    <div className={styles.aiContainer}>
      <h1 className={styles.aiTitle}>Выбор AI-провайдера и модели</h1>
      <div className={styles.aiButtons}>
        <button
          className={`${styles.aiBtn} ${selected === 'deepseek' ? styles.active : ''}`}
          onClick={() => setSelected('deepseek')}
        >
          DeepSeek
        </button>
        <button
          className={`${styles.aiBtn} ${selected === 'gpt' ? styles.active : ''}`}
          onClick={() => setSelected('gpt')}
        >
          GPT
        </button>
        <button
          className={`${styles.aiBtn} ${selected === 'claude' ? styles.active : ''}`}
          onClick={() => setSelected('claude')}
        >
          Claude
        </button>
      </div>
      <div className={styles.aiFooter}>
        <button className={styles.aiSaveBtn}>Сохранить</button>
      </div>
    </div>
  );
};

export default Settings;