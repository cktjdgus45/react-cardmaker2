import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Maker = ({ authService }) => {
    let navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };
    const goToLogin = () => {
        navigate('/');
    }
    useEffect(() => {
        authService.onAuthStateChange(user => {
            if (!user) {
                goToLogin();
            }
        })
    })
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <Footer />
        </section>
    )
}

export default Maker;