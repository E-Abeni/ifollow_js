"use client"

export default function Ftable({file}){
	
	return(
		<tr className="border-solid border-gray-400 border-2">
			<td className="border-solid border-gray-400 border-2 p-4"> {file.file_name} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {file.file_type} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {file.file_size} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {file.upload_date} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {file.category} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {file.description} </td>
			<td className="text-center border-gray-400">
				<button className=" rounded-3xl p-2 bg-green-100 m-4"> Download </button>
				<button className=" rounded-3xl p-2 bg-red-100 m-4"> Remove </button>
			</td>
		</tr>
	);
}