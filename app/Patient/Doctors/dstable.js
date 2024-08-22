import {fetchDoctors} from "./fetch"
import Dtable from "./dtable"

const myDoctors = fetchDoctors();

export default function DsTable(){
	
	return (
		<table className="m-10 w-9/12 h-96">
			<thead className="bg-gray-300">
			<tr className=" ">
				<th className="border-solid border-gray-300 border-2 p-4"> Profile </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Name </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Speciality </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Bio </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Actions </th>
			</tr>
			</thead>
			<tbody>
			
			{myDoctors.map(doctor => <Dtable doctor = {doctor} />)}
			
			</tbody>
		</table>
	);
	
}


