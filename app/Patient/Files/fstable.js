import Ftable from "./ftable"
import {fetchFiles} from "./fetch"
import {Suspense, useState} from "react"


export default function FsTable(){	
	return(
		<table className="m-10">
				<thead className="bg-gray-300">
				<tr className=" ">
					<th className="border-solid border-gray-300 border-2 p-4"> File Name </th>
					<th className="border-solid border-gray-300 border-2 p-4"> Type </th>
					<th className="border-solid border-gray-300 border-2 p-4"> Size </th>
					<th className="border-solid border-gray-300 border-2 p-4"> Date </th>
					<th className="border-solid border-gray-300 border-2 p-4"> Category </th>
					<th className="border-solid border-gray-300 border-2 p-4"> Description </th>
					<th className="border-solid border-gray-300 border-2 p-4"> Action </th>
				</tr>
				</thead>
				<tbody>
					<Suspense>
						{
						fetchFiles().then((res) => res.map((file) => Ftable(file = {file} )))
						}

				
					</Suspense>

	</tbody>
	</table>
)	
}


