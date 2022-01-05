import React from 'react';

const Card = ({ card }) => {
    return (
        <>
            <h1>Card</h1>
            <h1>{card.id}</h1>
            <h1>{card.name}</h1>
            <h1>{card.company}</h1>
            <h1>{card.title}</h1>
        </>
    )
}

export default Card;