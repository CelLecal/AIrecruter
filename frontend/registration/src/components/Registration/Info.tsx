import styles from './RegistrationPage.module.css';
import React from 'react';

const Info: React.FC = () => {
    return (
        <div className={styles.right}>
            <div className={styles.rightContent}>
                <h1>Умный подбор персонала для транспортных компаний</h1>
                <p>Автоматизация скрининга, проверки документов и кадрового оформления водителей</p>
            </div>
            <div className={styles.blocksContainer}>
                <div className={styles.block}>
                    <div className={styles.leftContainer}>1</div>
                    <div className={styles.featureItem}>
                        <h3>AI-скрининг кандидатов</h3>
                        <p>Автоматическая предварительная оценка через чат-бота</p>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.leftContainer}>2</div>
                    <div className={styles.featureItem}>
                        <h3>Проверка документов OCR</h3>
                        <p>Извлечение и верификация данных из паспортов и прав</p>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.leftContainer}>3</div>
                    <div className={styles.featureItem}>
                        <h3>Автоматизация документов</h3>
                        <p>Генерация трудовых договоров и личных дел</p>
                    </div>
                </div>

                <div className={styles.metricsContainer}>
                    <div className={styles.metric}>
                        <span className={styles.metricNumber}>3x</span>
                        <span className={styles.metricLabel}>Быстрее подбор</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricNumber}>95%</span>
                        <span className={styles.metricLabel}>Точность OCR</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricNumber}>70%</span>
                        <span className={styles.metricLabel}>Экономия времени</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
