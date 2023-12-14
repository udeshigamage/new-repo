import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import SideNavigationPanel from "./components/SideNavigationPanel/SideNavigationPanel";

import { SideBarData } from './data/SideBarData';
import { AppRoutes } from './data/AppRoutes';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <SideNavigationPanel appRoutes={SideBarData}/>
        <Routes>
          <Route path={AppRoutes.systemUser.list.path} element={AppRoutes.systemUser.list.component} />
          <Route path={AppRoutes.systemUser.view.path} element={AppRoutes.systemUser.view.component} />
          <Route path={AppRoutes.systemUser.add.path} element={AppRoutes.systemUser.add.component} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
