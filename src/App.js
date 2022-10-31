import { useState, useEffect } from 'react';
import './App.css';
import SingleGame from './SingleGame'

function App() {
  const [data, setData] = useState([{}])

  // useEffect(() => {
  //   getGames()
  // }, [])

  const getGames = () => {
    fetch('https://api.sampleapis.com/switch/games')
      .then(responce => responce.json())
      .then(data => setData(data))
      .catch((err) => { console.error(err) })
  }

  console.log('my data', data)

  return (
    <div className="App">
      <main>
        <h1>Switch Games By Sample API</h1>
        <button onClick={() => getGames()}>Get Me Games</button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
            return <SingleGame entireObject={item} />
      })}
        </div>
      </main>
    </div>
  );
}

export default App;
