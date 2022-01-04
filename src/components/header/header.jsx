import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
    const onLogOut = () => {
        onLogout && onLogout();
    }
    return (
        <header className={styles.header}>
            {onLogout && <button className={styles.logout} onClick={onLogOut}>Logout</button>}
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
            <h3 className={styles.title}>Business Card Maker</h3>
        </header>
    )
}

export default Header;