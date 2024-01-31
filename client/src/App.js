
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import EditPage from './Pages/EditPage';
import NotFound from './Pages/NotFound'

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/edit' element={<EditPage/>}/>
    <Route path='*' element={<NotFound/>}/>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
