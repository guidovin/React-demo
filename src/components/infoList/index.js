import React, {Component} from 'react'
import InfoListItem from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/infoListItem'

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

            <div className='InfoUL'>
                    
                    {lista.map( (a) => {
                         return (

                             <InfoListItem titulo={a.titulo} img={a.img} msg={a.msg}/>
                             
                            )
                    
                    })}

                    
            </div>
        )
    }
    
}


