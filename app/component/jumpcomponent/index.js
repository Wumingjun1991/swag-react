import React,{Component} from 'react';


export default (OldComponent, data) =>() =>  {
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
        componentDidMount(){
            setTimeout(()=>{
                this.setState({
                    left:'0%'
                })
            },30)
        }
        render(){
            return(
                <div style={this.state}>
                    <OldComponent {...data} />
                </div>
            )
        }
    };
}


