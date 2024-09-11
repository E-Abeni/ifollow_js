"use client"
import { useState } from 'react'

import {Psignup, Dsignup} from './signup'

export default function Page(){
    const [isPatient, setIsPatient] = useState(true)

    function handleClick(){
        setIsPatient(!isPatient)
    }

    return (
        <>
            <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md" onClick={handleClick}>{isPatient? "Click here if you are a doctor." : "Click here if you are a patient."}</button>
            {isPatient? <Psignup/> : <Dsignup />}
            <br/>
        </>
    )
    
}