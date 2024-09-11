"use server"

import {redirect} from 'next/navigation'
import { cookies } from 'next/headers';

export async function authP(prevState, uinfo){
    const response = await fetch(
        `http://localhost:3000/api/patient_login?username=${uinfo.uname}`,
        {
            method: 'GET',
        }
    );
    
    const data = await response.json()
    
    if(data.password === uinfo.passwd){
        const patient_info = await fetch(`http://localhost:3000/api/patient?patient_id=${data.patient_id}`)
        
        if(patient_info.ok){
            const p_data = await patient_info.json()
            p_data.id = data.patient_id
            
            cookies().set("user_data", JSON.stringify(p_data))
            redirect('/Patient')
            
            return {message: "login Sucessful", tries: 0}
        }

        return {message: "Unable to fetch user info. Please try again!", tries: prevState.tries + 1}        
        
    }else {
        return {message: "! Incorrect username or password", tries: prevState.tries + 1}
    }

}

export async function authD(prevState, uinfo){
    
    const response = await fetch(
        `http://localhost:3000/api/doctor_login?username=${uinfo.uname}`,
        {
            method: 'GET',
        }
    );
    
    const data = await response.json()

    if(data.password === uinfo.passwd){
        const doctor_info = await fetch(`http://localhost:3000/api/doctor?doctor_id=${data.doctor_id}`)
        
        if(doctor_info.ok){
            const d_data = await doctor_info.json()
            d_data.id = data.doctor_id
            
            cookies().set("user_data", JSON.stringify(d_data))
            redirect('/Doctor')
            
            return {message: "login Sucessful", tries: 0}
        }

        return {message: "Unable to fetch user info. Please try again!", tries: prevState.tries + 1}        
        
    }else {
        return {message: "! Incorrect username or password", tries: prevState.tries + 1}
    }

}