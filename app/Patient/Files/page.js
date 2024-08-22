"use client"
import {useState} from 'react';
import FsTable from './fstable'
import UploadButton from './button'

export default function page(){
	
	const [a, setA] = useState(0);
	
	function onCall(){
		setA(a + 1);
		console.log(a);
	}
	
	return (
	<>
		<FsTable />
		<UploadButton onUpdate={onCall} />
		<div className="h-screen"></div>
	</>
)}