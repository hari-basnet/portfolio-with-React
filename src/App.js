import React from 'react';
import './App.css';
import HeroImage from './components/heroImage';
import Header from './components/header';

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
