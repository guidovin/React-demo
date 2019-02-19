import React, {Component} from 'react'
import InfoListItem from '../infoListItem'
import ModuleStyle from '../infoList/infolist.module.css'



export default class InfoList extends Component {
    constructor(props){
      super(props);
      this.state = {lista:[]};
    }


    render () {



        return(

            <div className={ModuleStyle.InfoUL} id='scrollTracker'>

                    {this.state.lista.map( (a) => {
                        console.log(a)
                         return (

                             <InfoListItem titulo={a.titulo} img={a.img} msg={a.msg}  key={Math.random()}/>

                            )

                    })}


            </div>
        )


    }

    componentDidMount() {
        window.addEventListener('scroll', this.trackScrolling);
        fetch('https://picsum.photos/100').then((res) =>{

          this.setState({
          lista:[
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,//espaco para foto com informacoes nutricionais
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
                   {
                       titulo: 'Titulo do produto',
                       msg: 'descricao do produto em detalhes',
                       img: res.url,
                   },
              ]})}

            );


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
