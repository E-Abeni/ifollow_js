"use client"
import Image from 'next/image'

export default function Ptable({patient}){
	console.log("***", patient)
	return(
		<tr className="border-solid border-gray-400 border-2">
			<td className="border-solid border-gray-400 border-2 text-center">
				<Image 
				src = "/prof.jpg"
				alt = " "
				width = "50"
				height = "50"
				className = "rounded-md shadow-sm"
			/>
			</td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.first_name} {patient.last_name} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.username} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.email} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.phone_number} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.date_of_birth} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.sex} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.address} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.occupation} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {patient.religion} </td>
			<td className="text-center border-gray-400"> <button className=" rounded-3xl p-2 bg-blue-100"> Details </button></td>
		</tr>
	);
}