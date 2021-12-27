import './css/App.css';
import Main from './component/Main';
import First from './component/First';
import { Routes, Route, Link } from "react-router-dom";

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

// import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3Provider(provider)
}







function App() {

  
  return (
<Web3ReactProvider getLibrary={getLibrary}>      <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/start" element={<Main />} />
        


      </Routes>
    
      </header>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
