"use client"
import {useState} from 'react';

import DsTable from './dstable'
import AddButton from './button'

export default function page(){
	const [a, setA] = useState(0);
	
	function onCall(){
		setA(a + 1);
		console.log(a);
	}
	
	return (
	<>
		<DsTable />
		<AddButton onUpdate={onCall}/>
		<div className="h-screen"></div>
	</>
)}