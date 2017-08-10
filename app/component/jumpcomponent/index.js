import React,{Component} from 'react';


export default (OldComponent, data)=> (flag) => {
    // flag: true 左移 false 右
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                width:'100%',
                height:'100%',
                background:'#f5f5f9',
                position:'absolute',
                zIndex:'101',
                transitionDuration:'0.5s',
                left: '100%',
            };
        }
        componentWillMount(){
            flag ?
                setTimeout(()=>{
                    this.setState({
                        left:'0%'
                    })
                },30) : null;
        }
        turnBack = ()=>{
            this.setState({
                left:'100%'
            })
        };
        render(){
            return(
                <div style={this.state}>
                    <OldComponent {...data} turnBack={this.turnBack} />
                </div>
            )
        }
    };

    let render = () => {
        console.log('render');
        return (
            <div style={style}>
                <OldComponent {...data} />
            </div>
        )
    }


}


class JumpComponent extends Component{
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
        }
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


