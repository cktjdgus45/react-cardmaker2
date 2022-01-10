import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout }) => {
    const onLogOut = () => {
        onLogout && onLogout();
    }
    console.log('header')
    return (
        <header className={styles.header}>
            {onLogout && <button className={styles.logout} onClick={onLogOut}>Logout</button>}
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
            <h3 className={styles.title}>Business Card Maker</h3>
        </header>
    )
}
)
export default Header;