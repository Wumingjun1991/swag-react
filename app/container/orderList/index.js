import React from "react";
import { NavBar, List, WhiteSpace } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
import NavbarTop from "../../component/navbar_top/index";
import { connect } from 'react-redux';
import actions from '../../redux/actions/indexActions';

let mockList = [
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    },
    {
        src:'http://diy.qqjay.com/u/files/2012/0924/300bd353d29aae0f6197d92cd91adbbb.jpg',
        title:'水洗扭曲率检测',
        content:'检测员正在路上',
        time:'8-8 12:11',
    }
];



class OrderList extends React.Component{
    constructor(){
        super();
        this.state = {
            flag: false
        }
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    componentDidMount(){
        console.log(this.context.router.history);
    }
    render(){
        return(
            <div>
                <NavbarTop>
                    <NavBar
                        onLeftClick = {
                            this.context.router.history.goBack
                            /*this.props.turnBack*/
                        }
                        mode="light"
                    >订单列表</NavBar>
                </NavbarTop>
                <List

                    renderHeader={() => '未完成订单'}>
                    {
                        mockList.map((item,index)=>(
                            <Item
                                thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502169458847&di=04ceb7df91a29dd5fcdecf1d642be352&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110616%2F7177713_105928197391_2.jpg"
                                extra={ item.time }
                                key={index}
                            >
                                {item.title}
                                <Brief>{item.content}</Brief>
                            </Item>

                        ))
                    }
                </List>
                <div style={{height:'1rem',background:'#f5f5f9'}}></div>
            </div>

        )
    }
}
import './orderlist.less';

export default connect(
    (state)=>(
        {a:state.indexData.a}
    ),
    actions
)(OrderList);