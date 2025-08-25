import React, { useRef } from 'react'
import { IoMdClose } from "react-icons/io";

export const Modelwindow = () => {
    
    const Modelref = useRef();

    const forwardref = () => {
        Modelref.current.showModal()
    }
   
    const Refclose = () => {
        Modelref.current.close()
    }

    return (
        <div>
            <button onClick={forwardref}>
                click me
            </button>

            <dialog ref={Modelref}>
                <h1>hello world</h1>
                <p>welcome buddy this my model window</p>

                <button onClick={Refclose}><IoMdClose /></button>
            </dialog>


        </div>
    )
}
