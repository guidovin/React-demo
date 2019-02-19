import React, {Component} from 'react'
import ModuleStyle from '../sideNav/c.module.css'



export default class SideNav extends Component{


    render(){

        if(this.props.isOpen){
            return (

                <div className={ModuleStyle.sideNav} onClick={this.props.onClick}>




                </div>


            )
        }
        else return <div className={ModuleStyle.noSideNav}></div>
    }




}
