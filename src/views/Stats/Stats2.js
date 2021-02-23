import { Modal } from "reactstrap";
import React, { useState } from "react";
import NewWindow from 'react-new-window';

export function Stats2() {

    const [day, setDay] = useState("");
    const [isWindowOpen, SetIsWindowOpen] = useState(false);

    const windowOpenHandler = () => {
        SetIsWindowOpen(!isWindowOpen)
    }

    const sendText = (e) => {

        console.log(e)
        e.preventDefault()
    }

    return (
        <div className="content">
            <button onClick={windowOpenHandler}>Click</button>
            {isWindowOpen &&
                (<NewWindow features={{ "titlebar": "no", "toolbar": "no" }}
                    onUnload={windowOpenHandler}>

                    <form onSubmit={sendText}>
                        <fieldset>
                            <legend>종목명</legend>
                            <textarea></textarea>
                            <span>
                                <button>수정</button>
                                <input type="submit" value="저장"/>
                            </span>
                        </fieldset>
                    </form>
                    <form onSubmit={sendText}>
                        <fieldset>
                            <legend>테마명</legend>
                            <textarea></textarea>
                            <span>
                                <button>수정</button>
                                <input type="submit" value="저장"/>
                            </span>
                        </fieldset>
                    </form>
                </NewWindow>)}
        </div>
    );
}
