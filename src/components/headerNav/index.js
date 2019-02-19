import React, {Component} from 'react'
import ModuleStyle from '../headerNav/headerNav.module.css'
import SideNav from '../sideNav'



export default class HeaderNav extends Component{
    constructor(props){
        super(props)

        this.state = {navOn: false}

    }

    buttomClick(){

        this.setState({navOn: !this.state.navOn})


    }



    render(){

        if(true){
            return (

                <div className={ModuleStyle.HeaderNav} id='headerTarget'>

                    <div className={ModuleStyle.NavMenu} onClick={this.buttomClick.bind(this)}>

                    </div>


                    <SideNav isOpen={this.state.navOn} onClick={this.buttomClick.bind(this)}/>


                </div>


            )
        }
    }




}
