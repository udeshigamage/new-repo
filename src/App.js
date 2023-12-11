import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import List_ from './components/List_.jsx';
import Test from './components/Test.jsx';
import Show_Profile from './components/Show_Profile.jsx';




const App = () => {
  return(
  <div>
    
    
     <BrowserRouter>
    <Routes>
      <Route path='/list' element={<List_/>}/>
      <Route path='/' element={<Test/>}/>
      <Route path='/view/:id' element={<Show_Profile/>}/>
    </Routes>
    </BrowserRouter> 
    

  </div>);
};

export default App;