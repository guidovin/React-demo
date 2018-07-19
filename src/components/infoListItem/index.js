import React, {Component} from 'react'


export default class ListItem extends Component{
   
    constructor(props){
        super(props)
        this.state = {open: false}
    }

    render(){
        
        return (
            <div className='InfoLI'>
                <img src={this.props.img} alt='image did not load for some reason... goddamnit'/>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.msg}</p>
            </div>
        )
    }

}