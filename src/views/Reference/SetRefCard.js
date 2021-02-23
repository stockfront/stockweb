import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import React, { useState } from 'react'

function SetRefCard(props) {

    const getList = (data) => {

        return (
            <form onSubmit={handleSubmit}>
                <label>Category <input /></label>
                {data.map((value, idx) => {
                    return (
                        <ul>
                            <li>UrlTitle <input type="text" name="urlTitle" /></li>
                            <li>UrlLink <input type="text" name="urlLink" /></li>
                            <li>UrlExplain <input type="text" name="urlExplain" /></li>
                        </ul>
                    )
                })}
                <input type="submit" value="Submit" />
            </form>

        )

    }

    const handleSubmit = (e) => {
        console.log(
            {                
                "preUrlData": props.prevData,
                "changeUrlData": e
            }
        )

        
        
        e.preventDefault()
    }


    return (
        <Modal isOpen={props.modal} >
            <ModalHeader toggle={props.toggle}></ModalHeader>
            <ModalBody>
                <span>Category : 커뮤니티</span>
                <form onSubmit={handleSubmit}>

              
                    <ul>
                        <li>UrlTitle <input type="text" name="urlTitle" /></li>
                        <li>UrlLink <input type="text" name="urlLink" /></li>
                        <li>UrlExplain <input type="text" name="urlExplain" /></li>
                    </ul>
                  
                   
                    <ul>
                        <li>UrlTitle <input type="text" name="urlTitle" /></li>
                        <li>UrlLink <input type="text" name="urlLink" /></li>
                        <li>UrlExplain <input type="text" name="urlExplain" /></li>
                    </ul>
                   

                    <input type="submit" value="Submit" />
                </form>
            </ModalBody>
            <ModalFooter>
                <span><button>저장</button>
                    <button>취소</button></span>
            </ModalFooter>
        </Modal>
    )
}

export { SetRefCard }