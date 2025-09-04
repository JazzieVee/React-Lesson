import './Modal.css'


function Modal({ question, closeModal, keepTodo }) {

  return (
<>
  <div className="modal">
    <p className="modal__title"> { question } </p>
    <div className="modal__buttons">
      <button className="btn btn__cancel" onClick={keepTodo}>No</button>
      <button className="btn" onClick={closeModal}>Yes</button>
    </div>
  </div>
  <div className="backdrop"/>
  
  </>

    );
  };

export default Modal;