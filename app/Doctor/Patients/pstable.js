import {fetchPatients} from "./fetch"
import Ptable from "./ptable"
import { Suspense} from 'react';


export default async function PsTable(){
	const patients = await fetchPatients()
	
	return (
		<Suspense fallback={<div>Loading...</div>}>
		<table className="m-10 w-9/12">
			<thead className="bg-gray-300">
			<tr className=" ">
				<th className="border-solid border-gray-300 border-2 p-4"> Profile </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Name </th>
				<th className="border-solid border-gray-300 border-2 p-4"> UserName </th>
				<th className="border-solid border-gray-300 border-2 p-4"> email </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Phone Number </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Date of Birth </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Sex </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Address </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Occupation </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Religion </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Actions </th>
			</tr>
			</thead>
			<tbody>
				
				 { 
				 	patients.map(patient => <Ptable patient={patient}/>)
				 }
				
			</tbody>
		</table>
		</Suspense>
	  );

}


