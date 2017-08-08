/**
 * Created by w4995 on 2017/8/8.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import { TabBar, Icon } from 'antd-mobile';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',
            hidden: false,
        };
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="主页"
                    key="主页"
                    icon={<Icon type={require('../../public/icon/index.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/index.svg')} />}
                    selected={this.state.selectedTab === 'index'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'index',
                        });
                    }}
                >
                    <Link to="/"/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../../public/icon/message.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/message.svg')} />}
                    title="消息"
                    key="消息"
                    selected={this.state.selectedTab === 'message'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'message',
                        });
                    }}
                >
                    <Link to="/message"/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../../public/icon/buyCar.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/buyCar.svg')} />}
                    title="购物车"
                    key="购物车"
                    selected={this.state.selectedTab === 'buyCar'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'buyCar',
                        });
                    }}
                >
                    <Link to="/buyCar"/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../../public/icon/personal.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/personal.svg')} />}
                    title="个人中心"
                    key="个人中心"
                    selected={this.state.selectedTab === 'personal'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'personal',
                        });
                    }}
                >
                    <Link to="/personal"/>
                </TabBar.Item>
            </TabBar>
        );
    }
}