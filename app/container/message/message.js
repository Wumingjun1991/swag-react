import React,{Component} from 'react';
import {ajax} from '../../util/index.js';
import { NavBar, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom'
import { List } from 'antd-mobile';
import { WhiteSpace } from 'antd-mobile';
import NavbarTop from '../../component/navbar_top/index';
import './message.less';
import ip from '../../util/ipLocation';
import {connect} from 'react-redux'
import actions from '../../redux/actions/messageActions'
const Item = List.Item;
const Brief = Item.Brief;
@connect((state)=>{
    return {
        msgData:state.msgData
    }
},{...actions})
export default class extends Component{
   constructor(){
       super();
       this.state={
           code:1,
           data:{
               messages:[{avatar:'',sender:'',content:'',time:''}],
               notice:{name:'',msg:''}
           },
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
            this.props.getMsgList(res);
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        let {messages,notice} = this.props.msgData.data;
        return(
        <div>

            <div className='message'>
                {/*导航   */}
                <NavbarTop>
                    <NavBar leftContent={null}
                            iconName={null}
                            mode="light">消息</NavBar>
                </NavbarTop>


                <Link to="/orderList">
                  <List renderHeader={() => '订单消息'} className="order-list">

                        <Item
                            className="order-item"
                            thumb={messages[0].avatar}
                            multipleLine
                        >
                            {notice.name}
                            <Brief>{notice.msg}</Brief>
                        </Item>
                    </List>
                </Link>

                {/*留白   */}
                <WhiteSpace size="lg" />

                <List renderHeader={() => '聊天消息'} className="chat-list">
                    {
                        messages.map((item,index)=>(

                            <Link to="/chatInfo" key={index}>
                                <Item className="chat-item"
                                      thumb={item.avatar}
                                      multipleLine
                                      onClick={() => {}}
                                >

                                    {item.sender}
                                    <span>{item.time}</span>
                                    <Brief>{item.content}</Brief>

                                </Item>
                            </Link>

                        ))

                    }
                </List>

            </div>
        </div>
            
        )
    }
}
