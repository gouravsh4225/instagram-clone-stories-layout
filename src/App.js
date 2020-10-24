import React from "react";

/// Import anothers Components
import Header from "./Components/Header/Header";
import StoriesList from "./Components/StoriesList/StoriesList";
import Post from "./Components/Posts/Post";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <StoriesList />
      <Post />
    </React.Fragment>
  );
}

export default App;
