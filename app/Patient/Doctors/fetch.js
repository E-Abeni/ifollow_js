"use server"

import { cookies } from "next/headers";

export async function fetchDoctors(){
	let patient_id = JSON.parse(cookies().get("user_data")?.value).id
	console.log("called")
	
	return (
		fetch(`http://localhost:3000/api/allowed_doctors?patient_id=${patient_id}`, {method: 'GET'})
		.then((res) => res.json())
		.then((allowed_doctors) =>{
			let doctors = [];

			for(const doctor of allowed_doctors){
				doctors.push(fetch(`http://localhost:3000/api/doctor?doctor_id=${doctor.doctor_id}`, {method: 'GET'}).then(doctor => doctor.json()))
				
			}

			return (doctors)

		})
		.then(doctors => Promise.all(doctors))
	)

}
