import React,{Component} from 'react';
const {PropTypes} = require('react');



export default class JumpComponent extends Component{
    constructor(){
        super();
        this.state={

            left:'100%',

        };
    }



    left = () =>{
        this.$timer = setInterval(()=>{
            this.setState({left : '0%'});
        },3000)
    };

    right = () =>{

            this.setState({left : '100%'});

    };

    componentDidMount(){
        if (this.props.flag == true){
            this.left()
        };


    }



    render(){
        let style={
            width:'100%',
            height:'100%',
            background:'#ccc',
            position:'fixed',
            zIndex:'101',
            transitionDuration:'1s',
            left:this.state.left,
        };
        return(
            <div style={style}>
                {this.props.children}

            </div>
        )

    }

}


