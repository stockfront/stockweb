import React, { useState } from 'react'
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

function AddNewsBtn(props) {

    const [toggle, setToggle] = useState(false)

    const toggleHandler = () =>{
        setToggle(!toggle)
    }

    return (
        <React.Fragment>
        <Button color="danger" onClick={toggleHandler}>추가</Button>
      <Modal isOpen={toggle} toggle={toggleHandler}>
      <ModalHeader toggle={toggleHandler}>Modal title</ModalHeader>
        <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleHandler}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggleHandler}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </React.Fragment>
    )

}

export default AddNewsBtn;