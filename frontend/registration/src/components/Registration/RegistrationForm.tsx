import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrationPage.module.css';

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      alert('Вы успешно авторизированы!.');
      navigate('/dashboard');
    } else {
      const errorData = await response.json().catch(() => null);
      alert(errorData?.message || 'Ошибка авторизации');
    }
  };

return (
        <div className={styles.formWrapper}>
            <div className={styles.rowContainer}>
                <div className={styles.rowContainer}>
                    <div className={styles.AI}><h2>AI</h2></div>
                    <div className={styles.textBlock}>
                        <span className={styles.mainText}><h2>AI-рекрутер</h2></span>
                        <span className={styles.subText}>Платформа подбора персонала</span>
                    </div>
                </div>
            </div>
            <h1>Добро пожаловать</h1>
            <p>Подбор водительского состава и автоматизация кадрового оформления</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label htmlFor="email">Электронная почта</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className={styles.fieldGroup}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={styles.checkboxWrapper}>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Запомнить меня</label>
                </div>
                <button type="submit" className={styles.submitButton}>Войти ➜</button>
                <div className={styles.helpText}>
                    Нужна помощь? <a href="#" className={styles.supportLink}>Свяжитесь с поддержкой</a>
                </div>
            </form>
        </div>
        );
};
export default RegistrationForm;
