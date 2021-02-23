import React, { useEffect, useState } from 'react'
import { RefCard } from './RefCard'
import {SetRefCard} from './SetRefCard'
import {
    Row, Col, Card, CardHeader, CardBody, CardFooter
} from 'reactstrap'
import Masonry from 'react-masonry-css'


function Reference(props) {

    const [nation, setNation] = useState("미국")
    const [cardData, setCardData] = useState([])
    const [prevData, setPrevData] = useState([])
    const[modal,setModal] = useState(false)


    useEffect(() => {

        let url = new URL("http://localhost:8080/geturl")
        url.search = new URLSearchParams({ "nation": nation })

        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(result => { setCardData(result); })

    }, [nation])

    const breakpointColumnsObj = {
        default: 3,
        1600: 2,
        1300: 1
    };

    const toggle = () => {setModal(!modal)}

    const getNationURL = (cardData) => {
        
        return (
            cardData.map((value, idx) => {
                return (
                    <RefCard key={value.category + nation + idx} cardData={value} removeCard={removeCard}/>
                )
            })
        )
    }

    const changeNation = (e) => {

        setNation(e.target.innerHTML)

    }

    const addCard = () => {

        toggle()

        setPrevData([])
    }

    const removeCard = () => {

        let value = window.confirm("")

        if(value) {
            // fetch 삭제
        }
        else {
            // fetch 삭제 x
        }
    }

    return (
        <div className="content">
            <Row>
                <Col sm="9">
                    <Card className="ref_wrapper">
                        <CardHeader>
                            <span>
                                <button className={nation == "미국" ? "ref_click" : ""} onClick={changeNation}>미국</button>
                                <button className={nation == "한국" ? "ref_click" : ""} onClick={changeNation}>한국</button>
                                <button className={nation == "일본" ? "ref_click" : ""} onClick={changeNation}>일본</button>
                            </span>
                        </CardHeader>
                        <br></br>
                        <CardBody className="ref_body">
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                            >
                                {getNationURL(cardData)}
                            </Masonry>
                        </CardBody>
                        <CardFooter>
                            <div className="ref_plus" onClick={addCard}>
                                +
                                </div>
                        </CardFooter>
                        <SetRefCard modal={modal} toggle={toggle} 
                        nation ={nation} prevData={prevData}/>
                    </Card>
                </Col>
            </Row>
        </div>


    )
}

export { Reference };


