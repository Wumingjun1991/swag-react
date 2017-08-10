/**
 * Created by 96004 on 2017/8/8.
 */
import React, {Component} from 'react';
import {ajax} from '../../util/index';
import ip from '../../util/ipLocation';
import { connect } from 'react-redux';
import actions from '../../redux/actions/buyCarActions';
let port = require('../../../mock/port');
import {Carousel,WhiteSpace,NavBar,Card,List,Radio,Stepper,Button,Flex} from 'antd-mobile';
const RadioItem=Radio.RadioItem;

@connect((state)=>({}),{
    ...actions
})
export default class GoodsDetail extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };
    constructor() {
        super();
        this.state = {
            goods: {
                images:[],
                name: '',
                description: '',
                standard: [],
                avatar: ''
            },
            value:0,
            val:1
        }
    }

    componentWillMount() {
        ajax({
            url: `http://${ip}:${port}/detail/123`,
            method: 'GET'
        }).then((res) => {
            this.setState({goods:res.data})
        })
    }
    onChange = (value) => {
        this.setState({
            value,
        });
    };
    onChangeVal = (val) => {
        this.setState({
            val,
        });
    };
    format=(ary)=>{
        let aryData=[];
        ary.forEach((item,index)=>{
            aryData.push({value:index,label:item})
        })
        return aryData;
    };
    render() {
        let {value} = this.state;
        let {images,avatar,name,description,standard} = this.state.goods;
        return (
            <div className="container">
                <NavBar
                    onLeftClick = {this.context.router.history.goBack}
                    mode="dark" className="head">
                    商品详情
                </NavBar>
                <Carousel
                    className="my-carousel"
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                >
                    {images.map(ii => (
                        <a href="#" key={ii} style={{height:200}}>
                            <img width="100%"
                                 src={ii}
                                 onLoad={() => {
                                     window.dispatchEvent(new Event('resize'));
                                     this.setState({
                                         initialHeight: null,
                                     });
                                 }}
                            />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace/>
                <Card full>
                    <Card.Header
                        title={name}
                        thumb={avatar}
                    />
                    <Card.Body>
                        <div>{description}</div>
                    </Card.Body>
                    <Card.Footer content="" extra={<div>商品具体以实物为准</div>} />
                </Card>
                <WhiteSpace/>
                <List renderHeader={() => '请选择型号'}>
                    {this.format(standard).map(i => (
                        <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                </List>
                <WhiteSpace/>
                <list>
                    {/*<List.Item
                        className="select"
                        wrap
                        extra={
                            <Stepper
                                style={{ width: '100%', minWidth: '2rem' }}
                                showNumber
                                max={10}
                                min={1}
                                value={this.state.val}
                                onChange={this.onChangeVal}
                                useTouch={false}
                            />
                        }
                    >
                        请选择商品数量
                    </List.Item>*/}
                </list>
                <div style={{
                    height:'1rem'
                }}></div>
                <Flex className="footer" justify="end">
                    <span onClick={()=>{
                        this.props.add_commodity({
                            avatar:'http://localhost:8333/1.jpg',
                            host: '北京xxxx公司',
                            rmb: 500,
                            name: '金属探测仪',
                            content: '采用t7302389719731928'
                        });
                        this.props.history.push('/buyCar');
                    }} className="car">加入购物车</span>
                    <span onClick={()=>{this.context.router.history.push('/buyCar')}}  className="buy">立即购买</span>
                </Flex>
            </div>
        )
    }
}
import './GoodsDetail.less'