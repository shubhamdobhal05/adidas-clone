import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../redux/action/action";


const Mensrunning = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8000/men")
        .then((res) => res.json())
        
        .then((res) => dispatch(storeData(res)))
        .catch((err) => console.log(err))


    }, []);


    //read the data we have fetched
    const data = useSelector((state) => state.data);
    console.log(data)


    return (
        <div>
            hello world
        </div>
    )
}


export default Mensrunning;