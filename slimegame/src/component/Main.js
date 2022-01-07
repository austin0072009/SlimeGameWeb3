import "../css/Main.css"
import { useEffect,useState } from "react";
import {  Link } from "react-router-dom";



const Main = (account,web3)=> {


const [name,setName] = useState(0);
const [skillNum,setSkill] = useState(0);
const [power,setPower] =useState(0)
const [nickName,setNick] = useState("一只史莱姆")


useEffect(() => {
    
    
}, [])



    return(
        <div className="Main">

        
            <div id="Bar1">
                <div className="InfoCard">
                    <div id="textcard" className="InfoText">
                        <div>种族 : 史莱姆</div>
                        <div className="TextBox">
                        <div>名称: <input id="name" type={"text"} style={{height:"50px",width:"200px",color:"black"}} required = {true}></input></div>
                    </div>
                    <div>战斗力 : {power}</div>
                    <div>技能数 : {skillNum}</div>
                    <div>技能列表 : </div>
                    <div>称号 : {nickName}</div>
                </div>




                </div>
                <div className="flex flex-row">
                    <button className="Btn2 mt-5 mr-5" type="button" onClick={()=>{
                        alert(document.getElementById("name").value);
                        




                    }}> 新建存档 </button>
                    <button className="Btn2 mt-5 ml-5" type="button" onClick={()=>{
                        alert(document.getElementById("name").value);
                    }}> 加载存档 </button>
                </div>
            </div>
            <div className="flex flex-col items-center" >
            <div id="Bar3" className="flex flex-row">
                <div  className="Card h-40 w-80 text-center" >
                探索
                </div>
                <div  className="Card h-40 w-80 ml-5 text-center" >
                挑战
                </div>
            </div>
            <div id="Bar2" className="Card2 items-start">
                
                <div>系统:</div>
                <div></div>
                <div>你好~ 欢迎来到“初界”，史莱姆阁下，我是指引精灵，请先浏览并完善你的系统面板</div>
            </div>
            </div>


        </div>

    );

}


export default Main;

