import React from 'react';
import './css/App.css';

const App = () => {
  return (
  <div className='side-bar'>
    <div className='side-bar-item'>
      Item 01
      <div className='side-bar-item-sub-container'>
        <div className='side-bar-item-sub'> Item 01 Subitem 01 </div>
        <div className='side-bar-item-sub'> Item 01 Subitem 02 </div>
      </div>
    </div>
    
    <div className='side-bar-item'>
      Item 02
      <div className='side-bar-item-sub-container'>
        <div className='side-bar-item-sub'> Item 02 Subitem 01 </div>
        <div className='side-bar-item-sub'> Item 02 Subitem 02 </div>
      </div>
    </div>
  </div>
  );
};

export default App;