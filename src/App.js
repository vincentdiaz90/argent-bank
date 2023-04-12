import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicRouter from './Contents/Public/PublicRouter/PublicRouter';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/*" element={ <PublicRouter /> }/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
