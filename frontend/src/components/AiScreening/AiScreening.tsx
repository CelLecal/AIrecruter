import React, { useState, useRef, useEffect } from 'react';
import styles from './AiScreening.module.css';
import { useParams } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
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
  work_schedule_preference: string;
}

const AiScreening: React.FC = () => {
   const { id } = useParams<{ id: string }>();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
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
 useEffect(() => {

    fetch(`http://localhost:3000/candidates/${1}`)
      .then((res) => {
        if (!res.ok) throw new Error('Кандидат не найден');
        return res.json();
      })
      .then((data) => {
        setCandidate(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  
  
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
  if (!candidate) return null;
  const screeningResult = {
    
    matchDetails: [
      { label: `Категория прав: ${candidate.license_category}`, value: 'Соответствует требованиям', status: 'success' },
      { label: `Опыт: ${candidate.experience_years} лет`, value: 'Превышает минимум (3 года)', status: 'success' },
      { label: `График: ${candidate.work_schedule_preference}`, value: 'Подходит под вакансию', status: 'success' },
      { label: `Город: ${candidate.city}`, value: 'Требуемый регион', status: 'success' },
      { label: 'ADR сертификат', value: 'Дополнительное преимущество', status: 'success' },
    ],
  };

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  
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
            <h2>{candidate.full_name}</h2>
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
        <div className={styles.rightWrapper}>
          <div className={styles.resultSection}>
            <h3>Результат скрининга</h3>
            <div className={styles.scoreCircle}>
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r={radius} fill="none" stroke="#2A2D3A" strokeWidth="8" />
                <circle cx="60" cy="60" r={radius} fill="none" stroke="#4ffa8e" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={candidate.hiring_score} transform="rotate(-90 60 60)" />
                <text x="60" y="60" textAnchor="middle" dy="8" fill="white" fontSize="28" fontWeight="bold">{candidate.hiring_score}%</text>
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

          <div className={styles.aiAnalysis}>
            <h3>AI-анализ</h3>
            <div className={styles.strengths}>
              <h4>Сильные стороны</h4>
              <ul>
                <li>Большой опыт работы</li>
                <li>Наличие ADR сертификата</li>
                <li>Гибкость в графике</li>
              </ul>
            </div>
            <div className={styles.recommendations}>
              <h4>Рекомендации</h4>
              <p>Кандидат имеет отличные показатели. Рекомендуется запросить документы для дальнейшей проверки.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiScreening;