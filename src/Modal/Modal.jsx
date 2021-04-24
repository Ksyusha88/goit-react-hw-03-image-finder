import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
componentDidMount(){
    console.log('Modal componentDidMount')
    window.addEventListener('keydown', this.handleKeyDown )
}

componentWillUnmount(){
    console.log('Modal componentWillUnmount')
    window.removeEventListener('keydown', this.handleKeyDown)
}

handleKeyDown = e =>{
    if (e.code === "Escape" ){
        this.props.onClose();
    }
}

hendleBackdropClick = event=> {
if (event.currentTarget === event.target){
    this.props.onClose();
 }
};


render(){
return createPortal (
    <div className={style.Overlay} onClick ={this.hendleBackdropClick}>
        <div className={style.Modal}>{this.props.children}</div>
            <img src={this.props.largeImage} alt={this.props.alt} />
    </div>,
    modalRoot,
  );
 }
}
