"use server"

import {redirect} from 'next/navigation'

export async function registerUser(prevState, formData){
    
    const data = Object.fromEntries(formData.entries())

    const response = await fetch(
        `http://localhost:3000/api/patient`,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              }

        },
        
    );

    if (response.ok){
        redirect("/")
    }
    else {
        return {message: "Error happen during registration"}
    }
    return {message: "done"}
}