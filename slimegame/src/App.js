import './css/App.css';
import Main from './component/Main';
import First from './component/First';
import { Routes, Route, Link } from "react-router-dom";

// import { Web3ReactProvider } from '@web3-react/core'
// import { Web3Provider } from "@ethersproject/providers";


// function getLibrary(provider) {
//   return new Web3Provider(provider)
// }

import Web3 from "web3";
const {ethereum} = window;
window.web3 = new Web3(window.ethereum);
const account = window.web3.eth.requestAccounts();
const web3 = window.web3;







function App() {

  
  return (
      <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<First account = {account} web3 = {web3}/>} />
        <Route path="/start" element={<Main account = {account} web3 = {web3} />} />
        


      </Routes>
    
      </header>
      </div>
  );
}

export default App;
