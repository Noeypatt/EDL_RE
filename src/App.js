import React, { Component } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div >
        <header><link href="https://fonts.googleapis.com/css?family=Prompt" rel="stylesheet"/></header>
        <Header/>
        <Content/>
        <Footer/>
      </div>

    );
  }
}

export default App;
