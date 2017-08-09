import React,{Component} from 'react';

export default class extends Component{
    constructor(){
        super();
        this.state=flase;
    }


    render(){
        return(
            <div style={{width:'100%',height:'100%',background:'#ccc',position:'absolute',left:'100%'}}>
                {this.props.children}

            </div>
        )



    }


}