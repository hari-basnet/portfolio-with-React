import React from 'react';
import './App.css';
import HeroImage from './components/HeroImage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>This is my portfolio</h1>
        <HeroImage />

      </div>

    )
  }
}
export default App;
