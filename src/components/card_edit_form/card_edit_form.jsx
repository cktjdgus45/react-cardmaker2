import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
    const { id, name, company, theme, title, email, message, fileName, fileURL } = card;
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onSubmit = () => {
        deleteCard(card)
    };

    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value
        })
    };

    return (
        <form ref={formRef} className={styles.form}>
            <input onChange={onChange} ref={nameRef} className={styles.input} type="text" name="name" value={name} />
            <input onChange={onChange} ref={companyRef} className={styles.input} type="text" name="company" value={company} />
            <select onChange={onChange} ref={themeRef} className={styles.select} name="theme" value={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorfule</option>
            </select>
            <input onChange={onChange} ref={titleRef} className={styles.input} type="text" name="title" value={title} />
            <input onChange={onChange} ref={emailRef} className={styles.input} type="text" name="email" value={email} />
            <textarea onChange={onChange} ref={messageRef} className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <FileInput />
                <Button name='Delete' onClick={onSubmit} />
            </div>
        </form>
    )
}

export default CardEditForm;