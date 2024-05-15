import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


function ModalEx(){

    const[show,setShow]=useState(false);

    const handleShow=()=>{
        setShow(true);
    }
    const handleclose=()=>{
        setShow(false);
    }

    return(
        <div className='modal show' style={{display:'block',position:'initial'}}>
            <Button variant='primary' onClick={handleShow}>Launch demo Modal</Button>
            <Modal show={show} onHide={handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    <h4>Modal body</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleclose}>close</Button>
                    <Button variant='secondary' onClick={handleclose}>save Changes</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default ModalEx;