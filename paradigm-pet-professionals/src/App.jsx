import './App.css'
import NavScrollExample from './components/navbar';
import { Home } from './components/pages/home';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Router>
        <NavScrollExample />

        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
