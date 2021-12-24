import './css/App.css';
import Main from './component/Main';
import First from './component/First';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/start" element={<First />} />

      </Routes>
    
      </header>
    </div>
  );
}

export default App;
