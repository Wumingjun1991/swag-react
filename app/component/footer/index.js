/**
 * Created by w4995 on 2017/8/8.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import { TabBar, Icon } from 'antd-mobile';
import TabbarToLink from '../../component/tabbar_to_link';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',
            hidden: false,
        };
    }
    static contextTypes = {
        router: React.PropTypes.object
    };
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    {...this.props}
                    title="主页"
                    key="index"
                    icon={<Icon type={require('../../public/icon/index.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/index.svg')} />}
                    selected={this.state.selectedTab === 'index'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'index',
                        });
                        this.context.router.history.push('/');
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../../public/icon/message.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/message.svg')} />}
                    title="消息"
                    key="message"
                    selected={this.state.selectedTab === 'message'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'message',
                        });
                        this.context.router.history.push('/message');
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../../public/icon/buyCar.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/buyCar.svg')} />}
                    title="购物车"
                    key="buyCar"
                    selected={this.state.selectedTab === 'buyCar'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'buyCar',
                        });
                        this.context.router.history.push('/buyCar');
                    }}
                >

                    <Link to="/buyCar"/>

                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../../public/icon/personal.svg')} />}
                    selectedIcon={<Icon type={require('../../public/icon/personal.svg')} />}
                    title="个人中心"
                    key="userInfo"
                    selected={this.state.selectedTab === 'personal'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'personal',
                        });
                        this.context.router.history.push('/personal');
                    }}

                >
                </TabBar.Item>
            </TabBar>
        );
    }
}