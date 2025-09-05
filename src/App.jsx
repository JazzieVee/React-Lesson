import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav.jsx'


function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
  );
}

export default App;

















// import Todo from './components/Todo.jsx'
// import Title from './components/Title.jsx'
// import Modal from './components/Modal.jsx'
// import Counter from './components/Counter.jsx'
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [ showModal, setModalOpen ] = useState(false);
  
// function todoDelete() {
//   setModalOpen(true)
// }

// function yesModal() {
//   setModalOpen(false)
// }

// function noModal() {
//   setModalOpen(false)
// }

// useEffect(() => {} , [])

//   return (
// <div className='main__title'>
// <Title />
// <div>
//   <input type="text" onChange={(event) => {
//     console.log(event.target.value)
//   }} />
//   <button onClick={() => setModalOpen(true)}>Add To-Do </button>
// </div>
// <div className='todo__wrapper'>
// <Todo deleteTodo={todoDelete} title="Finish Frontend Simplified" />
// <Todo deleteTodo={todoDelete} title="Finish Interview Section" />
// <Todo deleteTodo={todoDelete} title="Land a $100K Job" />
// </div>
//    {showModal && (
//    <Modal 
//    closeModal={yesModal} 
//    keepTodo={noModal} 
//    question="Delete To-Do?" 
//    />
//    )}
// </div>
//   );
// }

// export default App;
