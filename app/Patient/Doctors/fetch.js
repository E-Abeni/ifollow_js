//import {sql, db} from '@vercel/postgres';
"use client"
const doctors = [
		{
			img: "/prof.jpg",
			name: "Abebe",
			speciality: "Neurologist",
			bio: "Work hard"
		},
		{
			img: "/prof.jpg",
			name: "Abebe",
			speciality: "Neurologist",
			bio: "Work hard"
		},
		{
			img: "/prof.jpg",
			name: "Abebe",
			speciality: "Neurologist",
			bio: "Work hard"
		}
	];
	
export function fetchDoctors(){
	
	return doctors
}

export function pushDoctor (d){
	
	console.log("called");
	doctors.push(d);
	
}