import React, {Component} from 'react'

import ModuleStyle from '../cssIndex/s.module.css'


export default class Footer extends Component{


    render(){
        if(this.props.footerOn){
            return (

                <div>
                    <div className={ModuleStyle.push}></div>
                    <div className={ModuleStyle.footer} style={{...ModuleStyle.footer.style}}>
                      <p>Footer : Social media and branding goes here </p>
                    </div>
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
