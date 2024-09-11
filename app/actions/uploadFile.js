"use server"
import {cookies} from 'next/headers'
import { revalidatePath } from 'next/cache';

export default async function uploadFile(formData){
    
    try {
        return (fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData,
            headers: {
                Cookie: cookies()
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to upload file');
             }
            return res.json()
            
    })
        .then((data) => {
            revalidatePath("Patients/Files")
            return data
        }))        
       
    } catch (error) {
        console.error(error);
        
    }
}