import React, { useState, useRef, useEffect } from 'react';
import styles from './AiScreening.module.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AiScreening: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Здравствуйте! Я помогу провести предварительный отбор. Какая у вас категория водительских прав?', sender: 'ai', timestamp: new Date(2026, 2, 26, 14, 32) },
    { id: 2, text: 'С и Е', sender: 'user', timestamp: new Date(2026, 2, 26, 14, 32) },
    { id: 3, text: 'Отлично! Какой у вас опыт работы водителем?', sender: 'ai', timestamp: new Date(2026, 2, 26, 14, 33) },
    { id: 4, text: 'Работаю водителем 8 лет, из них 5 лет на грузовых автомобилях категории C', sender: 'user', timestamp: new Date(2026, 2, 26, 14, 35) },
    { id: 5, text: 'Прекрасный опыт! Какой график работы вас интересует?', sender: 'ai', timestamp: new Date(2026, 2, 26, 14, 34) },
    { id: 6, text: 'Предпочитаю сменный график 2/2', sender: 'user', timestamp: new Date(2026, 2, 26, 14, 36) },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const screeningResult = {
    score: 92,
    matchDetails: [
      { label: 'Категория прав: C, E', value: 'Соответствует требованиям', status: 'success' },
      { label: 'Опыт: 8 лет', value: 'Превышает минимум (3 года)', status: 'success' },
      { label: 'График: сменный 2/2', value: 'Подходит под вакансию', status: 'success' },
      { label: 'Город: Москва', value: 'Требуемый регион', status: 'success' },
      { label: 'ADR сертификат', value: 'Дополнительное преимущество', status: 'success' },
    ],
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    const userMessage: Message = { id: messages.length + 1, text: inputText, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse: Message = { id: messages.length + 2, text: 'Спасибо за ответ! Мы учтём ваши предпочтения.', sender: 'ai', timestamp: new Date() };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 800);
  };

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (screeningResult.score / 100) * circumference;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1>AI-скрининг кандидата</h1>
        <p>Автоматический сбор и анализ информации о кандидате</p>
      </div>
      <div className={styles.container}>
        
        {/* Левая колонка */}
        <div className={styles.chatSection}>
          <div className={styles.chatHeader}>
            <h2>Петров Сергей Иванович</h2>
            <span className={styles.candidateStatus}>Активен</span>
          </div>
          <div className={styles.chatMessages}>
            {messages.map(msg => (
              <div key={msg.id} className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.aiMessage}`}>
                <div className={styles.messageBubble}>
                  <p>{msg.text}</p>
                  <span className={styles.timestamp}>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className={`${styles.message} ${styles.aiMessage}`}>
                <div className={styles.messageBubble}><p>Печатает...</p></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Введите сообщение..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={styles.resultSection}>
          <h3>Результат скрининга</h3>
          <div className={styles.scoreCircle}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r={radius} fill="none" stroke="#2A2D3A" strokeWidth="8" />
              <circle cx="60" cy="60" r={radius} fill="none" stroke="#4ffa8e" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashOffset} transform="rotate(-90 60 60)" />
              <text x="60" y="60" textAnchor="middle" dy="8" fill="white" fontSize="28" fontWeight="bold">{screeningResult.score}%</text>
            </svg>
            
          </div>
          <div className={styles.matchContainer}>
            <div className={styles.matchTitle}>Подходит</div>
            <div className={styles.matchText}>Кандидат соответствует требованиям вакансии</div>
          </div>
          <ul className={styles.detailList}>
            {screeningResult.matchDetails.map((detail, idx) => (
              <li key={idx} className={styles.detailItem}>
                <strong>{detail.label}</strong>
                <span className={styles.success}>{detail.value}</span>
              </li>
            ))}
          </ul>
          <div className={styles.actionButtons}>
            <button className={`${styles.actionButton} ${styles.requestDocsBtn}`}>Запросить документы →</button>
            <button className={`${styles.actionButton} ${styles.continueBtn}`}>Продолжить диалог</button>
            <button className={`${styles.actionButton} ${styles.rejectBtn}`}>Отклонить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiScreening;