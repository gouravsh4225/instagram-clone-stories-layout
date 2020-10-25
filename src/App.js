import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";
/// Import anothers Components
import Header from "./Components/Header/Header";
import StoriesList from "./Components/StoriesList/StoriesList";
import Post from "./Components/Posts/Post";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <StoriesList />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
