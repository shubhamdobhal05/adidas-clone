import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../redux/action/action";




const Home = () => {
    //get the data
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("")
        .then((res) => res.json())
        .then((res) => dispatch(storeData(res)))
        .catch((err) => console.log(err))


    }, []);


    //read the data we have fetched
    const data = useSelector((state) => state.data)






    return (
        <>
            <h1>This is the landing page</h1>
        </>
    )
}

export {Home}