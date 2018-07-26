import React, {Component} from 'react'
import InfoListItem from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/infoListItem'
import StyleModule from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/infoList/infolist.module.css'


/*
stuff that needs updating in this module: receive data from DB, add to array of objects, if no key on objects add keys before maping, styling in infolist.module.scss
general stuff from project: add alias to pathing laternatively figure why the f*** the relative pathing does not work in the dev enviro
*/

export default class InfoList extends Component {

    render () {

       
        const lista = [
            {
                titulo: 'sorvete1',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete2',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete3',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
        ]

        return(

            <div className={StyleModule.InfoUL}>
                    
                    {lista.map( (a) => {
                        
                         return (

                             <InfoListItem titulo={a.titulo} img={a.img} msg={a.msg} key={Math.random()}/>
                             
                            )
                    
                    })}

                    
            </div>
        )
    }
    
}


