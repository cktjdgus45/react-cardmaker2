import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Editor from '../editor/editor';
import Preview from '../preview/preview';

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
            <div className={styles.container}>
                <Editor />
                <Preview />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;