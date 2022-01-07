import "../css/Main.css"

import {  Link } from "react-router-dom";
import Slime_ABI from "../abi/Slime.json"
// import { useWeb3React } from "@web3-react/core"
// import { InjectedConnector } from '@web3-react/injected-connector'
// export const injected = new InjectedConnector({
//   supportedChainIds: [137],
// })
import Web3 from "web3";
const {ethereum} = window;



const First = (account , web3)=> {

  // const { active, account, library, connector, activate, deactivate } = useWeb3React()
  // let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  async function checkWalletIsConnected() {

    if(!ethereum) {
      console.log("Make sure your Metamask is installed!");
      return;
    }
    else
    {

      console.log(account)
      console.log("User is installed Metamask")
      await window.ethereum.send('eth_requestAccounts');
      console.log("User addr is : ",account.web3.eth.requestAccounts())
    }
  }


  async function check() {
    try{
      if(ethereum)
      {
        console.log("Check Balance")
        let SlimeContract = new window.web3.eth.Contract(Slime_ABI,"0xAD33C082cd3c43AD17E9676dbb4f49634a931500",{from: account })
        // console.log(SlimeContract.methods.getAddress().call())
      }
      else{
        console.log("Pls login first")
      }
    }
    catch(ex){
      console.log(ex)
    }
  }

 

    return(
        <div className="First">
        <div style={{width:"600px"}}>故事发生在2022年，
神秘的Black Pearl团队建立了一个广袤的异世界——“初界”，
那里有无数的探索式剧情、无限的打斗乐趣。
于是你摩拳擦掌，满怀期待地开启了你的初界之旅，
并成功获得了一个虚拟化身!!
那就是……暴食伊塔!？</div>


        <div className="flex flex-col items-center">
        <button className="Btn2 mt-5" type="button" onClick={checkWalletIsConnected} > 连接钱包 </button>
        <button className="Btn2  " type="button" onClick={check}> 查看用户资产 </button>

        <Link to = "/start">
        <button className="Btn2 " type="button"> 点击进入初界 </button>
        </Link>
        </div>
        </div>

    );

}


export default First;

