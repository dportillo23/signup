import React from 'react';
import '../styles/style.css';
import Footer from './Footer';
import TryDiv from './TryDiv';
import Form from './Form';


function App() {
  return (
    <div>
      <div className="App">
      <div className="wrapper">
        <div className="hero--container">
          <h1 className="title">Learn to code by watching others</h1>
          <p className='hero--paragraph'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable. </p>
        </div>
        <div className="form--wrapper">
          <TryDiv />
          <Form />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
