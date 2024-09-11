"use client"
import FsTable from './fstable'
import Link from 'next/link'

export default function page(){
	
	return (
	<>
		<FsTable />
		<Link href="Files/upload" className = "bg-green-600 rounded-3xl py-2 px-5 w-auto mx-10 my-2 text-white border-solid border-2 border-gray-600"> Upload File </Link>
		<div className="h-screen"></div>
	</>
)}