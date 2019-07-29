import React from "react";
import "./App.css";

// import exercices

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <MainContent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
