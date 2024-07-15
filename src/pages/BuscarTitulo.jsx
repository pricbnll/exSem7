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

// export function BuscarTitulo() {
//     const [data, setData] = useState([]);
//     const [randomTitles, setRandomTitles] = useState([]);

//     async function getData() {
//         const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
//         const data = await response.json();
//         setData(data.items); // items should be the array from the data
//         selectRandomTitles(data.items);
//     }

//     function selectRandomTitles(items) {
//         const titles = [];
//         for (let i = 0; i < 1; i++) { // change 5 to any number of titles you want to display
//             const randomIndex = Math.floor(Math.random() * items.length);
//             titles.push(items[randomIndex].titulo);
//         }
//         setRandomTitles(titles);
//     }

//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <div className="container mt-4">
//             <h1>Notícias: </h1>

                //retirar a arrow function daqui e colocar fora do return
//             {randomTitles.map((titulo, index) => (
//                 <p key={index}>{titulo}</p>
//             ))}
//         </div>
//     );
// }
