import { useState } from "react"

export function InputControlado() {

    const [text, setText] = useState(null)
    // const [visibled, setvisibled] = useState(false)

    return (
        <div className="container mt-4">
            <input 
                    placeholder="Informe seu nome" 
                    // type={visibled ? "text" : "password"} 
                    className="form-control" 
                    onChange={(e) => setText(e.target.value)} />

            <span>{text}</span>
            {/* <button onClick={() => setvisibled(prevState => !prevState)}>{visibled ? "esconder" : "Ver"}</button> */}
        </div>
    )
}