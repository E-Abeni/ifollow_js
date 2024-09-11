"use server"

import { cookies } from "next/headers";

export async function fetchPatients(){
	let doctor_id = JSON.parse(cookies().get("user_data")?.value).doctor_id
	
	return (
		fetch(`http://localhost:3000/api/my_patients?doctor_id=${doctor_id}`, {method: 'GET'})
		.then((res) => res.json())
		.then((my_patients) =>{
			let patients = [];

			for(const patient of my_patients){
				patients.push(fetch(`http://localhost:3000/api/patient?patient_id=${patient.patient_id}`, {method: 'GET'}).then(patient => patient.json()))
				
			}

			return (patients)

		})
		.then(patients => Promise.all(patients))
	)

}
