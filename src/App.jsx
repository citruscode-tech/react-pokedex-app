import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({name: null, image: null})
  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${count+1}`;
    const fetchPokemon = () => {
      fetch(url)  
      .then((response) => {
        if(!response.ok) {
          throw new Error(`This aint working b/c ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json.species.name);
        // Maybe you should change the state
        setData((data) => ({
          name: json?.species.name,
          image: json?.sprites.front_default,
        }));
        //setData(json.data);
      })
      .catch((error)=> {
        console.error(error.message);
      })
    }
    fetchPokemon();

  }, [count])

  return (
    <>
      <div>
        
      </div>
      <h1>{data.name}</h1>
      <img src={data.image}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Get A New Pokemon
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
