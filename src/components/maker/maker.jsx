import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'cha',
            company: 'Kakao',
            theme: 'light',
            title: 'Software Engineer',
            email: 'cktjdgus45@naver.com',
            message: '꾸준히',
            fileName: 'cha.txt',
            fileURL: 'cha.png'
        },
        {
            id: '2',
            name: 'cha2',
            company: 'Kakao2',
            theme: 'light',
            title: 'Software Engineer2',
            email: 'cktjdgus452@naver.com',
            message: '꾸준히2',
            fileName: 'cha2.txt',
            fileURL: 'cha2.png'
        },
        {
            id: '3',
            name: 'cha3',
            company: 'Kakao3',
            theme: 'light',
            title: 'Software Engineer3',
            email: 'cktjdgus453@naver.com',
            message: '꾸준히3',
            fileName: 'cha3.txt',
            fileURL: 'cha3.png'
        },
    ])
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
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;