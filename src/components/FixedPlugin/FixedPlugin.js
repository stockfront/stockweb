import React,{useEffect, useState} from "react";
// reactstrap components
import { 
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Dropdown, 
  DropdownToggle, 
  Badge 
} from "reactstrap";

import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { backgroundColors } from "../../contexts/BackgroundColorContext";
import {Get,GetTheme} from './DataApi';
import search_icon from './search_magnifying_glass_icon_149392.png';

function FixedPlugin(props) {
    const[dropDownIsOpen, setdropDownIsOpen] = React.useState(false);  
    const handleClick = () => {
      setdropDownIsOpen(!dropDownIsOpen);
    };

    const[modal1,setModal1] = useState(false);
    const[modal2,setModal2] = useState(false);
    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);

    const[edit,setEdit] = useState({});
    const[input,setInput] = useState(false)
    const[stockName,setStockName] = useState();  

    const [cnt,setCnt] = useState(0);


    const editList = (x) => {
      setEdit({x});

    };
    
    return (
      <div className="fixed-plugin">
        <Dropdown isOpen={dropDownIsOpen} toggle={handleClick}>
          <DropdownToggle tag="div">
            <i className="fa fa-cog fa-2x" />
          </DropdownToggle>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <Badge
                  color="primary"
                  className={
                    props.bgColor === backgroundColors.primary ? "active" : ""
                  }
                  onClick={() => {
                    props.handleBgClick(backgroundColors.primary);
                  }}
                />{" "}
                <Badge
                  color="info"
                  className={
                    props.bgColor === backgroundColors.blue ? "active" : ""
                  }
                  onClick={() => {
                    props.handleBgClick(backgroundColors.blue);
                  }}
                />{" "}
                <Badge
                  color="success"
                  className={
                    props.bgColor === backgroundColors.green ? "active" : ""
                  }
                  onClick={() => {
                    props.handleBgClick(backgroundColors.green);
                  }}
                />{" "}
              </div>
            </li>
            <li className="adjustments-line text-center color-change">
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                  < >
                    <span className="color-label">LIGHT MODE</span>{" "}
                    <Badge
                      className="light-badge mr-2"
                      onClick={() => changeTheme(themes.light)}
                    />{" "}
                    <Badge
                      className="dark-badge ml-2"
                      onClick={() => changeTheme(themes.dark)}
                    />{" "}
                    <span className="color-label">DARK MODE</span>{" "}
                  </>
                )}
              </ThemeContext.Consumer>
            </li>
              <div className='edit-menu'>
              <span>
              <Button className='edit-button' color='danger' onClick={toggle1} > stock info</Button>
              <Modal isOpen={modal1} toggle={toggle1} >
                  <ModalHeader toggle={toggle1}>  
                    <input className='search_icon' id="stockName" type="text"/>
                    <input type="image" src={search_icon} width='25' height='25' onClick={() => {setStockName(document.getElementById('stockName').value);}}/>
                  </ModalHeader>
                 
                  <ModalBody className='card plugin-card modal-body'>
                    <Get stockName={stockName} input={input}></Get>
                    {console.log("start : "+stockName)}
                  </ModalBody>       
              </Modal>

              <Button className='edit-button' color='danger'onClick={toggle2} > theme info</Button>
              <Modal isOpen={modal2} toggle={toggle2} >
                  <ModalHeader toggle={toggle2}> test2</ModalHeader>
                  <ModalBody>
                    <GetTheme/>
                  </ModalBody>
              </Modal>
               </span>
              
            
              </div>
          </ul>
        </Dropdown>
      </div>
  );
                }
                
  export default FixedPlugin;