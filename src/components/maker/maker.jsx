import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService, FileInput, cardRepository }) => {
    const locationState = useLocation().state;
    const [userId, setUserId] = useState(locationState && locationState.id);
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'cha',
            company: 'Kakao',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'cktjdgus45@naver.com',
            message: '꾸준히',
            fileName: 'cha.txt',
            fileURL: null
        },
        '2': {
            id: '2',
            name: 'cha2',
            company: 'Kakao2',
            theme: 'light',
            title: 'Software Engineer2',
            email: 'cktjdgus452@naver.com',
            message: '꾸준히2',
            fileName: 'cha2.txt',
            fileURL: null
        },
        '3': {
            id: '3',
            name: 'cha3',
            company: 'Kakao3',
            theme: 'colorful',
            title: 'Software Engineer3',
            email: 'cktjdgus453@naver.com',
            message: '꾸준히3',
            fileName: 'cha3.txt',
            fileURL: null
        },
    })

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    }
    let navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };
    const goToLogin = () => {
        navigate('/');
    }
    useEffect(() => {
        authService.onAuthStateChange(user => {
            if (user) {
                setUserId(user.uid);
                console.log(userId);
            } else {
                goToLogin();
            }
        })
    })
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor updateCard={createOrUpdateCard} FileInput={FileInput} deleteCard={deleteCard} cards={cards} onAdd={createOrUpdateCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;