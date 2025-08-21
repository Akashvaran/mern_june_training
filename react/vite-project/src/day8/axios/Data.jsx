import { useEffect, useState } from "react"
import axios from 'axios'

export const Data = () => {
    const [value, setValue] = useState([])


    async function getdata() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data)
            setValue(response.data)


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getdata()
    }, [])


    return (


        <div>
            {value.map((value, index) => (
                // <div key={index}>

                // </div>
                <div key={value.id}>
                    <p>{value.title}</p>
                    <img src={value.image} alt="" />
                    <p>price {value.price}</p>
                </div>
            ))}

        </div>
    )
}
