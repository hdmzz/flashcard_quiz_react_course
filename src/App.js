import React, {useState, useEffect} from 'react'
import FlashCardList from './FlashCardList';
import './App.css'

function App() {
  const [flashcards, setFlashCards] = useState(sampleFlashCards)
  return (
    <FlashCardList flashcards={flashcards}/>
  );
}

const sampleFlashCards = [
  {
    id: 1,
    question: "Combien font 2+2?",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 2,
    question: "Combien font 5+2?",
    answer: "7",
    options: [
      "2",
      "7",
      "4",
      "5"
    ]
  },
  {
    id: 3,
    question: "Combien font 8+2?",
    answer: "10",
    options: [
      "2",
      "3",
      "10",
      "5"
    ]
  }
]

export default App;
