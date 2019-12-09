import React, {Component} from 'react';
import Poster from './calculator/Poster';
import Video from './calculator/Video';
import Web from './calculator/Web';
import Desktop from './calculator/Desktop';
import Media from './calculator/Media';
import Mobile from './calculator/Mobile';
import Checkout from './Checkout';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {checkout: {
      uri: '',
      konten: {
        title: "",
        deskripsi: "",
        color: "",
        contact: {
          name: '',
          whatsapp: ''
        }
      },
      harga: 0,
      durasi: {
        desain: 0,
        revisi: 0,
      },
      kilat: false
    }}
  }
  submit = (checkout) => {
    this.setState((state) => { return {checkout}})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-calculator">
          <Poster event={this.submit}/>
          <Video event={this.submit}/>
          <Media event={this.submit}/>
          <Web event={this.submit}/>
          <Desktop event={this.submit}/>
          <Mobile event={this.submit}/>

          <Checkout checkout={this.state.checkout}/>
        </main>
      </div>
    );
  }
}

export default App;
