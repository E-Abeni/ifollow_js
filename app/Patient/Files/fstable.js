import {fetchFiles} from "./fetch"
import Ftable from "./ftable"

const myFiles = fetchFiles();

export default function FsTable(){
	
	return (
		<table className="m-10 w-auto h-96">
			<thead className="bg-gray-300">
			<tr className=" ">
				<th className="border-solid border-gray-300 border-2 p-4"> Date </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Type </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Description </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Attachement </th>
				<th className="border-solid border-gray-300 border-2 p-4"> Actions </th>
			</tr>
			</thead>
			<tbody>
			
			{myFiles.map(file => <Ftable file = {file} />)}
			
			</tbody>
		</table>
	);
	
}


