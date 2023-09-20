import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import GetStarted from "./pages/GetStarted/GetStarted.tsx";
import {useState} from "react";
import Settings from "./pages/Settings/Settings.tsx";

function App() {
  const [started,setStarted] = useState<boolean>(false);

  if(!started) {
    return <GetStarted setStarted={setStarted} />
  }

  return (
      <Settings />
  )
}

export default App
