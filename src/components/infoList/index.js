import React, {Component} from 'react'
import InfoListItem from '../infoListItem'
import ModuleStyle from '../infoList/infolist.module.css'



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
            {
                titulo: 'sorvete4',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete5',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete6',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            }, 
            {
                titulo: 'sorvete7',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete8',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete9ss',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete9ss',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
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
            {
                titulo: 'sorvete4',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete5',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete6',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            }, 
            {
                titulo: 'sorvete7',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete8',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete9ss',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
            {   
                titulo: 'sorvete9s',
                msg: 'dlkasdlkajsdlkjasfbasicuyawekjbajgaskkjdaygscjhabsjyg',
                img: require('/home/guidovin/Desktop/tribo-dev/tribo-info/src/resources/50x50.jpg'),
            },
        ]
     
        return(
            
            <div className={ModuleStyle.InfoUL} id='scrollTracker'>
                    
                    {lista.map( (a) => {
                        
                         return (

                             <InfoListItem titulo={a.titulo} img={a.img} msg={a.msg}  key={Math.random()}/>
        
                            )
                    
                    })}

                   
            </div>
        )

        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.trackScrolling)
    }

    componentDidUpdate(){
        window.addEventListener('scroll', this.trackScrolling)
    }
    
    isBottom(el){
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    
    trackScrolling = () => {

        const wrappedElement = document.getElementById('scrollTracker');
        if (this.isBottom(wrappedElement)) {

            this.props.onChange(true)
            document.removeEventListener('scroll', this.trackScrolling)
        }
        else if (this.props.footerOn){
            this.props.onChange(false);
        }
    }
    
}


