import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Mobile } from './component/mobile';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <header>
      <h2>Shopper..</h2>
      <nav>
        <Link to='/'>Home</Link> <span>  |  </span>
        <Link to='kids'>Kid's Section</Link> <span>  |  </span>
        <Link to='mens'>Men's Section</Link> <span>  |  </span>
        <Link to='login'>Login</Link> <span>  |  </span>
        <Link to='mobile/iphone'> Iphone </Link> <span>  |  </span>
        <Link to='mobile/realme'>Realme</Link> <span>  |  </span>
      </nav>
      <hr />
     </header>
     <Routes>
      <Route path='/' element={<><h2>Home</h2><p>Upto 70% off on all products</p></>}></Route>
      <Route path='kids' element={<><h2>Kid's</h2><p>Upto 45% off on Kid's Section</p></>}></Route>
      <Route path='mens' element={<><h2>Men's</h2><p>Upto 50% off on Men's Section</p></>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='mobile/:category' element={<Mobile />}></Route>
      <Route path='*' element={<><h2>Not Found : Requested Path Not Found</h2></>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
