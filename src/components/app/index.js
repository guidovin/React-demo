import React, { Component } from 'react'
import ModuleStyle from  '../cssIndex/s.module.css'

import HeaderNav from '../headerNav'
import WelcomeImage from '../welcomeImage'
import Footer from '../footer'
import InfoList from '../infoList'


export default class App extends Component{
    constructor(props){
        super(props)

        this.state = {footerOn : false}
    

    }   
    handleFooter(e){
        this.setState({ footerOn: e})

    }


    render(){
        return(
            <div className={ModuleStyle.App}>  

                <HeaderNav />

                <WelcomeImage/>

                <InfoList footerOn={this.state.footerOn} onChange={this.handleFooter.bind(this)}/>

                <Footer footerOn={this.state.footerOn}/>

                
            </div>  
        )
    }

}