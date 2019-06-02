import React from 'react';
import './App.css';
import HeroImage from './components/HeroImage';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroImage />
      </div>

    )
  }
}
export default App;
