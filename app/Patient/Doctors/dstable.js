import {fetchDoctors} from "./fetch"
import Dtable from "./dtable"
import { Suspense } from 'react';


function MyTable(){
	const tabel = fetchDoctors()
		.then(doctor => {
			console.log(doctor)
			return(
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
			
			{
				doctor.map(doctor => <Dtable key = "0" doctor = {doctor} />)
			}
			
			</tbody>
		</table>
		)})

	return tabel
}

export default function DsTable(){
	    
	return (
		<Suspense fallback={<p>Loading...</p>}>
		  <MyTable />
		</Suspense>
	  );

}


