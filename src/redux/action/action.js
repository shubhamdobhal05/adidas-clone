import { STORE_DATA } from "../actionTypes";

const storeData = (payload) => ({
    type: STORE_DATA,
    payload
})

export {storeData}