"use server"

import { cookies } from "next/headers";

export async function fetchFiles(){
	let patient_id = JSON.parse(cookies().get("user_data").value).id
	
    console.log(patient_id)
	return (
		fetch(`http://localhost:3000/api/file?patient_id=${patient_id}`, {method: 'GET'})
		.then((res) => res.json())		
    )

}