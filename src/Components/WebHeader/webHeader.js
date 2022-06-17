import React from 'react';
import './webHeader.css'
import { Info,Replay } from '@material-ui/icons';

export class WebHeader extends React.Component {
    constructor(props) {
        super(props);   
        // Don't call this.setState() here!
        this.state = {       
            
         };               
      }
    render() {    
      var icon = <Info className="iconInfo" style={{ fontSize: 22 }}></Info>;
      if(this.props.showingInfo){
        icon = <Replay className="iconInfo" style={{ fontSize: 22 }}></Replay>;
      }
        return (            
            <div className="header">
               <span style={{fontSize: 19}}><b>阿瓦隆路线助手</b></span>    
               <span className="right">&nbsp;&nbsp;</span>   
               <a  className='github' href="https://github.com/jimmyhu517/AlbionRoads/" target="_blank" rel="noopener noreferrer">
                <img className='icon'  src="/github-menu-item.svg?v=1" alt='github'/>&nbsp;
                <span>GitHub</span>
                </a>
               <button className="btnInfo" onClick={()=>this.props.handleInfoClick()}> {icon} </button>                 
            </div>          
        );
    }
}

