import HomePage from "./views/HomePage";
import "../src/App.css";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <HomePage />
          </header>
        </div>
      </>
    );
  }
}

export default App;
