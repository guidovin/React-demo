import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import InfoList from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/infoList'


const root = document.querySelector('#container');

ReactDOM.render(
    <div className='Application' style={{display: 'flex', justifyContent: 'center',backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center', height:'100%' , backgroundImage: 'url("http://via.placeholder.com/1920x1080")'}}>
    
        <InfoList/>
        
    </div>,
    root
);