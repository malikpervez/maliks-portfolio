import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    backgroundColor       : 'rgb(0,0,0,.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class Resume extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render(){
    return(
      <div>
        <a className='routes' onClick={this.openModal}>Resume</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <img className='resume' ref={subtitle => this.subtitle = subtitle} src ={require("../images/MyResume.jpg")} alt='resume'></img>
        </Modal>
      </div>
    )
  }
}

export default Resume;
