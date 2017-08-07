import React,{Component} from 'react';
import {ajax} from '../../util/index.js';

export default class extends Component{


    componentWillMount(){
        
        ajax({
            url:'http://localhost:8333/messages',
            method:'POST',
            data:{
                'id':1,
                'loged':true,
            }
            
        }).then((res)=>{
            
            console.log(res)

        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>1111</div>
        )
    }
}
