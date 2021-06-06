import React, {useState, useEffect, useRef} from 'react'
import FlashCardList from './FlashCardList';
import './App.css'
import axios from 'axios';


function App() {
  const [flashcards, setFlashCards] = useState([])
  const [categories, setCategories] = useState([])
  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
      setCategories(res.data.trivia_categories)
    })
  }, [])

  useEffect(() => {
    
  }, [])
//il faut decoder le code html sinon on se retrouve avec des element non décodé et des symbole comme "/$ dans le text"
  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.get('https://opentdb.com/api.php', {
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res => {
      setFlashCards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [...questionItem.incorrect_answers, answer]
        return {
          id: `${index}-${Date.now}`,
          question: decodeString(questionItem.question),
          answer: questionItem.correct_answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
    })
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option> 
            })}
          </select>
        </div>
        <div className="formGroup">
          <label htmlFor="amount">Nombre de questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl}></input>
        </div>
        <div className="formGroup">
          <button className="btn">Générer</button>
        </div>
      </form>
      <div className="container">
        <FlashCardList flashcards={flashcards}/>
      </div>
    </>
  );
}

export default App;
