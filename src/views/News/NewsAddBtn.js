import React, { useState } from 'react';
import checkIcon from './iconmonstr-plus-thin-16.png';

function NewsAdd(props) {

    const [isShow, SetIsShow] = useState(false)

    const mouseEnterHandler = () => {
        SetIsShow(true)
    }

    const mouseLeaveHandler = () => {
        SetIsShow(false)
    }

    return (
        <div onMouseLeave={mouseLeaveHandler}>
            <span onMouseEnter={mouseEnterHandler}><img src={checkIcon} /></span>
            <p className={isShow ? "newsAddBtn newsShow" : "newsAddBtn"}>
                <a onClick={props.tabAddHandler}>Stock</a>
                <a onClick={props.memoAddHandler}>Memo</a>
            </p>
        </div>
    )
}

export default NewsAdd;