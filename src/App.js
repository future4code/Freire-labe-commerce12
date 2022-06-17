import React from 'react';
import './App.css';
import Produtos from './components/produtos';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Produtos titulo='Produtos' />
      </div>
    );
  }
}

export default App;