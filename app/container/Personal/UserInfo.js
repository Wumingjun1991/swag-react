/**
 * Created by w4995 on 2017/8/10.
 */
import React,{Component} from 'react'
import { NavBar } from 'antd-mobile';
import NavbarTop from '../../component/navbar_top/index'
export default class UserInfo extends Component{
    static contextTypes = {
        router: React.PropTypes.object
    };
    render(){
        return(
            <NavbarTop>
                <NavBar iconName="left"
                        onLeftClick={this.context.router.history.goBack}
                        mode="light">个人信息</NavBar>
            </NavbarTop>
        )
    }
}