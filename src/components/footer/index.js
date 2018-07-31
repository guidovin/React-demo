import React, {Component} from 'react'

import ModuleStyle from '../cssIndex/s.module.css'

/*
stuff that needs updating in this module: styling in footer.module.scss, also everything else, it`s barebones.
general stuff from project: add alias to pathing laternatively figure why the f*** the relative pathing does not work in the dev enviro. Add redux(?).
*/


export default class Footer extends Component{
   

    render(){
        if(this.props.footerOn){
            return (

                <div>
                    <div className={ModuleStyle.push}></div>
                    <div className={ModuleStyle.footer} style={{...ModuleStyle.footer.style}}></div>
                </div>
            ) 
        }   
        else if(!this.props.footerOn) return (

            
            <div>    
                <div>
                    <div className={ModuleStyle.push}></div>
                    <div style={{...ModuleStyle.footer.style , height: '0vh'}}></div>
                </div>

            </div>
        ) 

    }   

}