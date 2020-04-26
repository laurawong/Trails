import React from 'react';
import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Landing/>
        <About/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
