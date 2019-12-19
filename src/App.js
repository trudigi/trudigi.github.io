import React, {Component} from 'react';
import Software from './calculator/Software';
import Media from './calculator/Media';
import {Header, QA} from './Header';
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tabs>
          <TabPanel label="Software" key="tab-1">
            <main className="App-calculator">
              <Software/>
            </main>
          </TabPanel>
          <TabPanel label="Media" key="tab-2">
            <main className="App-calculator">
              <Media/>
            </main>
          </TabPanel>
          <TabPanel label="QA" key="tab-3">
            <main className="App-calculator">
              <QA/>
            </main>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
