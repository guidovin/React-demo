import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import InfoList from '/home/guidovin/Desktop/tribo-dev/tribo-front/tribo-info/src/components/infoList'

const root = document.querySelector('#container');

ReactDOM.render(
    
    <div className='Application'>

        {console.log('iniciei render da dom')}
        
        <InfoList/>

    </div>,
    root
);