import './App.css';

import Layout from './components/layout/Layout';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Karyarval from './components/karyar/Karyar-val';
import KaryarTeam from './components/karyar/Karyar-Team';
import About from './components/karyar/About';
import Login from './components/karyar/Login';
import Courses from './components/karyar/Courses';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route  path='/karyarval' element={<Karyarval />} />
        <Route  path='/karyarteam' element={<KaryarTeam />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/courses' element={<Courses />} />



        
      </Route>
    </Routes>
    </div>
  );
}

export default App;
