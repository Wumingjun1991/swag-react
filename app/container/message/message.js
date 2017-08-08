import React,{Component} from 'react';
import {ajax} from '../../util/index.js';
import { NavBar, Icon } from 'antd-mobile';
import { List } from 'antd-mobile';
import './message.less';

const Item = List.Item;
const Brief = Item.Brief;


export default class extends Component{
    state = {
    disabled: false,
  }


    componentWillMount(){
        
        ajax({
            url:'http://localhost:8333/messages',
            method:'POST',
            data:{
                'id':1,
                'loged':true,
            }
            
        }).then((res)=>{
            
            console.log(res)

        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
        <div className='message'>
            <div className="test">
                222
            </div>
        {/*导航   */}
        <NavBar mode="light" className="navbar"
        >消息</NavBar>   


        <List renderHeader={() => 'Subtitle'} className="my-list">
        <Item arrow="horizontal" multipleLine>
          Title <Brief>subtitle</Brief>
        </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          ListItem （Android）<Brief>There may have water ripple effect of <br /> material if you set the click event.</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
        </List>
        </div>
            
        )
    }
}
