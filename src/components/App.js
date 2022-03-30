import { useState } from "react";

import Search from "./Search";

import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="nasa-app">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa"
        className="nasa-app__logo"
      />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
