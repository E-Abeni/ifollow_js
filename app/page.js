"use client"
import {useState} from 'react'
import clsx from 'clsx'
import {Cinzel} from 'next/font/google'
import Image from 'next/image'
import {Plogin, Dlogin} from './tools/login'
const cinzel = Cinzel({
		subsets: ['latin']
	}) 
	
export default function page(){
	let content = [
		'Sign Up',
		'Add Your Doctor',
		'Follow Up'
	]
	
	
	const [status, setStatus] = useState(0);
	const [isPatient, setIsPatient] = useState(true)
	
	function hovered(){
		setStatus(status + 1);
	}
	function unhovered(){
		setStatus(0);
	}

	function handleClick(){
		setIsPatient(!isPatient)
	}
	
	return(
		<main className="flex flex-row h-screen">
		<div className="flex flex-col p-7 bg-blue-900 content-center justify-between w-1/2"> 
			<h1 className = {clsx(
				`${cinzel.className} border-solid border-2 rounded-full text-5xl w-auto h-25 italic font-mono text-center`, 
				{
					"bg-gray-300 p-5 text-black ": status === 0,
					"bg-white p-5 text-black " : status !== 0
				})} onMouseEnter={hovered}
					onMouseLeave={unhovered}> I-Follow </h1>

			<ul className = {`${cinzel.className}flex flex-col justify-center`}>
				{content.map((element) => <li className="text-center text-2xl m-5 text-white" key={element}> {element} </li>)}
			</ul> 
			<Image 
				src = "/ethi_health.jpg"
				alt = "image"
				width = "1900"
				height = "800"
				className = "block w-auto rounded-2xl shadow-2xl my-10"
			/>
			
			
		</div>
		<div className="w-full flex flex-col items-center justify-center h-screen bg-gray-200">
			{isPatient? <Plogin />: <Dlogin/>}
			<button class="px-4 py-2 my-5 bg-blue-500 hover:bg-blue-600 text-white rounded-md" onClick={handleClick}>{isPatient? "Click here if you are a doctor." : "Click here if you are a patient."}</button>
		</div>
		</main>
)}
