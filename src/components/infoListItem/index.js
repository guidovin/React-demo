import React, {Component} from 'react'
import Modal from 'react-responsive-modal'
import ModuleStyle from '/home/guidovin/Desktop/tribo-dev/tribo-info/src/components/infoListItem/infolistitem.module.css'


/*
stuff that needs updating in this module: styling in infolistitem.module.scss
general stuff from project: add alias to pathing laternatively figure why the f*** the relative pathing does not work in the dev enviro. Add redux(?).
*/


export default class ListItem extends Component{
   
    constructor(props){

        super(props)
        this.state = {open: false}

    }
     
    onCloseModal = () => {

        this.setState({ open: false })

    }

    onOpenModal = () => {

        this.setState({ open: true })

    }

    render(){

        const { open } = this.state;

        return (

            <div>
                <div className={ModuleStyle.InfoLI} onClick={this.onOpenModal.bind(this)}>
                   
                    <h3>{this.props.titulo}</h3>   

                </div>

                <Modal className={ModuleStyle.LIModal} open={open} onClose={this.onCloseModal.bind(this)}> 
                
                    <img src={this.props.img} alt='didnt load'/>
                    <p>{this.props.msg}</p>
                
                </Modal>

            </div>

        )

    }

}