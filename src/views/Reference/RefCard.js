import React, { useState } from 'react'

function RefCard(props) {

    const [data, setData] = useState(props.cardData["urlData"]);

    const getList = (data) => {        
        return (
            data.map((value, idx) => {
               
                return (
                 <li key={value.urlTitle} >
                     <a href={value.urlLink} target="_blank"><strong>{value.urlTitle}</strong></a>
                     <div>{value.urlExplain}</div>
                 </li>   
                )
            })
        )
    }


    return (
        <div className="ref_card">
            <button className="ref_card_removeBtn" onClick={props.removeCard}>삭제</button>
            <div className="ref_card_header">{props.cardData.category}</div>
            <div className="ref_card_body">
                <ul>
                    {getList(data)}
                </ul>
            </div>

        </div>
    )
}

export { RefCard };