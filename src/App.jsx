
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import NewRegister from './Pages/NewRegistration';
import ExistingRegistration from './Pages/ExistingRegistration'
import AdminLogin from './Pages/Login/AdminLogin';
import StudentLogin from './Pages/Login/StudentLogin';
import SHomePage from './Pages/Student/HomePage';
import Vacate from './Pages/Student/Vacate';
import AHomePage from './Pages/Admin/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/new-student-register' element={<NewRegister/>}/>
          <Route path='/existing-student-register' element={<ExistingRegistration/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/student-login' element={<StudentLogin/>}/>
          <Route path='/student-profile' element={<SHomePage />}/>
          <Route path='/student-vacate' element={<Vacate />}/>
          <Route path='/admin-home' element={<AHomePage />}/>
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App; 
