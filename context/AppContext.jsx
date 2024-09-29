import React, { useEffect,useState } from 'react'
import { createContext } from 'react'
//import { alldoctors } from '../src/assets/assets/assets_frontend/assets'
export const AppContext= createContext()

const AppContextProvider = ({children})=>{
const [doctors, setDoctors ]= useState([])
const getDoctorData = async()=>{


}
    useEffect(()=>{
  getDoctorData()
},[])

console.log(doctors)
    return (
        <AppContext.Provider value={{doctors}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider