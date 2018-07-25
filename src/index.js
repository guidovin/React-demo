import React from 'react'
import ReactDOM from 'react-dom'
import HeaderNav from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/headerNav'
import WelcomeImage from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/welcomeImage'
import Footer from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/footer'
import InfoList from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/infoList'
import AppStyle from  './index.module.css'

const root = document.querySelector('#container');

ReactDOM.render(
    <div className={AppStyle.App}>
        <HeaderNav/>
        <WelcomeImage/>
        <InfoList className={AppStyle.InfoUL}/>
        <Footer/>
        
    </div>,
    root
);