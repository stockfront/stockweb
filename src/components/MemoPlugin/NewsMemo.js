import React, { useState } from 'react';

function NewsMemo(props){


    const getList = (data) => (

        data.map((value,idx)=>{
            return(
                <p><a key={value.newstitle} href={value.newslink} target="_blank">{value.newstitle}</a></p>
            )
        })

    )

    console.log(props.news)

    return(
        <div>
        {getList(props.news)}
        </div>
    )
    
}

export default NewsMemo;