import React, {Component} from 'react';
import Software from './calculator/Software';
import Media from './calculator/Media';
import {Header} from './Header';
import {QA} from './QA';
import { Tabs, TabPanel } from '@zendeskgarden/react-tabs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tabs>
          <TabPanel label="Pesan Aplikasi" key="tab-1">
            <main className="App-calculator">
              <Software/>
            </main>
          </TabPanel>
          <TabPanel label="Pesan Media" key="tab-2">
            <main className="App-calculator">
              <Media/>
            </main>
          </TabPanel>
          <TabPanel label="Pertanyaan?" key="tab-3">
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
