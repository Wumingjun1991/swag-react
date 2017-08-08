import React,{Component} from 'react';
import {ajax} from '../../util/index.js';
import { NavBar, Icon } from 'antd-mobile';
import { List } from 'antd-mobile';
import { WhiteSpace } from 'antd-mobile';
import NavbarTop from '../../component/navbar_top/index';
import './message.less';

const Item = List.Item;
const Brief = Item.Brief;


export default class extends Component{
   constructor(){
       super();
       this.state={
           code:1,
           data:{
               messages:[{avatar:'',sender:'',content:'',time:''}],
               notice:{name:'',msg:''}
           }

       }
   }


    componentDidMount(){
        
        ajax({
            url:'http://localhost:8333/messages',
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

    render(){

        let {messages,notice} = this.state.data;

        return(
        <div className='message'>
        {/*导航   */}
        <NavbarTop>
            <NavBar leftContent={null} mode="light">消息</NavBar>
        </NavbarTop>


        <List renderHeader={() => '订单消息'} className="my-list">

        <Item

          thumb={messages[0].avatar}
          multipleLine
          onClick={() => {}}
        >
            {notice.name} <Brief>{notice.msg}</Brief>
        </Item>
        </List>

         {/*留白   */}
        <WhiteSpace size="lg" />

        <List renderHeader={() => '聊天消息'} className="my-list">
            {
                messages.map((item,index)=>(

                    <Item key={index}

                          thumb={item.avatar}
                          multipleLine
                          onClick={() => {}}
                    >
                        {item.sender} <Brief>{item.content}</Brief>
                        <span>{item.time}</span>
                    </Item>

                ))

            }
        </List>
            <List renderHeader={() => '聊天消息'} className="my-list">
                {
                    messages.map((item,index)=>(

                        <Item key={index}

                              thumb={item.avatar}
                              multipleLine
                              onClick={() => {}}
                        >
                            {item.sender} <Brief>{item.content}</Brief>
                            <span>{item.time}</span>
                        </Item>

                    ))

                }
            </List>
            <List renderHeader={() => '聊天消息'} className="my-list">
                {
                    messages.map((item,index)=>(

                        <Item key={index}

                              thumb={item.avatar}
                              multipleLine
                              onClick={() => {}}
                        >
                            {item.sender} <Brief>{item.content}</Brief>
                            <span>{item.time}</span>
                        </Item>

                    ))

                }
            </List>
            <List renderHeader={() => '聊天消息'} className="my-list">
                {
                    messages.map((item,index)=>(

                        <Item key={index}

                              thumb={item.avatar}
                              multipleLine
                              onClick={() => {}}
                        >
                            {item.sender} <Brief>{item.content}</Brief>
                            <span>{item.time}</span>
                        </Item>

                    ))

                }
            </List>
            <List renderHeader={() => '聊天消息'} className="my-list">
                {
                    messages.map((item,index)=>(

                        <Item key={index}

                              thumb={item.avatar}
                              multipleLine
                              onClick={() => {}}
                        >
                            {item.sender} <Brief>{item.content}</Brief>
                            <span>{item.time}</span>
                        </Item>

                    ))

                }
            </List>
            <List renderHeader={() => '聊天消息'} className="my-list">
                {
                    messages.map((item,index)=>(

                        <Item key={index}

                              thumb={item.avatar}
                              multipleLine
                              onClick={() => {}}
                        >
                            {item.sender} <Brief>{item.content}</Brief>
                            <span>{item.time}</span>
                        </Item>

                    ))

                }
            </List>






        </div>
            
        )
    }
}
