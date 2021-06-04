import React from 'react'
import FlashCard from './FlashCard'

//Normalement on passe (props)
//en arguments et après on accede aux flashcards grace a props.flashcards
export default function FlashCardList({flashcards}) {
    return (
        <div className="cardGrid">
            {flashcards.map(flashcard => {
                return <FlashCard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
