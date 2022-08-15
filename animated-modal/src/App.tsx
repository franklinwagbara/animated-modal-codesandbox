import React, {useState} from 'react';

import './App.css';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);
  
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  
  console.log("",open);
  return (
    <div className="App">
      <button onClick={openModal}> Open Modal </button>
      {open && 
        <Modal close={closeModal}>
          My message
        </Modal> 
      }
    </div>
  );
}

export default App;
