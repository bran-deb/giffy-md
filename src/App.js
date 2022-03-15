import { ListGifs } from './components/ListGifs'
import './App.css'


function App() {

  return (
    <div className="App">

      <section className="App-content">
        <ListGifs keyword='hamster' />
      </section>

    </div>
  );
}

export default App
