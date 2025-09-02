import HomePage from "./views/HomePage";
import "../src/App.css";

import React from "react";

console.log("App");

class App extends React.Component {
  constructor(props) {
    super(props);

    // Developer Console Logs
    console.log("🚀 Developer Available for Work!");
    console.log("💻 Full Stack Developer | React & C# Specialist");
    console.log("🔗 GitHub: https://github.com/tektechnologies");

    // Table format console log
    console.table({
      Name: "Craig Barkley",
      Role: "Full Stack Developer",
      "Primary Skills": ["React", "C#", "JavaScript"],
      Status: "Available for Work",
      GitHub: "https://github.com/tektechnologies",
      Portfolio: "https://craigbarkley.com",
    });

    // Error-style console log (but not actually an error)
    console.error(
      "🎯 HIRING MANAGERS: Experienced React & C# developer seeking opportunities!"
    );
    console.warn("⚡ Skills: React, C#, JavaScript, Full Stack Development");
    console.info("📧 Contact me for development projects and opportunities");
  }

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
