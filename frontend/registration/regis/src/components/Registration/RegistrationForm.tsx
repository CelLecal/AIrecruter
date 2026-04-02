import React from 'react';
import styles from './RegistrationPage.module.css';

const RegistrationForm: React.FC = () => {
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
            <form>
                <div className={styles.fieldGroup}>
                    <label htmlFor="email">Электронная почта</label>
                    <input type="email" id="email" />
                </div>
                <div className={styles.fieldGroup}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" />
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
