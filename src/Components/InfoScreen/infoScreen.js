import React from 'react';
import './infoScreen.css';
import { ArrowUpward,Sync,Close } from '@material-ui/icons';

export class InfoScreen extends React.Component {
    constructor(props) {
        super(props);   
        // Don't call this.setState() here!
        this.state = {       
            
         };               
      }
        
      render() {     

        var styleSelectmaptypeNode = {
            backgroundColor: 'rgb(61, 255, 200)'
          };

        return (            
            <div  className="textBlock">
                <button className="smallBtn" onClick={()=>this.props.handleInfoClick()}> <Close className="iconDel" style={{ fontSize: 18 }}></Close> </button>
                <br/>
               <p className="centerText"><b >阿瓦隆路线助手</b>    </p>
               <br/>
               <p>
               <b>如何修改路线：</b>    
               <br/>
               1) 使用他人分享的网址打开网页
               <br/>
               2) 修改路线
               <br/>
               3) 点击“分享”按钮，重新生成分享链接，然后发送给其他人
               </p>
               <br/>
               <p >
               <b>如何添加新地区:</b>    
               <br/>
               1) 在搜索框中输入关键字
               <br/>
               2) 点击“增加地区”按钮
               <br/>
               3) 拖拽地区到合适的位置

               </p>
               <br/>
               <p >
               <b>如何连接两个地区:</b>    
               <br/>
               1) 点击其中一个地区上的箭头按钮  &nbsp;  
               <button className="smallBtnInfo2"> <ArrowUpward className="iconDel" style={{ fontSize: 18 }}></ArrowUpward> </button>
               &nbsp;  
               <br/>
               2) 然后再点击另一个地区的箭头按钮 &nbsp;  
               <button className="smallBtnInfo2"> <ArrowUpward className="iconDel" style={{ fontSize: 18 }}></ArrowUpward> </button>
               &nbsp;   
               <br/>
               3) 修改传送门的类型  {"->"} &nbsp;     
               <select defaultValue={7} name="select">
                    <option value="2" >绿门</option> 
                    <option value="7" >蓝门</option> 
                    <option value="20" >金门</option>           
                </select>     
                <br/>
                4) 点击这个按钮  &nbsp;  
                <button className="smallBtnInfo2"> <Sync className="iconDel" style={{ fontSize: 18 }}></Sync> </button>
                &nbsp;  来记录传送门的剩余时间
               </p>
               <br/>
               <p>
                   本站搬运自：<a href='https://github.com/Nutarum/AlbionRoads' target='_blank' rel="noopener noreferrer">https://github.com/Nutarum/AlbionRoads</a>
                   <br/>
                   如果有使用上的问题或者更好的建议，欢迎在游戏中私信“Asklepian”
                </p>
               
            </div>          
        );
    }
}

