import React,{Component} from 'react';
import {ajax} from '../../util/index.js';
import { NavBar, Icon } from 'antd-mobile';
import { List } from 'antd-mobile';
import { WhiteSpace } from 'antd-mobile';
import NavbarTop from '../../component/navbar_top/index';
import './message.less';
import ip from '../../util/ipLocation';

import OrderList from '../orderList';
import jumpcomponent from '../../component/jumpcomponent';

const Item = List.Item;
const Brief = Item.Brief;

let jumpWaitFlag = jumpcomponent(OrderList);

export default class extends Component{
   constructor(){
       super();
       this.state={
           code:1,
           data:{
               messages:[{avatar:'',sender:'',content:'',time:''}],
               notice:{name:'',msg:''}
           },
           // 移入移出
           jumpFlag:false,
       }
   }


    componentDidMount(){
        
        ajax({
            url:`http://${ip}:8333/messages`,
            method:'POST',
            data:{
                'id':1,
                'loged':true,
            }
            
        }).then((res)=>{
            
            console.log(res);
            this.setState(res)

        }).catch((err)=>{
            console.log(err)
        })
    }

    jumpOut = () => {
        this.setState({
            jumpFlag: true,
        });
    };

    render(){
        let {messages,notice} = this.state.data;
        let Jump = jumpWaitFlag(this.state.jumpFlag);
        return(
        <div>
            <Jump/>
            <div className='message'>
                {this.state.jumpFlag.toString()}

                {/*导航   */}
                <NavbarTop>
                    <NavBar leftContent={null}
                            iconName={null}
                            mode="light">消息</NavBar>
                </NavbarTop>


                <List renderHeader={() => '订单消息'} className="order-list">

                    <Item
                        className="order-item"
                        thumb={messages[0].avatar}
                        multipleLine
                        onClick={this.jumpOut}
                    >
                        {notice.name}

                        <Brief>{notice.msg}</Brief>
                    </Item>
                </List>

                {/*留白   */}
                <WhiteSpace size="lg" />

                <List renderHeader={() => '聊天消息'} className="chat-list">
                    {
                        messages.map((item,index)=>(

                            <Item key={index}
                                  className="chat-item"
                                  thumb={item.avatar}
                                  multipleLine
                                  onClick={() => {}}
                            >

                                {item.sender}
                                <span>{item.time}</span>
                                <Brief>{item.content}</Brief>

                            </Item>

                        ))

                    }
                </List>

            </div>
        </div>
            
        )
    }
}
