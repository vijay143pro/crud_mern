import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Carousel from './carousel/Carousel';
import {useState,useEffect} from "react"
import giphy from './asserts/1496.gif'
import Heading from './header/Heading';
import {Form} from './login/Form';
import MovieContent from './mainContent/MovieContent';
import Dashboard from './dashboard/Dashboard';
function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },600)
  },[])
  return (
    <div className="App">
    {isLoading?<img src={giphy} alt="loader" width="500px" height="100vh"></img>:
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Heading/>}></Route> 
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/dash' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter> 
      <MovieContent/>  
      <Carousel/>
      </div>

    }
      
      
    </div>
  );
}

export default App;
