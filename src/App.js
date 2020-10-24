import React from "react";

/// Import anothers Components
import Header from "./Components/Header/Header";
import StoriesList from "./Components/StoriesList/StoriesList";
import Post from "./Components/Posts/Post";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <StoriesList />
      <Post />
    </div>
  );
}

export default App;
