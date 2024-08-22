import Image from 'next/image'

export default function Dtable({doctor}){
	
	return(
		<tr className="border-solid border-gray-400 border-2">
			<td className="border-solid border-gray-400 border-2 text-center">
				<Image 
				src = {doctor.img}
				alt = " "
				width = "50"
				height = "50"
				className = "rounded-md shadow-sm"
			/>
			</td>
			<td className="border-solid border-gray-400 border-2 p-4"> {doctor.name} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {doctor.speciality} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {doctor.bio} </td>
			<td className="text-center border-gray-400"> <button className=" rounded-3xl p-2 bg-blue-100"> Remove </button></td>
		</tr>
	);
}