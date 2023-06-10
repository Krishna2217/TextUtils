import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils2"/>
      
      <div className="container my-3"> 
          <TextForm Heading ="Enter the text to analyse below"/> 
          {/* we kept in container so that it wiil keep it in center using container class*/}
      </div>
    </>
  );
}

export default App;
