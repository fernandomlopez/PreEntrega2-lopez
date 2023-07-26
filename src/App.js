import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailcontainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route exact path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
