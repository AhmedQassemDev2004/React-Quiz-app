import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import GetStarted from "./pages/GetStarted/GetStarted.tsx";
import {useState} from "react";
import QuizPage from "./pages/QuizPage/QuizPage.tsx";

function App() {
  const [started,setStarted] = useState<boolean>(false);

  return (
      !started ? <GetStarted setStarted={setStarted}/> : <QuizPage/>
  )
}

export default App
