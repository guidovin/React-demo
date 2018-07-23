import React from 'react'
import ReactDOM from 'react-dom'
import InfoList from './components/infoList'

import mystyle from  '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/infoListItem/infolistitem.module.css'

const root = document.querySelector('#container');

ReactDOM.render(
    <div className='Application' style={mystyle.style}>
    
        <InfoList className='dd' style={mystyle.style}/>
        
    </div>,
    root
);