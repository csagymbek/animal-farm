import './App.css'
import Animal from './Animal';
import customFetchHook from './customFetchHook'

export default function App() {
const { animals, handleSearchAnimal } = customFetchHook();

  return (
    <div className="App">
      <form className="App__form">
        <h1 className="App__headerText">Animal Farm</h1>
        <input type="text" placeholder='Search' className='App__input'
        onChange={e => handleSearchAnimal(e.target.value)} />
        <ul>
          {animals.length ? animals.map((animal) => (
            <Animal key={animal.id} {...animal} />
          )) : (
            <h1 className='App__noAnimalsText'>No Animals Found!</h1>
          )}
        </ul>
      </form>
    </div>
  )
}
