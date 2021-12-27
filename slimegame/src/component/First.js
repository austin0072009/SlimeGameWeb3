import "../css/Main.css"

import {  Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
export const injected = new InjectedConnector({
  supportedChainIds: [137],
})



const First = ()=> {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected).then((res)=>{
        console.log("connected",account);
      })

    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
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
        <button className="Btn2 mt-5" type="button" onClick={connect} > 连接钱包 </button>
        <button className="Btn2  " type="button"> 查看用户资产 </button>

        <Link to = "/start">
        <button className="Btn2 " type="button"> 点击进入初界 </button>
        </Link>
        </div>
        </div>

    );

}


export default First;

