import './App.css'
import React, {Fragment} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SimpsonTabs from "./Simpsons.jsx";
import AllItems from "./CSProfiles.jsx";

export default function App() {
  return (
    <>
        <Tabs>
            <TabList>
                <Tab>Profile</Tab>
                <Tab>Simpsons</Tab>
            </TabList>

            <TabPanel>
                <AllItems />
            </TabPanel>

            <TabPanel>
                <SimpsonTabs />
            </TabPanel>
        </Tabs>

    </>
  )
}
