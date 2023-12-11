import React from 'react';
import  SideNavPanel, {SideNavPanelItem, SideNavPanelSubItem} from './components/SideNavPanel';
import './css/App.css';

const App = () => {
  return (
    <SideNavPanel>
      <SideNavPanelItem title="Customers">
        <SideNavPanelSubItem>List Customers</SideNavPanelSubItem>
        <SideNavPanelSubItem>Add New Customer</SideNavPanelSubItem>
      </SideNavPanelItem>

      <SideNavPanelItem title="Projects">
        <SideNavPanelSubItem>List Projects</SideNavPanelSubItem>
        <SideNavPanelSubItem>Add New Project</SideNavPanelSubItem>
      </SideNavPanelItem>



    </SideNavPanel>
  );
};

export default App;