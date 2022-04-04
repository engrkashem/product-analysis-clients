import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Analysis from './components/Analysis/Analysis';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import QnA from './components/QnA/QnA';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className=' bg-teal-200 h-full max-h-max pb-10' >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/ques-and-ans' element={<QnA />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
