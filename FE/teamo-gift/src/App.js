import MainHeader from './components/headers/mainHeader';
import logo from './logo.svg';
import './assets/styles/base.scss';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from './components/common/loading';

var Home = lazy(()=> import('./components/home/home'));
var Collection = lazy(()=> import('./components/collection/Collection'));

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loading/>}> <Home /></Suspense>}></Route>
        <Route path='/collection' element={<Suspense fallback={<Loading/>}> <Collection /></Suspense>}></Route>
      </Routes>
    </div>
  );
}

export default App;
