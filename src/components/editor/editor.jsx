import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({ cards, onAdd, updateCard, deleteCard }) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Editor</h1>
            {
                Object.keys(cards).map(key => (
                    <CardEditForm
                        updateCard={updateCard}
                        deleteCard={deleteCard}
                        key={key}
                        card={cards[key]} />
                ))
            }
            <CardAddForm onAdd={onAdd} />
        </section>
    )
}

export default Editor;