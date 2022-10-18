import './App.css';
import {useState} from 'react'
import data from './data'
function App() {
 

  const [count,setCount] = useState(0)
  const [text,setText] = useState([])
  function handleSubmit(e){
    e.preventDefault()
    let amount = parseInt(count)

    count <=0? setText(data.slice(0, 1)):
    setText(data.slice(0, amount))

    count >=8? setText(data.slice(0, 8)):
    setText(data.slice(0, amount))
  }
  function handleChange(e){
    const {value}= e.target
    setCount(value)
    console.log(value)
  }
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum ?</h3>
      <form onSubmit={handleSubmit}>
        <p>Paragraphs: </p>
        <input 
          type="number"
          name='name'
          onChange={handleChange}
          value={count} />
        <button className="section-center-button">
          Generate
        </button>
        
      </form>
      <div className='lorem-text'> {text} </div>
    </section>
  );
}

export default App;
