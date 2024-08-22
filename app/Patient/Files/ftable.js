import Image from 'next/image'

export default function Ftable({file}){
	
	return(
		<tr className="border-solid border-gray-400 border-2">
			<td className="border-solid border-gray-400 border-2 p-4"> {file.name} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {file.ftype} </td>
			<td className="border-solid border-gray-400 border-2 p-4"> {file.description} </td>
			<td className=" flex w-full h-full justify-center">
				<img 
				src = {file.location}
				alt = " "
				width = "50"
				height = "50"
				className = "rounded-md shadow-sm self-center"
			/>
			</td>
			<td className="text-center border-gray-400"> <button className=" rounded-3xl p-2 bg-blue-100 mx-4"> Remove File </button></td>
		</tr>
	);
}