import { Route, Routes } from 'react-router-dom';
import Test from './components/page__hacking/test';
import './App.css';
import Cerebry from './components/cerebry/cerebry';
import Password from './components/page__hacking/password';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Cerebry />} />
        <Route path='/test' element={<Test />} />
        <Route path='/password' element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
