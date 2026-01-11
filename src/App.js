import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Cart from './Components/Cart';
import No from './Components/No';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>

      </Routes>
      <No/>
      
    </div>
  );
}

export default App;
