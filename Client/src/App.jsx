import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Customer from './Components/Customer/Customer';
import Master from './Components/Master/Master';
import Goldsmith from './Components/Goldsmith/Goldsmith';
import Casting from './Components/LotProcess/Casting';
import Filing from './Components/LotProcess/Filing';
import Setting from './Components/LotProcess/Setting';
import Buffing from './Components/LotProcess/Buffing';




const App = () => {
  return (
    <BrowserRouter> 
    <Routes> 

     
    <Route path='/' element={<Login/>} />
    <Route path='/navbar' element={<Navbar/>} />
    <Route path='/customer' element={<Customer/>}/>
    <Route path='/master' element={<Master/>} />
    <Route path='/goldsmith' element={<Goldsmith/>} />
    <Route path='/casting' element={<Casting/>} />
    <Route path='/filing' element={<Filing/>}/>
    <Route path='/setting' element={<Setting/>}/>
    <Route path='/buffing' element={<Buffing/>}/>
  
  

  
    </Routes>
    </BrowserRouter>
   
  )
}

export default App





// hover: #a33768