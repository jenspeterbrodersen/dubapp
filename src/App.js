import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import WordExtractor from 'word-extractor';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(event) {
    console.log("upload file...")
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function() {
      console.log("reader.onload function")
      // reader.readAsText(file);

      var WordExtractor = require('word-extractor');
      var extractor = new WordExtractor();
      var extracted = extractor.extract(file);
      extracted.then(function(doc){
        console.log("Extacted function..")
        console.log("doc body", doc.getBody());
      });

    };

  }

  render() {
    return (
      <span>
        <input type="file" name="myFile" onChange={this.uploadFile} />
      </span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome 2 React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FileInput />
      </div>
    );
  }
}

export default App;
