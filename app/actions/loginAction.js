"use server"

import {redirect} from 'next/navigation'
import { cookies } from 'next/headers';

export async function auth(prevState, uinfo){
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
            
            console.log(p_data)
            cookies().set("user_data", JSON.stringify(p_data))
            redirect('/Patient')
            
            return {message: "login Sucessful", tries: 0}
        }

        return {message: "Unable to fetch user info. Please try again!", tries: prevState.tries + 1}        
        
    }else {
        return {message: "! Incorrect username or password", tries: prevState.tries + 1}
    }

}