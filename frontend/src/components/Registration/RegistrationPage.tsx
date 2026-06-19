import React from 'react';
import RegistrationForm from './RegistrationForm';
import Info from './Info';
import styles from './RegistrationPage.module.css';

const RegistrationPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <RegistrationForm />
            </div>
            <div className={styles.right}>
                <Info />
            </div>
        </div>
    );
};

export default RegistrationPage;




