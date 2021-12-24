import "../css/Main.css"
import {  Link } from "react-router-dom";

const Main = ()=> {





    return(
        <div className="Main">
        <div>你好~ 欢迎来到“初界”，史莱姆阁下，我是指引精灵，请先浏览并完善你的系统面板。</div>
        <div className="InfoCard">
        <div id="textcard" className="InfoText">
        <div>种族 : 史莱姆</div>
        <div className="TextBox">
            <div>名称: <input id="name" type={"text"} style={{height:"50px",width:"200px",color:"black"}} required = {true}></input></div>
        </div>
        <div>战斗力 : 5</div>
        <div>技能数 : 1</div>
        <div>技能列表 : </div>
        <div>称号 : 一只史莱姆</div>
        </div>




        </div>
        <Link to = "/start">
        <button className="Btn1 mt-5" type="button" onClick={()=>{
            alert(document.getElementById("name").value);
        }}> 确认 </button>
        </Link>
        </div>

    );

}


export default Main;

