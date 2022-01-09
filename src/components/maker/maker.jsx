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
    const [cards, setCards] = useState({});

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
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.readCard(userId, cards => {
            setCards(cards);
        })
        return () => stopSync();
    }, [userId]);
    console.log(cards)
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