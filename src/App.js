// import logo from './logo.svg';
// import './App.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import RecordList from "./Components/RecordList";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route exact path="/contacts/create" element={<Create />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
