import { useEffect, useState } from "react"

export function BuscarTitulo() {

  
    const [titulo, setTitulo] = useState(null)

    async function getData() {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        const data = await response.json()
        const dataTitulo = data.items[0].titulo
        
        setTitulo(dataTitulo)
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div className="container mt-4">
           <h1>Noticias: </h1>

            <p>{titulo}</p>
            
        </div>
    )
}