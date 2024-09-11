import Link from "next/link"
import DsTable from './dstable'


export default function page(){
	
	
	return (
	<>
		<DsTable />
		<a href="./Doctors/Search" className = "bg-green-600 rounded-3xl py-2 px-5 w-auto mx-10 my-2 text-white border-solid border-2 border-gray-600"> Add doctor </a>
	</>
)}