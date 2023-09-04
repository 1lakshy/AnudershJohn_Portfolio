import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Qualification from './Pages/Qualification';
import Header from './components/Header';
import { Outlet } from 'react-router';
import KnowMore from './Pages/KnowMore';
import Aboutme from './Pages/Aboutme';
import MyWork from './Pages/MyWork';
import { View } from './Pages/View';
import HeaderM from './components/HeaderM';
import Experience from './Pages/Experience';

function App() {

      

   

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route
          element={
            <>
              <Header />
              <HeaderM/>
              <Outlet />
            </>
          }
        >
          <Route path="/qualification" element={<Qualification/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/knowMore" element={<KnowMore/>}></Route>
          <Route path="/aboutMe" element={<Aboutme/>}></Route>
          <Route path="/myWork" element={<MyWork/>}></Route>
       
        </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
