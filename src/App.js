import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import list from './components/list';

const App = () => {
  return 
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/list' element='{<list/>}'></Route>
    </Routes>
    </BrowserRouter>
    

  </div>;
};

export default App;