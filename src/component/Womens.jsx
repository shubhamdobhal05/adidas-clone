import React, {useState, useEffect } from "react";
import "./womenRunning.css"


const Womens = () => {

    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:8000/women")
        .then((res) => res.json())
        
        .then((res) => {console.log(res);
            setData(res)})
        .catch((err) => console.log(err))


    }, []);


    
    
    


    return (
        <div className="container">
            {data.map(data => (
                <div className="product" key={data.id}>
                    <img className="img" src={data.img} alt={data.title}/>
                    <p>{data.price}</p>
                    <p>{data.title}</p>
                </div>
            ))}
        </div>
    )
}


export default Womens;