/**
 * Created by sura.cheng on 2017/8/8.
 */



import React, {Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;



export default class App extends Component {



    onChange = () => {
        console.log("😄");
    };

    render () {

        const data = [
            { value: 0, label: '' }
        ];

        return (
            <div>
                {/* nav */}
                <NavBar leftContent="back"
                        mode="light"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                >购物车</NavBar>


                {/* list */}
                <WingBlank size="lg">
                    <Card>
                        <Card.Header title="哈哈哈 我是 title"/>
                        <Card.Body>
                            <List>
                                {data.map(i => (
                                    <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                                        {i.label}
                                        <a href="#"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502169458847&di=04ceb7df91a29dd5fcdecf1d642be352&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110616%2F7177713_105928197391_2.jpg" width="162" height="162"/></a>
                                        <div>
                                            <span>描述文案</span>
                                            <p>$money</p>
                                        </div>

                                    </CheckboxItem>
                                ))}
                            </List>
                        </Card.Body>
                    </Card>
                </WingBlank>

                <List>
                    <CheckboxItem onChange={() => this.onChange()}>

                    </CheckboxItem>
                </List>


            </div>
        )
    }
}

import "../../style/buyCar.css";







