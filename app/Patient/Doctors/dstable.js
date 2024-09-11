import {fetchDoctors} from "./fetch"
import Dtable from "./dtable"
import { Suspense } from 'react';


export default async function DsTable(){

	let doctors = await fetchDoctors()
	
	return (
		
		  <table className="m-10 w-9/12">
			<thead className="bg-gray-300">
			<tr className=" ">
				<th className="border-solid border-gray-300 border-2 p-4"> Profile </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Name </th>
				<th className="border-solid border-gray-300 border-2 p-4"> UserName </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Speciality </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Work_Location </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Actions </th>
			</tr>
			</thead>
			<tbody>
			<Suspense fallback={<tr><td>Loading...</td></tr>}>
			{
					
						doctors.map(doctor => <Dtable doctor = {doctor} />)
					
			}
			</Suspense>
			</tbody>
		</table>
		
	  );

}


