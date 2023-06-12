// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState('light');// whether dark mode is enable or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enable ", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enable ", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3"> 
          <TextForm showAlert={showAlert} Heading ="Enter the text to analyse below" mode={mode} /> 
          {/* we kept in container so that it wiil keep it in center using container class*/}
          {/* <About/> */}
      </div>
    </>
  );
}

export default App;
