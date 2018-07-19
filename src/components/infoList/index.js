import React, {Component} from 'react'
import Hailmary from '/home/guidovin/Desktop/tribo-dev/tribo-front/tribo-info/src/components/infoList'

export default class InfoList extends Component {

    render () {

        {console.log('iniciei info list')}
        const lista = [
            {
                titulo: 'sorvete1',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: 'http://lorempixel.com/50/50/',
            },
            {   
                titulo: 'sorvete2',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: 'http://lorempixel.com/50/50/',
            },
            {   
                titulo: 'sorvete3',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: 'http://lorempixel.com/50/50/',
            },
        ]

        return(

            <div className='InfoList'>
                    <Hailmary/>
                    {lista.map( (a) => {
                    {console.log(a.titulo +' '+ a.msg+ ' '+ a.img + ' ' + lista.length)}
                    return (/*<InfoListItem/>*/ '')
                    
                    })}

                    {console.log('sim2')}
            </div>
        )
    }
    
}


