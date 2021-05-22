import React,{ useState } from 'react';
import text from './data';

function App() {
  const [many, setMany] = useState(0);
  const [displayed, setDisplayed] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(many>text.length){
      let repeat = (Math.ceil(many/9))*9
      setDisplayed(new Array(repeat).fill(text).flat().slice(0,many));
      console.log(displayed.length, many)
    } else if(many<=0) {
      setDisplayed(text.slice(0,1))
    } else {
      setDisplayed(text.slice(0,many))
    }
  } 

  return (
    <section className="section section-center">
      <h2>Text Generator</h2>
      <form className='lorem-form'>
        <label for='many'>How many paragraphs?</label>
        <input 
          type='number' 
          id='many'
          name='many' 
          value={many}
          onChange={(e)=>setMany(e.target.value)}
        />
        <button className="btn" type='submit' onClick={handleSubmit}>Go!</button>
      </form>
      <article className="result">
        {displayed.map((disp, index)=>{
          return <p key={index}>{disp}</p>
        })}
      </article>
    </section>
  );
}

export default App;
