import React, {useEffect, useState} from 'react';
import { Tabs, Tab } from './Tabs';
import { TabsEasy, TabEasy } from './TabsEasy';


function App() {
    const [active, setActive] = useState(1)
    const [activeE, setActiveE] = useState(1)



  return (
    <div>
      <Tabs activeTab={active} onChange={(index)=>setActive(index) }>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" disabled/>
        <Tab label="Tab 3" />
      </Tabs>
      {
        active == 0 &&    <div>Content for Tab 1</div>
      }
      {
        active == 1 &&    <div>Content for Tab 2</div>
      }
       {
        active == 2 &&    <div>Content for Tab 3</div>
      }

      <TabsEasy activeTab={activeE} onChange={(e, index)=>setActiveE(index) }>
        <TabEasy label="Tab 1" />
        <TabEasy label="Tab 2" disabled/>
        <TabEasy label="Tab 3" />
      </TabsEasy>
      {
        activeE == 0 &&    <div> TabEasy Content for Tab 1</div>
      }
      {
        activeE == 1 &&    <div> TabEasy Content for Tab 2</div>
      }
       {
        activeE == 2 &&    <div> TabEasy Content for Tab 3</div>
      }
    </div>
  );
}

export default App;