import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import ListProduct from './pages/ListProduct';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <>
      <Link to={'/'}>List</Link> |
      <Link to={'add'}>AddProduct</Link>
      <hr/>
      <Routes>
        <Route path='' element={<ListProduct/>}></Route>
        <Route path='add' element={<AddProduct/>}></Route>
      </Routes>
    </>
  );
}

export default App;
