import React, {Component} from 'react'
import ModuleStyle from '../sideNav/c.module.css'


/*
stuff that needs updating in this module: styling in headerNav.module.scss, also everything else, it`s barebones.
general stuff from project: add alias to pathing laternatively figure why the f*** the relative pathing does not work in the dev enviro. Add redux(?).


<img src='require("/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg")'/>

*/


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