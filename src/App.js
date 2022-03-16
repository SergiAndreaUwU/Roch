import Home from "./components/home";
import Login from "./components/Login/login";
import { useState, useEffect } from "react";

import "./App.sass";

function App() {
  const [hasUserLogged, setHasUserLogged] = useState(false);

  const callbackUserHasLogged = () => {
    setHasUserLogged(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    //validate token with JWT library
    //meanwhile I'm setting to true if token item was found in localStorage
    if (token) {
      setHasUserLogged(true);
    }
  }, []);

  return (
    <div className="App">
      {hasUserLogged ? (
        <Home  />
      ) : (
        <Login callbackUserHasLogged={callbackUserHasLogged}/>
      )}
    </div>
  );
}

export default App;
