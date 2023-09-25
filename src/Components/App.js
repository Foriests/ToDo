import { React } from "react";
import "./Components/css/App.css";
import Header from "./NoteComponents/Header";
import Notes from "./Components/NoteComponents/Notes";
function App({Note}) {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;