import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicRouter from './Contents/Public/PublicRouter/PublicRouter';
import PrivateRouter from './Contents/Private/PrivateRouter/PrivateRouter';
import Footer from './Components/Footer/Footer'
import AuthGuard from './_helpers/AuthGuard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/*" element={ <PublicRouter /> }/>
            <Route path="/user/*" element={ 
              <AuthGuard>
                <PrivateRouter /> 
              </AuthGuard>
            }/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
