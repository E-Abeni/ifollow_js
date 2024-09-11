"use server"

import {cookies} from 'next/headers'

export default async function page(){
	const u_data = JSON.parse(cookies().get("user_data").value)
	return(
	<div className="flex flex-row flex-wrap h-fit">
		
		<h1> Welcome Dr. {u_data.first_name} {u_data.last_name} </h1>
		<div className="h-screen"></div>
	
	</div>
	)
}