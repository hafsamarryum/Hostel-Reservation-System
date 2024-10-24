import './App.css';
import Home from './pages/Home';
import Hostel from './pages/Hostel'
import Contactus from './pages/Contactus'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './pages/Navbar'
import Aboutus from './pages/Aboutus'
import Footer from './pages/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <Router>
  <Navbar></Navbar>
  <Routes>
 <Route path='/' element={<Home></Home>}></Route>
 <Route path='/login' element={<Login></Login>}></Route>
 <Route path='/signup' element={<Signup></Signup>}></Route>
 <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
 <Route path='/contactus' element={<Contactus></Contactus>}></Route>
 <Route path='/navbar' element={<Navbar></Navbar>}></Route>
 <Route path='/footer' element={<Footer></Footer>}></Route>
 <Route path='/hostel' element={<Hostel></Hostel>}></Route>
  </Routes>
  <Footer></Footer>
  </Router>
  );
}

export default App;
